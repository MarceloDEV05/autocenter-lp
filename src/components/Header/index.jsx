export const Header = () => {
    return(
        <header className="bg-gray-950 w-full h-16 items-center justify-around px-8 rounded-lg flex z-50 fixed top-0 text-white gap-2 overflow-hidden">
            <h1 className="text-white lg:text-3xl text-xl text-center">Erivelton <strong className="text-yellow-400">AutoCenter</strong></h1>

            <nav className="z-50 hidden lg:block">
                <ul className="flex gap-3 text-lg">
                    <li><a href="#home" className="hover:text-gray-400">Início</a></li>
                    <li><a href="#services"className="hover:text-gray-400">Nossos Serviços</a></li>
                    <li><a href="#contacts"className="hover:text-gray-400">Nossos Contatos</a></li>
                </ul>
            </nav>
            
        </header>
    )
}