import Navbar from './components/Navbar';
import Footer from './components/Footer';
import BackToTop from './components/BackToTop';

export default function App() {
  return (
    <>
      <a className="skip-link" href="#conteudo">Pular para o conteúdo</a>
      <Navbar />
      <main id="conteudo"><h1>Açougue Bom Corte</h1></main>
      <Footer />
      <BackToTop />
    </>
  );
}
