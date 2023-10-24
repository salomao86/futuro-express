import React, { useEffect, useState, useRef } from 'react';
import { Link, useParams } from "react-router-dom";
import axios from "axios";

const url = 'https://jsonplaceholder.typicode.com/users?id=';
let data;


const Cliente = () => {
  const { id } = useParams();
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [telefone, setTelefone] = useState('');
  const [senha, setSenha] = useState('');
  const [isError, setIsError] = useState(false);

  const inputName = useRef(null);
  const inputEmail = useRef(null);
  const inputTelefone = useRef(null);

  useEffect(() => {
    if (id) {
      getCliente();
    } 
  });

  const postCliente = (e) => {
    axios
      .post("http://localhost:3001/user/create", {
        "nome": nome,
        "email": email,
        "senha": senha
      })
      .then((result) => {
        console.log(result)
        if (result.status === 200) {
          console.log("cadastro efetuado com sucessso");
          return <Redirect to="/cliente-list" />;
        } else {
          setIsError(true);
        }
      })
      .catch((e) => {
        setIsError(true);
      });
      
  };

  const updateCliente = (e) => {
    axios
      .put("http://localhost:3001/user/update" + id, {
        "nome": nome,
        "email": email,
        "senha": senha
      })
      .then((result) => {
        console.log(result)
        if (result.status === 200) {
          console.log("cadastro atualizado com sucessso");
          return <Redirect to="/cliente-list" />;
        } else {
          setIsError(true);
        }
      })
      .catch((e) => {
        setIsError(true);
      });
      
  };

  const deleteCliente = (e) => {
    axios
      .delete("http://localhost:3001/user/delete" + id)
      .then((result) => {
        console.log(result)
        if (result.status === 200) {
          console.log("cadastro deletado com sucessso");
          return <Redirect to="/cliente-list" />;
        } else {
          setIsError(true);
        }
      })
      .catch((e) => {
        setIsError(true);
      });
      
  };

  const getCliente = (e) => {
    axios
      .get("http://localhost:3001/user/find" + id)
      .then((result) => {
        console.log(result)
        if (result.status === 200) {
          console.log("cadastro encontrado com sucessso");
          if (result) {
            inputName.current.value = result.nome;
            inputEmail.current.value = result.email;
          }
        } else {
          setIsError(true);
        }
      })
      .catch((e) => {
        setIsError(true);
      });
      
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const limpar = (e) => {
    e.preventDefault();
    inputName.current.value = null;
    inputEmail.current.value = null;
    inputTelefone.current.value = null;
  };


  return (
    <div className="w-full max-w-md mx-auto">
      <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4" onSubmit={handleSubmit}>
        <h2 className="text-2xl font-semibold mb-4">Cadastro de Clientes</h2>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="nome">
            Nome
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            ref={inputName}
            id="nome"
            type="text"
            placeholder="Nome"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-boonClickld mb-2" htmlFor="email">
            Email
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            ref={inputEmail}
            id="email"
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="mb-6">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="telefone">
            Telefone
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            ref={inputTelefone}
            id="telefone"
            type="text"
            placeholder="Telefone"
            value={telefone}
            onChange={(e) => setTelefone(e.target.value)}
          />
        </div>
        <div className="flex items-center justify-between">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
            onClick={postCliente} 
          >
            Salvar
          </button>


          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
            onClick={updateCliente} 
          >
            Atualizar
          </button>


          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
            onClick={deleteCliente} 
          >
            Excluir
          </button>

          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            onClick={limpar} >
            Limpar
          </button>
          <Link to="/cliente-list">
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit"
            >
              Listar
            </button>
          </Link>
        </div>
      </form>
      {isError && (
          <Error>Ocorreu um erro na operação, tente novamentes!</Error>
        )}
    </div>
  );
};

export default Cliente;
