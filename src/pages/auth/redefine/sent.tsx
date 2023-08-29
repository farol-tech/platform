import React from "react";
import NotAuthenticatedLayout from '~/layouts/notAuthenticatedLayout';


const RedefineSentPage = () => {

    return (
        <NotAuthenticatedLayout image="/assets/forgot_password.svg" width={477} height={317}>
            <div className="py-4 flex flex-col gap-3 w-1/2">
                <h2 className="text-2xl font-bold">Esqueci a Senha</h2>
                <p className='text-lg'>Se o email informado estiver cadastrado na nossa base de dados, um email será
                enviado nos próximos instantes. Qualquer problema, nos contate.</p>
            </div>
        </NotAuthenticatedLayout>
    );
};

export default RedefineSentPage;