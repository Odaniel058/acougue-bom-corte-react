import { tips } from '../data/contact';

export default function ContactGuide() {
  return (
    <section className="contact-guide section-space" aria-labelledby="titulo-atendimento">
      <div className="container"><div className="row gx-4 gy-4">
        <div className="col-lg-5">
          <h2 id="titulo-atendimento">Antes de entrar em contato</h2>
          <p>Estas informações ajudam a esclarecer sua consulta e a escolher o corte adequado.</p>
          <a className="text-link" href="#cortes">Consultar o catálogo</a>
        </div>
        <div className="col-lg-6 offset-lg-1"><ol className="contact-checklist">
          {tips.map((tip) => <li key={tip.title}><h3>{tip.title}</h3><p>{tip.text}</p></li>)}
        </ol></div>
      </div></div>
    </section>
  );
}
