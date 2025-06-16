export const About = () => {
    return(
        <aside className="flex w-full flex-col text-white justify-center items-center py-16">
            <h1 className='text-white text-3xl flex gap-1'>Quem<br/>
                <strong className='text-yellow-400'> Somos?</strong>
                </h1>

                <p className="text-left mt-10 w-full max-w-200 px-8">Erivelton Auto Center é uma empresa que tem se destacado no ramo automotivo na cidade de jardinópolis.
                </p>

                 <ul className="list-disc w-full flex items-center justify-center flex-col lg:max-w-200 max-w-80 px-8">
                    <li>
                        Aberta em 24 de Janeiro de 2020 e atuante desde então, com CNPJ ativo e claramente identificada em diversas fontes.
                    </li>
                        <br />
                    <li>
                        Está localizada no Centro de Jardinópolis ( Rua 13 de Maio, n35 ), o que da visibilidade e praticidade de acesso.
                    </li>
                    <br />
                    <li>
                        A empresa oferece serviços de manutenção e reparação automotiva, além de comércio de peças e acessórios, reduzindo o tempo e os custos na busca por componentes, o que posiciona como um centro automotivo completo.
                    </li>
                    </ul>
        </aside>
    )
}