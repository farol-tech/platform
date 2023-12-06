import React from 'react'

const dados = [
    {produto: 'IPhone 15', valor: '$8029.22'},
    {produto: 'Macintosh 1984', valor: '0.33'},
    {produto: 'Garrafa de água Crystal', valor: '0.10'},
]
const InsightTable = () => {
    return (
        <table id="customers" className='m-0 h-full'>
            <tr className='text-xl'>
            <th  className='pt-[12px] pb-[12px]  bg-roxo_medio p-8 border border-solid border-cinza_medio'>Métrica</th>
                <th  className='pt-[12px] pb-[12px]  bg-roxo_medio p-8 border border-solid border-cinza_medio'>Produto</th>
                <th  className='pt-[12px] pb-[12px]  bg-roxo_medio p-8 border border-solid border-cinza_medio'> Valor</th>
            </tr>
            <tr>
                <td className=' text-xl pt-[12px] pb-[12px] text-left bg-roxo_claro p-8 border border-solid border-cinza_medio'>Maior Custo</td>
                <td className='pt-[12px] pb-[12px] text-left bg-roxo_claro p-8 border border-solid border-cinza_medio'>{dados[0]?.produto}</td>
                <td className='pt-[12px] pb-[12px] text-left bg-roxo_claro p-8 border border-solid border-cinza_medio'>{dados[0]?.valor}</td>
            </tr>
            <tr>
                <td className='text-xl pt-[12px] pb-[12px] text-left bg-branco p-8 border border-solid border-cinza_medio'>Menor &beta;</td>
                <td className='pt-[12px] pb-[12px] text-left bg-branco p-8 border border-solid border-cinza_medio'>{dados[1]?.produto}</td>
                <td className='pt-[12px] pb-[12px] text-left bg-branco p-8 border border-solid border-cinza_medio'>{dados[1]?.valor}</td>
            </tr>
            <tr>
                <td className='text-xl pt-[12px] pb-[12px] text-left bg-roxo_claro p-8 border border-solid border-cinza_medio'>Menor &alpha;</td>
                <td className='pt-[12px] pb-[12px] text-left bg-roxo_claro p-8 border border-solid border-cinza_medio'>{dados[2]?.produto}</td>
                <td className='pt-[12px] pb-[12px] text-left bg-roxo_claro p-8 border border-solid border-cinza_medio'>{dados[2]?.valor}</td>
            </tr>
        </table>
    )
}

export default InsightTable