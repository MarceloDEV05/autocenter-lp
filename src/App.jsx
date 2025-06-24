 import { Header } from "./components/Header"
 import { Footer } from "./components/Footer"
 import { Interface } from "./components/Interface"
 import { Services } from "./components/Services"
 import { Contacts } from "./components/Contacts"
 import { About } from "./components/About"
import { Form } from "./components/Form"


function App() {
 

  return (
    <main>
      <Header/>
      <Interface/>
      <About/>
      <Services/>
      <Contacts/>
      <Form/>
      <Footer/>
    </main>
  )
}

export default App
