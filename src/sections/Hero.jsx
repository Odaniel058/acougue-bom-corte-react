import { whatsappUrl } from '../data/site';

export default function Hero() {
  return (
    <section className="hero" id="inicio" aria-labelledby="titulo-inicio">
      <img
        className="hero-image"
        src="/images/acougue-principal-v2.webp"
        width="1536"
        height="1024"
        alt="Peça de carne bovina e bifes sobre uma tábua com ervas"
        fetchPriority="high"
      />
      <div className="container hero-content">
        <div className="row">
          <div className="col-lg-7 col-xl-6 hero-copy">
            <h1 id="titulo-inicio">
              <span className="hero-title-line">O sabor começa</span>
              <span className="hero-title-line">com um</span>
              <em>bom corte.</em>
            </h1>
            <p>
              Carnes selecionadas para o churrasco de domingo, o almoço em família e os sabores de
              todos os dias.
            </p>
            <div className="hero-actions">
              <a className="text-link" href="#cortes">
                Conheça nossos cortes
              </a>
              <a
                className="text-link"
                href={whatsappUrl()}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Falar pelo WhatsApp em nova aba"
              >
                Fale pelo WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
