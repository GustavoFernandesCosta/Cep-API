# CEP API

A CEP API é uma API desenvolvida para uma avaliação técnica com o objetivo de implementar um sistema de buscas de CEP.

## 🚀 Começando

Siga as instruções abaixo para obter uma cópia do projeto em operação na sua máquina local para fins de desenvolvimento e teste.

### 📋 Pré-requisitos

Certifique-se de ter os seguintes pré-requisitos instalados em sua máquina:

- [Node.js 18.20.1](https://nodejs.org/) ou superior
- [Docker](https://www.docker.com/) e [Docker Compose](https://docs.docker.com/compose/)

### 🔧 Instalação

1. **Clone o repositório**:
    ```bash
    git clone https://github.com/GustavoFernandesCosta/Cep-API.git
    ```

2. **Instale as dependências**:
    ```bash
    npm install
    ```
3. **Configure as variáveis de ambiente**:

    Crie um arquivo `.env` na raiz do projeto e defina as variáveis de ambiente necessárias para o projeto. Você pode se basear em um arquivo de exemplo como `.env.example`, se houver.

4. **Suba o container com o banco de dados**:
    ```bash
    docker-compose up -d
    ```

5. **Inicie o servidor**:
    ```bash
    npm run start
    
O servidor será iniciado em `http://localhost:3000`.

## 🛠️ Tecnologias Utilizadas

- **Node.js** para o backend.
- **TypeScript** para desenvolvimento de código seguro e tipado.
- **MongoDB** para o banco de dados.
- **Mongoose** para interagir com o banco de dados MongoDB.
- **Docker** para containerização do banco de dados.
- **Express** para criação do servidor web.
- **Axios** para fazer requisições HTTP.
- **Nodemon** para reiniciar automaticamente o servidor durante o desenvolvimento.

## ℹ️ Utilização da API de Terceiros

A CEP API utiliza uma API de terceiros chamada Via Cep para obter informações detalhadas sobre CEPs. A API é responsável por fornecer dados precisos sobre endereços com base no CEP fornecido.

### ℹ️ Documentação da API Via Cep

Para mais detalhes sobre os parâmetros aceitos e a estrutura das respostas da API Via Cep, consulte a documentação oficial [aqui](https://viacep.com.br/).

