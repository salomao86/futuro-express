import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom";

const url = 'https://jsonplaceholder.typicode.com/users';

const ClientList = () => {
    const [data, setData] = useState([])

    useEffect(() => {
        getClientes();
     });

    async function getClientes() {

        try {
            const res = await fetch(url);
            setData(await res.json());
        } catch (err) {
            console.log(err);
        }
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
        </div>
    );
};

export default ClientList;
