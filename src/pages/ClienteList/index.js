import React, { useEffect, useState } from 'react';
import { Link, useHistory } from "react-router-dom";
import axios from "axios";
import styled from 'styled-components';
import { useAuth } from "../../context/auth";

const ClientList = () => {
    const [data, setData] = useState([]);
    const [isError, setIsError] = useState(false);
    const { authTokens } = useAuth();
    const history = useHistory();
    const handleOnClick = () => history.push('/cliente');

    console.log(authTokens);

    const Error = styled.div`
    background-color: red;`;

    useEffect(() => {
        getClientes();
    }, []);



    const getClientes = () => {
        const config = {
            headers: { Authorization: `Bearer ${authTokens}` }
        };

        console.log(config);

        axios
            .get("http://localhost:3001/user/findAll",
                config
            )
            .then((result) => {
                if (result.status === 200) {
                    console.log("cadastro encontrado com sucessso");
                    console.log(result)
                    setData(result.data);
                } else {
                    setIsError(true);
                }
            })
            .catch((e) => {
                setIsError(true);
            });
    };

    return (
        <div className="container mx-auto mt-8">
            <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 mb-4 rounded focus:outline-none focus:shadow-outline"
                type="submit"
                onClick={handleOnClick}
            >
                Novo
            </button>
            <h1 className="text-3xl font-bold mb-4">Lista de Clientes </h1>
            <ul>
                {data.map(client => (
                    <li key={client.id} className="border p-4 mb-4 rounded-lg shadow-lg">
                        <Link to={`/cliente/${client._id}`}>{client.nome} - {client.email}</Link>
                    </li>
                ))}
            </ul>
            {isError && (
                <Error>Não existem dados para listagem!</Error>
            )}
        </div>

    );
};

export default ClientList;
