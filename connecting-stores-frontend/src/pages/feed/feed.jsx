import React from 'react';

export default function Feed() {
  // Exemplo estático (depois será substituído por dados reais do backend)
  // const products = [
  //   { id: 1, name: "Arroz Branco 1kg", price: 1.5, store: "Mercearia Central" },
  //   { id: 2, name: "Óleo de Cozinha 1L", price: 2.2, store: "Super Local" },
  //   { id: 3, name: "Feijão Preto 500g", price: 1.1, store: "Mini Mercado Sol" },
  // ];

  return (
    <div className=" flex justify-center gap-5 mt-6">
      {/* User info */}
      <div className="flex flex-col gap-2">
        {/* Profile */}
        <div className="flex items-top gap-3">
          {/* user image */}
          <img
            className="w-24 h-24 rounded-full"
            src="https://images.unsplash.com/photo-1499714608240-22fc6ad53fb2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=76&q=80"
            alt="avatar"
          />
          <div className="flex flex-col pt-2">
            {/* user name */}
            <span className="text-base font-semibold">Nome do Comerciante</span>
            {/* store name */}
            <span className="text-gray-600 text-sm">
              Tipo de conta: Comerciante
            </span>
          </div>
        </div>
        {/* User Objects */}
        <div className='flex flex-col gap-1.5' >
          <span>Listas de Compras</span>
          <span>Favoritos</span>
          <span>Lojas</span>

        </div>
      </div>

      {/* Post */}
      <div className="bg-white rounded-2xl flex flex-col gap-2 justify-center lg:w-[680px]">
        {/* user info */}
        <div className=" flex justify-between items-center p-2.5">
          <div className="flex items-center gap-2 ">
            {/* user image */}
            <img
              className="w-10 h-10 rounded-full"
              src="https://images.unsplash.com/photo-1499714608240-22fc6ad53fb2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=76&q=80"
              alt="avatar"
            />
            <div className="flex flex-col">
              {/* user name */}
              <span className="text-base font-semibold">
                Nome do Comerciante
              </span>
              {/* store name */}
              <span className="text-gray-600 text-sm">Loja: Nome da loja</span>
            </div>
          </div>
          {/* time */}
          <span className="text-gray-600 text-sm">1h</span>
        </div>
        {/* post test */}
        <div className=" px-2.5 font-normal text-base">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book.
        </div>
        <div className=" ">
          {/* post image */}
          <img
            src="https://images.unsplash.com/photo-1499714608240-22fc6ad53fb2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=76&q=80"
            alt="post"
            className="w-full max-h-[700px] object-fill"
          />
        </div>
        {/* icons */}
        <div className=" flex items-center gap-3 p-2.5 ">
          <div className="flex items-center gap-1.5 ">
            <img src="/heart.svg" alt="like" className="w-6 h-6" />
            <span className="text-sm text-gray-600">100</span>
          </div>
          <div className="flex items-center gap-2 ">
            <img src="/message.svg" alt="like" className="w-6 h-6" />
            <span className="text-sm text-gray-600">100</span>
          </div>
        </div>
      </div>

      {/* Promotions */}
      <div className=" flex text-gray-600">
        Aqui vais poder ver os teus produtos em promocao
      </div>
    </div>
  );
}
