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
