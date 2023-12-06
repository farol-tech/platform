"use client"
import React from 'react';
import { signOut } from "next-auth/react";


const NavbarComponent: React.FC = () => {
    return (
        <div className="items-stretch self-stretch border-r-[color:var(--roxo-claro,#DBDFEA)] flex flex-col border-r-2 border-solid">
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/07ee01fe92c16ea4aad87897ef26cda1cb7de5be7e9be8b5faf9c4f4a2363e43?apiKey=11f73204c88e473f8bd9257269f6a2a5&"
          className="aspect-[3] object-contain object-center w-24 overflow-hidden self-center max-w-full"
        />
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/6d95f7577db35a4a5bcc527fc3bc5eb921fffaae744777e074f1068538d49ea6?apiKey=11f73204c88e473f8bd9257269f6a2a5&"
          className="aspect-square object-contain object-center w-20 fill-gray-500 overflow-hidden self-center max-w-full mt-10"
        />
        <div className="text-gray-500 text-center text-lg font-medium self-center whitespace-nowrap mt-2.5">
          Felipe Spirandelli
        </div>
        <div className="items-stretch flex w-full flex-col mt-10 pb-12 px-6 max-md:px-5">
          <div className="items-center flex justify-between gap-3">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/fca1a9841a31d21293d9f8dace3459201237e8b8140ccdd66d4486455791e9ff?apiKey=11f73204c88e473f8bd9257269f6a2a5&"
              className="aspect-square object-contain object-center w-[18px] fill-gray-500 overflow-hidden shrink-0 max-w-full my-auto"
            />
            <div className="text-gray-500 text-center text-lg font-medium self-stretch grow whitespace-nowrap">
              Dashboard
            </div>
          </div>
          <div className="flex justify-between gap-3 mt-8 items-start">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/425e2b8e5f66de0546c494690275711870f25efafe99d0b684c3393466f0b48c?apiKey=11f73204c88e473f8bd9257269f6a2a5&"
              className="aspect-square object-contain object-center w-[19px] fill-cyan-800 overflow-hidden shrink-0 max-w-full"
            />
            <div className="text-cyan-800 text-center text-lg font-medium self-stretch grow whitespace-nowrap">
              Previsão de Demanda
            </div>
          </div>
          <div className="items-stretch flex justify-between gap-3 mt-8">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/43bdce2ac55bc57acbfbca8662f1d1576c1e96be56d69eea004b74b15e3e9a78?apiKey=11f73204c88e473f8bd9257269f6a2a5&"
              className="aspect-[0.95] object-contain object-center w-5 fill-gray-500 overflow-hidden shrink-0 max-w-full"
            />
            <div className="text-gray-500 text-center text-lg font-medium grow whitespace-nowrap">
              Otimização de Inventário
            </div>
          </div>
          <div className="flex justify-between gap-3 mt-8 items-start">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/d63698d09ed1ef655cd88597f33cf39cf033b6f05c3d110a6820daa3c1fa91c6?apiKey=11f73204c88e473f8bd9257269f6a2a5&"
              className="aspect-[0.95] object-contain object-center w-[19px] fill-gray-500 overflow-hidden shrink-0 max-w-full"
            />
            <div className="text-gray-500 text-center text-lg font-medium self-stretch grow whitespace-nowrap">
              Configurações
            </div>
          </div>
          <div className="flex justify-between gap-3 mt-8 mb-80 pr-2.5 items-start max-md:mb-10">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/809bc833879824b2c179ae3a5062af347a89ffe9e16faf2363871430d0d7959f?apiKey=11f73204c88e473f8bd9257269f6a2a5&"
              className="aspect-[0.9] object-contain object-center w-[18px] fill-gray-500 overflow-hidden shrink-0 max-w-full"
            />
            <div className="text-gray-500 text-center text-lg font-medium self-stretch grow whitespace-nowrap">
              Notificações
            </div>
          </div>
        </div>
        <div className="items-stretch flex w-full justify-between gap-2.5 pl-6 pr-20 max-md:px-5">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/273ad0bd6601ab86bc2d463364cd056617b49905457512763dea29abda883688?apiKey=11f73204c88e473f8bd9257269f6a2a5&"
            className="aspect-square object-contain object-center w-2 overflow-hidden shrink-0 flex-1"
          />
          <div className="text-cyan-800 text-center text-lg font-medium self-center grow whitespace-nowrap my-auto">
            Sair
          </div>
        </div>
      </div>
    );
};

export default NavbarComponent;