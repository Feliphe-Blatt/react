# Exercício de Aprendizado React

Este repositório contém um exercício prático de aprendizado de React desenvolvido como primeira aula (aula01) de um curso de React.

## 📸 Resultado Visual

![Screenshot da aplicação React](https://github.com/user-attachments/assets/a8bb7054-3e86-4000-949e-9879a536c2f1)

## 🎯 Objetivos do Exercício

O exercício teve como objetivo ensinar os conceitos fundamentais do React através da criação de componentes funcionais simples, especificamente:

1. **Criação de Componentes Funcionais**: Desenvolvimento de componentes React usando a sintaxe de function components
2. **Props (Propriedades)**: Passagem e uso de propriedades entre componentes pai e filho
3. **JSX**: Utilização da sintaxe JSX para renderizar elementos HTML
4. **Estrutura de Projeto**: Organização de arquivos e componentes em uma aplicação React
5. **Interpolação de Dados**: Exibição dinâmica de dados usando expressões JavaScript no JSX

## 🧮 Componentes Desenvolvidos

### Componentes de Operações Matemáticas
Foram criados 4 componentes que realizam operações matemáticas básicas:

1. **Adicao.jsx** - Realiza adição entre dois números
2. **Subtracao.jsx** - Realiza subtração entre dois números
3. **Multiplicacao.jsx** - Realiza multiplicação entre dois números
4. **Divisao.jsx** - Realiza divisão entre dois números

**Características dos componentes matemáticos:**
- Recebem duas props: `num1` e `num2`
- Realizam o cálculo correspondente
- Exibem o resultado formatado em português
- Usam símbolos matemáticos apropriados (×, ÷)

### Componente Motivacional
**PrecisoEstudar.jsx** - Um componente motivacional que:
- Recebe uma prop `nomeDaTecnologia`
- Exibe uma mensagem motivacional sobre estudar a tecnologia especificada
- Demonstra como componentes podem ser reutilizáveis com diferentes conteúdos

## 🚀 Tecnologias Utilizadas

- **React 19.1.1** - Biblioteca principal para construção da interface
- **Vite 7.1.2** - Ferramenta de build e desenvolvimento
- **ESLint** - Linter para manter qualidade do código
- **JavaScript (ES6+)** - Linguagem de programação

## 📁 Estrutura do Projeto

```
aula01/
├── src/
│   ├── components/
│   │   ├── Adicao.jsx
│   │   ├── Subtracao.jsx
│   │   ├── Multiplicacao.jsx
│   │   ├── Divisao.jsx
│   │   └── PrecisoEstudar.jsx
│   ├── App.jsx
│   └── main.jsx
├── public/
├── package.json
└── vite.config.js
```

## 🔧 Como Executar

1. Navegue até a pasta da aula:
```bash
cd aula01
```

2. Instale as dependências:
```bash
npm install
```

3. Execute o projeto em modo de desenvolvimento:
```bash
npm run dev
```

4. Acesse no navegador: `http://localhost:5173`

## 📚 Conceitos React Demonstrados

### 1. Componentes Funcionais
```jsx
const Adicao = ({ num1, num2 }) => {
  return (
    <h1>O resultado de {num1} + {num2} = {num1 + num2}</h1>
  )
}
```

### 2. Props (Propriedades)
```jsx
// Uso no componente pai
<Adicao num1={10} num2={5} />

// Recepção no componente filho
const Adicao = ({ num1, num2 }) => {
  // Lógica do componente
}
```

### 3. JSX e Interpolação
```jsx
<h1>O resultado de {num1} + {num2} = {num1 + num2}</h1>
```

### 4. Composição de Componentes
O componente `App.jsx` demonstra como compor vários componentes menores para criar uma aplicação completa.

## 🎓 Aprendizados Alcançados

1. **Sintaxe do React**: Compreensão da sintaxe básica de componentes funcionais
2. **Props**: Como passar dados entre componentes
3. **JSX**: Como escrever HTML dentro do JavaScript
4. **Estrutura de Projeto**: Organização adequada de arquivos React
5. **Reutilização**: Como criar componentes reutilizáveis
6. **Ferramentas Modernas**: Uso do Vite para desenvolvimento React

## 🔄 Próximos Passos

Este exercício serve como base para conceitos mais avançados como:
- Estado (useState)
- Efeitos (useEffect)
- Manipulação de eventos
- Renderização condicional
- Listas e keys
- Context API

---

**Exercício desenvolvido como parte do aprendizado de React - Aula 01**