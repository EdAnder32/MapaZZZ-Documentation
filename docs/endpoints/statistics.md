---
id: statistics
title: Estatísticas
sidebar_label: Estatísticas
---

## `GET /statistics`

**Descrição:** Retorna estatísticas gerais da plataforma.  
**Query Params:**
- `region` *(opcional)*: Nome da região a ser filtrada.

---

## `GET /statistics/top-risk`

**Descrição:** Retorna as regiões com maior risco de malária.  
**Query Params:**
- `days` *(opcional)*: Número de dias a considerar. *(default: 30)*
- `level` *(opcional)*: Nível geográfico (`country`, `province`, `municipality`, `neighbourhood`). *(default: province)*

---

## `GET /statistics/total-per-region`

**Descrição:** Total de focos por região.  
**Query Params:**
- `level` *(obrigatório)*: Nível geográfico.
- `country`, `province`, `municipality` *(opcionais)*

---

## `GET /statistics/evolution`

**Descrição:** Mostra a evolução de focos ao longo do tempo.  
**Query Params:**
- `region` *(obrigatório)*
- `level` *(obrigatório)*
- `days` *(opcional)*: *(default: 30)*
- `granularity` *(opcional)*: `day`, `week`, `month`, `year` *(default: day)*

---

## `GET /statistics/alerts`

**Descrição:** Retorna alertas de crescimento anormal de focos.  
**Query Params:**
- `region`, `level` *(obrigatórios)*
- `granularity` *(opcional)*: `week`, `month` *(default: week)*
- `days` *(opcional)*: *(default: 30)*
