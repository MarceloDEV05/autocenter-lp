
import img from '../../assets/d1705d6cfc8af853d16b9cbd9438c866.jpg'
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
        
        className='flex items-center justify-center w-full relative'>
          <article className='absolute lg:left-20 left-8 z-99'>
                <h1 className='text-white text-3xl '>Erivelton <br/>
                <strong className='text-yellow-400'>AutoCenter</strong>
                </h1>
                <p className='w-70 font-medium lg:w-160 lg:max-w-160 text-white lg:text-2xl md:text-xl md:w-120 text-md mt-2 '>Seu carro merece cuidado de verdade. Aqui na Erivelton Auto Center, fazemos alinhamento, balanceamento, troca de óleo, revisão completa e muito mais, sempre com atenção aos detalhes e preço justo.<br/>

                <strong className='font-bold'>👉 Agende seu serviço e dirija tranquilo!</strong></p>

                <button className='mt-10 bg-yellow-400 p-1 rounded-md font-medium animate-pulse transition-all duration-300 ease-in-out hover:scale-110'>
                    <a className='flex items-center gap-2' href='https://wa.me/55016992611903'>
                    Agendar Serviço <FaWhatsapp size={23}/>
                    </a>
                </button>
                
            </article>

        <section className='bg-cover flex items-center justify-center bg-center w-full h-dvh object-cover brightness-50' style={{backgroundImage: `url(${img})`}}>
          

        </section>
        </motion.div>
        </>
    )
}