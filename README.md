# 📚 Sistema de Gerenciamento de Biblioteca

Um sistema CRUD completo para gerenciamento de livros e autores, desenvolvido com React e TypeScript.

## ✨ Funcionalidades Implementadas

### Livros

- ✅ Criar um livro (modal)
- ✅ Visualizar todos os livros (tabela)
- ✅ Visualizar um livro específico (modal)
- ✅ Excluir um livro (alerta)

### Autores

- ✅ Criar um autor (modal)
- ✅ Visualizar todos os autores (tabela)
- ✅ Visualizar um autor específico (modal)
- ✅ Excluir um autor (alerta)

## 🛠️ Tecnologias Utilizadas

- React (sem meta-frameworks)
- TypeScript
- Styled Components
- Radix UI
- React Context API
- Local Storage para persistência de dados

## 💡 Diferenciais Implementados

- ✅ TypeScript para tipagem estática
- ✅ Styled Components para estilização
- ✅ React Context API para gerenciamento de estado
- ✅ Componentes reutilizáveis
- ✅ Layout responsivo
- ✅ Persistência de dados no Local Storage

## 🎯 Regras do Projeto Atendidas

- ❌ Não utiliza meta-frameworks
- ❌ Não utiliza Tailwind ou SASS
- ❌ Não utiliza bibliotecas UI como MUI ou Bootstrap
- ✅ Utiliza Radix UI conforme recomendado
- ✅ Dados armazenados no Local Storage

## 📦 Como Executar o Projeto

1. Clone o repositório

```bash
git clone https://github.com/devlcgomes/contato-seguro-front
```

2. Instale as dependências

```bash
yarn install
```

3. Execute o projeto

```bash
yarn dev
```

4. Para acessar a aplicação, no login utilize qualquer email e senha com mais de 6 caracteres.
   ( login implementado apenas como um plus)

```bash
http://localhost:3000
```

## 🏗️ Estrutura do Projeto

src/
├── components/ # Componentes reutilizáveis
├── contexts/ # Contextos do React
├── hooks/ # Hooks customizados
├── pages/ # Páginas da aplicação
├── styles/ # Estilos globais
└── types/ # Tipos TypeScript

## 🔍 Funcionalidades Detalhadas

### Dashboard

- Visualização geral dos dados
- Gráficos estatísticos
- Citações motivacionais
- Lista de livros recentes

### Gerenciamento de Livros

- CRUD completo
- Validação de formulários
- Relacionamento com autores
- Status de leitura

### Gerenciamento de Autores

- CRUD completo
- Validação de email
- Visualização de livros relacionados

## 🎨 UI/UX

- Design limpo e minimalista
- Feedback visual para ações
- Modais intuitivos
- Navegação simplificada

O projeto foi desenvolvido seguindo as melhores práticas de desenvolvimento React, com foco em:

- Componentização
- Reutilização de código
- Tipagem forte
- Gerenciamento de estado eficiente
- Persistência de dados
- Interface intuitiva

---

Desenvolvido como parte do desafio técnico, seguindo todas as especificações e requisitos solicitados.

## 🚀 Deploy

O projeto está disponível em produção através da Vercel:
[https://contato-seguro-front.vercel.app](https://contato-seguro-front.vercel.app)

Para acessar:

1. Use qualquer email e senha com mais de 6 caracteres
2. Todas as rotas são protegidas e requerem autenticação
3. Os dados são persistidos no localStorage do navegador
