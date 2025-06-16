
import img from '../../assets/background.avif'


import carImg from "../../assets/car-interface.png"
import { FaWhatsapp } from 'react-icons/fa6'
import { motion } from 'framer-motion'

export const Interface = () => {
    return(
        <>
        <motion.div
         initial={{ opacity: 0, x: -50 }}
         whileInView={{ opacity: 1, x: 0 }}
         transition={{ duration: 0.7, ease: "easeOut" }}
         viewport={{ once: false }}
        
        className='flex justify-center bg-cover bg-center h-screen object-cover w-full' style={{backgroundImage: `url(${img})`}} id='home'>
           
           
          <article className='flex items-center justify-around w-full max-w-7xl'>

                 <section className='hidden lg:block md:block w-full  '>
                    <img src={carImg} alt=""/>
                </section>

                <div className=''>

                <h1 className='text-white lg:text-3xl text-[24px] flex gap-1 px-4'>Erivelton <br/>
                <strong className='text-yellow-400 lg:text-3xl text-[24px]'>AutoCenter</strong>
                </h1>
                <p className="text-white font-medium text-[17px] lg:w-full lg:max-w-200 w-full max-w-90 px-4">Seu carro merece cuidado de verdade. Aqui na Erivelton Auto Center, fazemos alinhamento, balanceamento, troca de óleo, revisão completa e muito mais, sempre com atenção aos detalhes e preço justo.<br/>

                <strong className='font-bold'>👉 Agende seu serviço e dirija tranquilo!</strong>
                </p>
                

                <button className='flex bg-yellow-400  animate-pulse transition-all duration-300 ease-in-out hover:scale-110 mt-10 mb-5 p-2 rounded-md items-center  m-auto'>
                    <a className='w-full gap-3 flex' href='https://wa.me/55016992611903'>
                    Agendar Serviço <FaWhatsapp size={23}/>
                    </a>
                </button>
                </div>

               
                
            </article>
        </motion.div>
        </>
    )
}