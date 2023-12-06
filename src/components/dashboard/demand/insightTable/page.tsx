import React from 'react'

const dados = [
    {produto: 'IPhone 15', valor: '67%'},
    {produto: 'Macintosh 1984', valor: '1238'},
    {produto: 'Garrafa de água Crystal', valor: '50%'},
]
const InsightTable = () => {
    return (
        <div className='text-center text-xg'>
            <table id="customers">
                <tr className='text-xl'>
                <th  className='pt-[12px] pb-[12px] bg-  bg-bege p-8 border border-solid border-cinza_medio'>Métrica</th>
                    <th  className='pt-[12px] pb-[12px]  bg-bege p-8 border border-solid border-cinza_medio'>Produto</th>
                    <th  className='pt-[12px] pb-[12px]  bg-bege p-8 border border-solid border-cinza_medio'> Valor</th>
                </tr>
                <tr>
                    <td className=' text-xl pt-[12px] pb-[12px] text-left bg-bege_claro p-8 border border-solid border-cinza_medio'>Maior Rentabilidade</td>
                    <td className='pt-[12px] pb-[12px] text-left bg-bege_claro p-8 border border-solid border-cinza_medio'>{dados[0]?.produto}</td>
                    <td className='pt-[12px] pb-[12px] text-left bg-bege_claro p-8 border border-solid border-cinza_medio'>{dados[0]?.valor}</td>
                </tr>
                <tr>
                    <td className='text-xl pt-[12px] pb-[12px] text-left bg-branco p-8 border border-solid border-cinza_medio'>Mais Vendas</td>
                    <td className='pt-[12px] pb-[12px] text-left bg-branco p-8 border border-solid border-cinza_medio'>{dados[1]?.produto}</td>
                    <td className='pt-[12px] pb-[12px] text-left bg-branco p-8 border border-solid border-cinza_medio'>{dados[1]?.valor}</td>
                </tr>
                <tr>
                    <td className='text-xl pt-[12px] pb-[12px] text-left bg-bege_claro p-8 border border-solid border-cinza_medio'>Maior Flutuação</td>
                    <td className='pt-[12px] pb-[12px] text-left bg-bege_claro p-8 border border-solid border-cinza_medio'>{dados[2]?.produto}</td>
                    <td className='pt-[12px] pb-[12px] text-left bg-bege_claro p-8 border border-solid border-cinza_medio'>{dados[2]?.valor}</td>
                </tr>
            </table>
        </div>
    )
}

export default InsightTable