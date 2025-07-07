---
id: statistics
title: Endpoints de Estatísticas
sidebar_label: Estatísticas
---

## 📊 /statistics

### GET `/statistics`

Obtém estatísticas gerais da plataforma, como número de casos, sintomas mais reportados e regiões afetadas.

#### Query Parameters

- `region` _(opcional)_: nome da região.

#### Exemplo de resposta (sem `region`):

```json
{
  "casesCount": 53,
  "regions": ["Luanda", "Benguela", "Huambo"],
  "symptoms": {
    "febre": 21,
    "dores de cabeça": 15
  },
  "periodStart": "2025-06-29T00:00:00.000Z",
  "periodEnd": "2025-07-06T23:59:59.999Z"
}
```

## 🚨 /statistics/top-risk
### GET /statistics/top-risk

Retorna as regiões com maior número de focos de risco nos últimos n dias.
###Query Parameters

- ` days ` (opcional): número de dias (padrão: 30)

- ` level `(opcional): "country", "province", "municipality" ou "neighbourhood" (padrão: "province")

### Exemplo de resposta:
``` json

[
  { "_id": "Luanda", "count": 18 },
  { "_id": "Benguela", "count": 14 },
  { "_id": "Huambo", "count": 9 }
]
```
## 🗺 /statistics/total-per-region
### GET /statistics/total-per-region

Retorna o número total de focos por região.
### Query Parameters

    - ` level ` (obrigatório): "country", "province", "municipality" ou "neighbourhood"

    - ` country, province, municipality (opcionais) ` : filtros dependentes do nível

### Exemplo de resposta:
``` json
[
  { "_id": "Talatona", "count": 12 },
  { "_id": "Viana", "count": 8 }
]
```

## 📈 /statistics/evolution
### GET /statistics/evolution

Retorna a evolução temporal de focos em uma região.
### Query Parameters

    region (obrigatório): nome da região

    level (obrigatório): "country", "province", "municipality", "neighbourhood"

    days (opcional): número de dias (padrão: 30)

    granularity (opcional): "day", "week", "month", "year" (padrão: "day")

### Exemplo de resposta:
``` json
{
  "region": "Luanda",
  "level": "province",
  "days": 30,
  "groupBy": "day",
  "data": [
    { "period": "2025-07-01", "total": 2 },
    { "period": "2025-07-02", "total": 5 }
  ]
}
```
## ⚠️ /statistics/alerts
### GET /statistics/alerts

Retorna alertas de crescimento anormal de focos.
### Query Parameters

    region (obrigatório): nome da região

    level (obrigatório): "country", "province", "municipality", "neighbourhood"

    granularity (opcional): "week", "month" (padrão: "week")

    days (opcional): número de dias (padrão: 30)

### Exemplo de resposta:
``` json
{
  "region": "Luanda",
  "level": "province",
  "granularity": "week",
  "alert": true,
  "currentPeriodTotal": 15,
  "averagePreviousPeriods": 6.25
}
```
