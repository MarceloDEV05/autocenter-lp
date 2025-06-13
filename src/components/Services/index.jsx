import { FaWhatsapp } from "react-icons/fa6"
import servicos from "../../data/servicos"

export const Services = () => {
    return(
        <section className="h-full w-full mt-20 flex justify-center items-center flex-col">
            <h1 className="text-4xl font-medium text-white text-center">Nossos  
                <span className="text-yellow-400"> Serviços</span>
                </h1>

                <main className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-2 w-full h-full px-8 gap-5 mt-20 max-w-3xl justify-center pb-20">
                    {servicos.map((servico) => (
                        <section key={servico.id} className=' p-6 border-white rounded-md shadow-sm shadow-yellow-400 hover:scale-105 duration-300'>
                        <article>
                            <img src={servico.imagemUrl} alt="" 
                            className="w-full object-cover h-80 rounded-2xl"
                            />
                        </article>
                        <div>
                            <h1 className="text-2xl text-white text-center mt-2">{servico.serviceName}</h1>
                        </div>

                        <aside className="mt-5 flex items-center justify-center ">
                            <a className="w-full" href="">
                            <button className="border flex items-center justify-center gap-2 w-full bg-yellow-400 font-medium p-1 rounded-md">Fazer Orçamento <FaWhatsapp size={24}/> </button>
                            </a>
                        </aside>
                    </section>
                    ))}
                </main>
        </section>
    )
}