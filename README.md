# Aplicação React com Tailwind CSS e React Router

Este é um projeto de exemplo de uma aplicação React que utiliza o Tailwind CSS para estilos e o React Router para navegação entre páginas.

## Pré-requisitos

Certifique-se de ter o Node.js instalado em sua máquina. Você pode baixá-lo em [nodejs.org](https://nodejs.org/).

## Configuração

1. Clone este repositório:

```bash
git clone https://github.com/salomao86/futuro-express.git
```

2. Navegue até a pasta do projeto:

```bash
cd nome-do-repositorio
```

3. Instale as dependências:

```bash
npm install
```

## Executando a aplicação

Após a instalação das dependências, você pode iniciar a aplicação com o seguinte comando:

```bash
npm start
```

A aplicação será executada em http://localhost:3000 no seu navegador.

## Estrutura do Projeto

- `src/`: Esta pasta contém o código-fonte da aplicação.
  - `components/`: Aqui estão os componentes React da aplicação.
  - `pages/`: Esta pasta contém as diferentes páginas da aplicação.
  - `App.js`: O componente principal da aplicação.
  - `index.js`: O ponto de entrada da aplicação.

## Estilização

Este projeto utiliza o Tailwind CSS para estilização. Você pode personalizar os estilos em `src/index.css` ou em arquivos CSS individuais nos componentes.

## Navegação

O React Router é usado para criar rotas e navegar entre páginas. Você pode configurar novas rotas em `src/App.js` usando o `BrowserRouter` e o `Route`.

```jsx
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/sobre" component={Sobre} />
          {/* Adicione outras rotas aqui */}
        </Switch>
      </div>
    </Router>
  );
}
```
## Telas para navegação
Home: http://localhost:3000 <br>
Sobre: http://localhost:3000/sobre <br>
Cliente: http://localhost:3000/cliente <br>
Lista de Clientes: http://localhost:3000/cliente-list (Ao clicar em um cliente, o detalhe dele é exibido)<br>
Login: http://localhost:3000/login <br>


## Melhorias da versão 
Integração com API do projeto https://github.com/salomao86/backend-futuro-express para autenticação do usuário e rotas privadas

## Contribuição

Sinta-se à vontade para contribuir com melhorias para este projeto. Crie um fork, faça suas alterações e envie um pull request.

## Licença

Este projeto está licenciado sob a MIT License - consulte o arquivo [LICENSE](LICENSE) para obter detalhes.

Esse é um exemplo simples de um README para uma aplicação React com Tailwind CSS e React Router. Lembre-se de personalizá-lo com informações específicas do seu projeto e adicionar mais detalhes conforme necessário.