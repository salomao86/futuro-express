import React from 'react';

const Sobre = () => {
  return (
    <div className="bg-gray-100 p-4">
      <div className="bg-white p-4 rounded shadow-md">
        <h1 className="text-2xl font-bold">Futuro Express</h1>
        <p className="text-gray-600">A "Futuro Express" é uma empresa fictícia que atua no setor de logística e transporte, oferecendo uma ampla gama de serviços de entrega e logística para atender às necessidades de seus clientes. Fundada com a visão de se tornar uma referência no mercado de transporte, a Futuro Express tem como objetivo principal fornecer soluções eficientes e confiáveis para o transporte de mercadorias em todo o país.</p>
        <ul className="mt-4">
          <li>Endereço: Rua Avelina da Luz da Silva, 811 - Sítio Cercado - Curitiba - PR</li>
          <li>Telefone: (41) 2687-5220</li>
          <li>Email: contato@futuroexpress.com.br</li>
        </ul>
      </div>
    </div>
  );
};

export default Sobre;
