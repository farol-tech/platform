"use client";
import React, { useState } from "react";
import ButtonComponent from '~/components/common/button/buttton';
import FileInputComponent from '~/components/common/fileInput/fileInput';


const s3Forms = () => {
    const [file, setFile] = useState<File | null>(null);
    const [fileError, setFileError] = useState<string>("");
    const [loadingSubmit, setLoadingSubmit] = useState(false);

    const validate = () => {
        let flag = true;
        if (!file) {
            setFileError("Por favor, selecione um arquivo");
            flag = false;
        } else
            setFileError("");  
        return flag
    }

    const onFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const selectedFile = event.target.files?.[0];
        if (selectedFile) {
            setFile(selectedFile);
        }
    }

    const onSubmit = async () => {

        setLoadingSubmit(true);

        const valid: boolean = validate();

        setLoadingSubmit(false);

        if (!valid)
            return;

        console.log("Validado")
        console.log(file)

    };

    return (
        <div className="flex flex-col w-full h-screen items-center align-middle">
            <div className='py-4 flex flex-col gap-2 max-w-2xl min-w-max h-screen items-start align-middle'>
                <h2 className="text-2xl font-bold">Envio de Dados S3</h2>
                <FileInputComponent
                    id="fileInput"
                    onChange={onFileChange}
                    error={fileError}
                />

                <div className="w-1/4">
                    <ButtonComponent text="Butão" clickFunction={onSubmit} loading={loadingSubmit}/>
                </div>
                
            </div>
        </div>
    );
};

export default s3Forms;