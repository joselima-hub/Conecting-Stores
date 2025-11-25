import React from 'react';

import ProductCard from "../../components/products/product-card";

export default function ProductsFeed() {
  // Exemplo estático (depois será substituído por dados reais do backend)
  const products = [
    { id: 1, name: "Arroz Branco 1kg", price: 1.5, store: "Mercearia Central" },
    { id: 2, name: "Óleo de Cozinha 1L", price: 2.2, store: "Super Local" },
    { id: 3, name: "Feijão Preto 500g", price: 1.1, store: "Mini Mercado Sol" },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-6">
      {products.map((p) => (
        <ProductCard key={p.id} product={p} />
      ))}
    </div>
  );
}
