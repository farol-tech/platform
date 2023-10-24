import AuthenticatedLayout from '~/layouts/AuthenticatedLayout';
import ButtonComponent from '~/components/common/button/buttton';
import React, { useState } from "react";
import { useRouter } from 'next/navigation';


const RedefineSentPage = () => {
    const [loadingSubmit, setLoadingSubmit] = useState(false);

    const router = useRouter();

    const validate = () => {
        let flag = true;
        return flag
    }

    const onSubmit = async () => {

        const valid: boolean = validate();
        if (!valid)
            return;

        setLoadingSubmit(true);

        router.push("/auth/signin")

    };

    return (
        <AuthenticatedLayout image="/assets/undraw_festivities.svg" width={477} height={327}>
            <div className="py-4 flex flex-col gap-3">
                <p className='text-lg font-normal'>A senha foi redefinida com sucesso.</p>
                <ButtonComponent text="Fazer login" loading={loadingSubmit} clickFunction={onSubmit}/>
            </div>
        </AuthenticatedLayout>
    );
};

export default RedefineSentPage;