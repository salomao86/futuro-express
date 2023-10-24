import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import axios from "axios";
import styled from 'styled-components';

const ClientList = () => {
    const [data, setData] = useState([]);
    const [isError, setIsError] = useState(false);

    const Error = styled.div`
    background-color: red;`;

    useEffect(() => {
        getClientes();
    });

    async function getClientes() {

        axios
            .get("http://localhost:3001/user/findAll")
            .then((result) => {
                if (result.status === 200) {
                    console.log("cadastro encontrado com sucessso");
                    setData(result);
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
            <h1 className="text-3xl font-bold mb-4">Lista de Clientes</h1>
            <ul>
                {data.map(client => (
                    <li key={client.id} className="border p-4 mb-4 rounded-lg shadow-lg">
                        <Link to={`/cliente/${client.id}`}>{client.name}</Link>
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
