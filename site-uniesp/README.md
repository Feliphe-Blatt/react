# Site UNIESP

Projeto desenvolvido em sala de aula de Frontend avançado do professor Kelson na Faculdade UNIESP como parte do aprendizado de desenvolvimento web com React.

## Sobre o Projeto

Este é um site institucional da UNIESP desenvolvido como Single Page Application (SPA), oferecendo uma experiência de navegação fluida e moderna sem recarregamento de páginas. O projeto apresenta informações sobre a instituição, notícias, políticas de proteção de dados (DPO/LGPD) e um formulário de contato.

## Tecnologias Utilizadas

- **React** - Biblioteca JavaScript para construção de interfaces
- **Vite** - Build tool e dev server
- **React Router DOM** - Navegação SPA entre páginas
- **React Bootstrap** - Framework CSS para estilização responsiva
- **Axios** - Cliente HTTP para requisições
- **JSON Server** - API REST fake para desenvolvimento

## Estrutura do Projeto

```
site-uniesp/
├── data/
│   └── db.json          # Banco de dados local (JSON Server)
├── public/              # Arquivos estáticos
├── src/
│   ├── components/      # Componentes reutilizáveis
│   │   ├── CustomNavbar.jsx   # Barra de navegação
│   │   ├── Footer.jsx         # Rodapé do site
│   │   └── BannerAd.jsx       # Carrossel de banners
│   ├── pages/           # Páginas da aplicação
│   │   ├── Inicio.jsx
│   │   ├── Faculdade.jsx
│   │   ├── DpoLgpd.jsx
│   │   ├── Noticias.jsx
│   │   └── Contato.jsx
│   ├── App.jsx          # Componente principal
│   └── main.jsx         # Ponto de entrada
└── package.json
```

## Componentes Principais

### Navbar
Barra de navegação responsiva desenvolvida com React Bootstrap

### Footer
Rodapé completo e informativo contendo:
- Layout responsivo em 3 colunas

### SPA (Single Page Application)
O projeto utiliza React Router DOM para criar uma experiência de navegação sem recarregamento

## Páginas

- **Início** - Página principal com informações gerais e cards informativos
- **A Faculdade** - Detalhes sobre a instituição, missão e infraestrutura
- **DPO LGPD** - Informações sobre proteção de dados e conformidade com LGPD, itens extraídos do JSON Server utilizando axios
- **Notícias** - Grid de notícias carregadas dinamicamente do JSON Server utilizando axios
- **Contato** - Formulário de contato e informações institucionais

## JSON Server

O projeto utiliza JSON Server para simular uma API REST durante o desenvolvimento. Os dados são armazenados em `data/db.json` e incluem:

- **dpolgpd** - Informações sobre DPO e LGPD
- **noticias** - Notícias da instituição

### Iniciar o JSON Server

```bash
json-server --watch data/db.json --port 3000
```

## Instalação e Execução

### Pré-requisitos
- Node.js instalado
- npm ou yarn

### Passo a passo

1. Clone o repositório
```bash
git clone <url-do-repositorio>
cd site-uniesp
```

2. Instale as dependências
```bash
npm install
```

3. Inicie o JSON Server (em um terminal)
```bash
json-server --watch data/db.json --port 3000
```

4. Inicie o servidor de desenvolvimento (em outro terminal)
```bash
npm run dev
```

5. Acesse no navegador
```
http://localhost:5173
```

## Aprendizados

Este projeto permitiu o aprendizado prático de:
- Componentização e reutilização de código em React
- Gerenciamento de estado com useState e useEffect
- Navegação SPA com React Router
- Consumo de APIs com Axios
- Estilização responsiva com Bootstrap
- Estruturação de projetos React profissionais
