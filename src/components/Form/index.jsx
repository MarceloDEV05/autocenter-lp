import { useRef, useState } from "react"
import emailjs from '@emailjs/browser'
import { toast } from "react-toastify"

export const Form = () => {
  
    const contactUs = useRef()
    
    const sendEmail = async(e) => {
    e.preventDefault()

   const nome = contactUs.current.nome.value.trim()
   const email = contactUs.current.email.value.trim()
   const message = contactUs.current.message.value.trim()

    if(!nome || !email || !message){
        toast.error('Preencha todos os campos!')
        return;
    }

        try{
        await emailjs.sendForm('service_4vobgjp', 'template_1c2k3gv', contactUs.current, {
        publicKey:'KPwJ8yPbv4oOmLkp1'
      })
        toast.success('Formulário enviado com sucesso')
        contactUs.current.reset()
        }
        catch(error){
            toast.error('Erro ao enviar Formulário')
        }
    }

 
    return(
        <form ref={contactUs} onSubmit={sendEmail} className=" flex flex-col w-full max-w-2xl items-center justify-center m-auto rounded-md px-4">

            <h1 className="text-2xl text-white font-medium mb-3 mt-3">Fale Conosco</h1>

         <div className=" rounded-md flex flex-col w-full justify-center items-center max-w-xl gap-3 mb-8">
            <input type="text"
            name="nome"
            placeholder="Digite seu nome..."
            className="border-2 border-gray-500 bg-white p-2 rounded-md placeholder:text-gray-400 w-full"
            />

            <input type="email"
            name="email"
            placeholder="Digite seu email..."
            className="border-2 border-gray-500 bg-white p-2 rounded-md placeholder:text-gray-400 w-full"
            />

            <textarea name="message" id=""
            className="border border-white text-gray-500 w-full bg-white rounded-md p-6"
            placeholder="Como podemos te ajudar?"
            ></textarea>

         <button type="submit" className="bg-yellow-400 w-full p-2 rounded-md font-bold curso-pointer">
           enviar
            
         </button>
           
         </div>
        </form>
    )
}