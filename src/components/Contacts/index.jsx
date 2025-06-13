import { FaWhatsapp, FaInstagram, FaPhone } from "react-icons/fa6"
export const Contacts = () => {
    return(
        <>
        <h1 className="text-2xl font-medium text-white text-center">Nossos  
                <span className="text-yellow-400"> Contatos</span>
                </h1>
        <div className="grid grid-cols-3 gap-3 w-60 justify-center mx-auto my-20 hover:scale-105 duration-300">

            <aside className=" w-full rounded-md h-12 flex items-center justify-center border-white bg-yellow-400 hover:scale-105 duration-300">
            <FaWhatsapp size={40}/>
            </aside>

            <aside className=" w-full h-12 rounded-md flex items-center justify-center border-white bg-yellow-400 hover:scale-105 duration-300">
            <FaInstagram size={40}/>
            </aside>

            <aside className="w-full h-12 rounded-md flex items-center justify-center border-white bg-yellow-400 hover:scale-105 duration-300">
            <FaPhone size={40}/>
            </aside>
        </div>
        </>
    )
}