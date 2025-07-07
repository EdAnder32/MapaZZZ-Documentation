---
id: endpoints-questionarios
title: Listar Questionários
---

### GET `/questionnaires`

Retorna uma lista de questionários com base em filtros opcionais.

#### Parâmetros de Query:

| Parâmetro    | Tipo    | Obrigatório | Descrição                                      |
|--------------|---------|-------------|------------------------------------------------|
| hasMalaria   | boolean | Não         | Filtra por histórico de malária (true/false)   |
| location     | string  | Não         | Filtra por localização                         |
| userId       | string  | Não         | Filtra por ID de usuário                       |

#### Exemplo de Resposta:

```json
[
  {
    "id": "abc123",
    "has_Malaria": true,
    "symptoms": ["febre", "calafrios"],
    "location": "Luanda",
    "id_user": "user123",
    "createdAt": "2025-07-06T12:34:56.789Z"
  }
]
