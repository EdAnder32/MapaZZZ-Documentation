# 🌍 MapaZZZ API

Bem-vindo à **API pública do MapaZZZ**, um sistema inteligente que **mapeia zonas de risco de malária** em tempo real.

> ⚠️ Esta documentação é voltada para desenvolvedores e instituições que desejam acessar os dados processados da plataforma MapaZZZ via REST API.

---

## 🎯 Objetivo

O MapaZZZ coleta **reportes enviados por usuários** e os processa com **inteligência artificial**, validando zonas de risco em parceria com **instituições de saúde** confiáveis.

Esta API permite que você:

- ✅ Acesse **zonas de risco atualizadas**  
- ✅ Obtenha **estatísticas geográficas e temporais**  
- ✅ Verifique **reportes validados** por autoridades  
- ✅ Construa aplicações com dados confiáveis sobre malária

---

## 🔗 Base URL

> A base URL da API será usada para acessar todos os recursos disponíveis.


https://api.mapazzz.org/v1


## 📚 O que você encontrará aqui

### `GET /zonas-de-risco`
Retorna a lista de **zonas de risco ativas**, com localização geográfica e nível de gravidade.

### `GET /estatisticas`
Retorna **estatísticas agregadas por região**, incluindo número de casos reportados, nível de risco médio e tendência temporal.

### `POST /reportes`
Permite o **envio de novos reportes** de casos suspeitos de malária.

### `GET /reportes`
Retorna **todos os reportes**, incluindo status de validação por autoridades.

---

## 🧠 Sobre a IA do sistema

A plataforma aplica técnicas de Machine Learning para:

- Detectar **clusters de risco**
- Estimar **níveis de gravidade**
- Sugerir **zonas críticas** antes mesmo da validação humana

> 🔍 Esses dados auxiliam instituições públicas na **prevenção** e **resposta rápida** a surtos.

---

## ✨ Extras

Embora a API foque em dados e análises, o app MapaZZZ também oferece:

- 🧪 **Quizzes educativos** sobre malária  
- 🎮 **Jogos interativos** com foco em prevenção  
- 🔔 **Alertas em tempo real** via notificações  

> ❗ Esses recursos **não fazem parte desta API**.

---

## 🧭 Comece agora

Acesse a seção **Endpoints** para começar a usar a API e integrar os dados do MapaZZZ em suas aplicações.
