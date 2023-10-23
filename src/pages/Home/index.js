import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="bg-gray-100 min-h-screen flex items-center justify-center">
      <div className="bg-white p-8 rounded shadow-md w-96">
        <h1 className="text-3xl font-bold mb-4">Bem-vindo à Futuro Express</h1>
        <p className="text-gray-600">
          Sua solução de transporte e logística confiável.
        </p>
        <Link to="/sobre">
        <button className="bg-blue-500 text-white px-4 py-2 mt-4 rounded-full">
          Saiba Mais
        </button>
        </Link>
      </div>
    </div>
  );
};

export default Home;