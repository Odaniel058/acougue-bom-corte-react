import { story } from '../data/story';

export default function About() {
  return (
    <section className="about-story section-space" id="sobre" aria-labelledby="titulo-sobre">
      <div className="container"><div className="row gx-4 gy-4">
        <div className="col-lg-5">
          <p className="section-kicker">SOBRE O BOM CORTE</p>
          <h2 id="titulo-sobre">Nossa história</h2>
          <p className="about-lead">Tradição e qualidade em cada corte.</p>
          <p>Um açougue na Tijuca com foco na seleção de carnes e na orientação de quem compra.</p>
          <a className="text-link" href="#contato">Contato e atendimento</a>
        </div>
        <div className="col-lg-7">{story.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}</div>
      </div></div>
    </section>
  );
}
