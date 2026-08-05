# 🎧 Spotify Clone — Imersão Front-end (Alura)

<p align="center">
  <img src="./src/assets/icons/logo-projeto.png" alt="Logo do Projeto" width="120" />
</p>

<p align="center">
  Interface web inspirada no Spotify, desenvolvida durante a <strong>Imersão Front-end da Alura</strong>.<br/>
  O projeto reproduz a experiência visual da plataforma e implementa busca dinâmica de artistas consumindo uma API REST.
</p>

<p align="center">
  <img src="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white" />
  <img src="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white" />
  <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black" />
  <img src="https://img.shields.io/badge/JSON--Server-000000?style=for-the-badge&logo=json&logoColor=white" />
</p>

<p align="center">
  <img src="https://img.shields.io/badge/status-conclu%C3%ADdo-brightgreen?style=flat-square" />
  <img src="https://img.shields.io/badge/license-MIT-blue?style=flat-square" />
</p>

---

## 📌 Sobre o projeto

Este projeto é um clone da interface do **Spotify**, construído do zero com **HTML, CSS e JavaScript puro (Vanilla JS)**. Foi desenvolvido durante a Imersão Front-end promovida pela Alura, com foco em:

- Reprodução fiel de um layout complexo e real usado no mercado;
- Boas práticas de estruturação de CSS (reset, variáveis, responsividade);
- Consumo de API REST com `fetch` para busca dinâmica de conteúdo;
- Manipulação do DOM para atualização de interface em tempo real.

## ✨ Funcionalidades

- 🔍 **Busca de artistas em tempo real** — pesquisa por nome consumindo uma API local (`json-server`), exibindo dinamicamente imagem e informações do artista encontrado.
- � **Pesquisa por sessão de playlist** — os cards das sessões podem ser clicados para exibir artistas relacionados por nome ou gênero.
- 🧱 **Layout de cards consistente** — espaçamento uniforme entre os cards de artista mantém o layout alinhado com poucos ou muitos resultados.
- 💬 **Feedback de busca aprimorado** — mensagem de "Nenhum artista encontrado" em destaque com cor branca para melhor legibilidade.
- �🎵 **Vitrine de playlists** — grid de cards coloridos representando diferentes categorias musicais (Rock, Pop, Sertanejo, Funk, MPB, Hip Hop, entre outras).
- 🧭 **Sidebar de navegação** — menu lateral fixo com biblioteca, criação de playlist e seletor de idioma, no padrão visual do Spotify.
- 📱 **Layout responsivo** — ajuste do grid de cards para diferentes tamanhos de tela via media queries.
- 🎨 **Design system simples** — variáveis CSS centralizadas (`vars.css`) para cores e tipografia, garantindo consistência visual.
- ⭐ **CTA de assinatura Premium** — banner fixo no rodapé incentivando a conversão do usuário.

## 🛠️ Tecnologias utilizadas

| Tecnologia | Uso no projeto |
|---|---|
| **HTML5** | Estrutura semântica da aplicação |
| **CSS3** | Estilização, reset customizado, variáveis e responsividade |
| **JavaScript (ES6+)** | Lógica de busca, manipulação do DOM e integração com API |
| **JSON Server** | API REST fake para simular o backend de artistas |
| **Font Awesome** | Ícones da interface |
| **Google Fonts (DM Sans)** | Tipografia do projeto |

## 📁 Estrutura do projeto

```
Spotify-imersao-alura/
├── index.html
├── script.js
├── artists.json
├── src/
│   ├── styles/
│   │   ├── reset.css
│   │   ├── vars.css
│   │   ├── main-content.css
│   │   ├── sidebar-footer.css
│   │   └── media-queries.css
│   └── assets/
│       ├── icons/
│       └── playlist/
└── README.md
```

## 🚀 Como executar o projeto

Este projeto depende de uma API local ([json-server](https://github.com/typicode/json-server)) para o funcionamento da busca de artistas.

```bash
# 1. Clone o repositório
git clone https://github.com/seu-usuario/Spotify-imersao-alura.git

# 2. Acesse a pasta do projeto
cd Spotify-imersao-alura

# 3. Instale o json-server (caso não tenha)
npm install -g json-server

# 4. Suba a API fake apontando para o arquivo de artistas
json-server --watch artists.json --port 3000

# 5. Abra o arquivo index.html no navegador
# (recomenda-se usar a extensão "Live Server" do VS Code)
```

Com a API rodando em `http://localhost:3000`, basta digitar o nome de um artista no campo de busca para ver o resultado dinâmico na tela.

## 🧠 Aprendizados

Durante o desenvolvimento deste projeto, foram praticados conceitos essenciais para o dia a dia de um(a) desenvolvedor(a) front-end:

- Organização e modularização de arquivos CSS por responsabilidade;
- Uso de `fetch` para consumo de API e tratamento assíncrono com Promises;
- Manipulação de eventos (`input`) para criar buscas reativas;
- Aplicação de boas práticas de acessibilidade e responsividade em um layout real e complexo.

## 🔭 Possíveis evoluções

- [ ] Migrar o consumo de dados para a API oficial do Spotify (Web API);
- [ ] Adicionar player de áudio funcional;
- [ ] Implementar autenticação de usuário;
- [ ] Refatorar o JavaScript para módulos ES6;
- [ ] Adicionar testes automatizados.

## 👤 Autor

**Jean Carlos da Silva Gonçalves**
Desenvolvedor Front-end Júnior
