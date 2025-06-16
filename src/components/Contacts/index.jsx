import { FaWhatsapp, FaInstagram, FaEnvelope } from "react-icons/fa6"
export const Contacts = () => {
    return(
        <>
        <h1 className="text-2xl font-medium text-white text-center">Nossos  
                <span className="text-yellow-400"> Contatos</span>
                </h1>
        <div className="grid grid-cols-3 gap-3 w-60 justify-center mx-auto my-10 hover:scale-105 duration-300" id="contacts">

            <aside className=" w-full rounded-md h-12 flex items-center justify-center border-white bg-yellow-400 hover:scale-105 duration-300">
            <a href="https://wa.me/55016992611903">
            <FaWhatsapp size={40} target="_blank"/>
            </a>
            </aside>

            <aside className=" w-full h-12 rounded-md flex items-center justify-center border-white bg-yellow-400 hover:scale-105 duration-300">
            <a target="_blank" href="https://www.instagram.com/veto.pereira?igsh=N2ttNmhsd2s1ZGV2">
            <FaInstagram size={40}/>
            </a>
            </aside>


            <aside className="w-full h-12 rounded-md flex items-center justify-center border-white bg-yellow-400 hover:scale-105 duration-300">
            <a href="mailto:vetodeoliveira@gmail.com?subject=Contato via site&body=Olá, gostaria de mais informações sobre..." target="_blank">
            <FaEnvelope size={40}/>
            </a>
            </aside>
        </div>
        </>
    )
}