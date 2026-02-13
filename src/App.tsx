import { BrotasMed } from "./components/BrotasMed";
import { Contato } from "./components/Contato";
import { Especialidades } from "./components/Especialidades";
import { Footer } from "./components/Footer";
import { Hero } from "./components/Herot";
import { Navbar } from "./components/Navbar";
import { Reabilitar } from "./components/Reabilidar";

function App() {
  return (
    <main className="bg-black">
      <Navbar />
      <Hero />
      <Especialidades /> 
      <BrotasMed />
      <Reabilitar />
      <Contato />
      {/* <Diferenciais />   
      <Convenios />     
      <FAQ />
      */}
      <Footer /> 
    </main>
  )
}

export default App;