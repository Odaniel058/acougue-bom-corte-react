import { questions } from '../data/contact';

export default function FAQ() {
  return (
    <section className="contact-faq section-space" id="duvidas" aria-labelledby="titulo-duvidas">
      <div className="container">
        <div className="row gx-4 gy-4">
          <div className="col-lg-5">
            <h2 id="titulo-duvidas">Dúvidas frequentes</h2>
            <p>Informações para consultar o catálogo e planejar seu atendimento.</p>
          </div>
          <div className="col-lg-7">
            {questions.map((item, index) => (
              <details className="faq-item" key={item.question} open={index === 0}>
                <summary>{item.question}</summary>
                <p>
                  {item.answer}
                  {item.link && (
                    <>
                      {' '}
                      <a href={item.link.href}>{item.link.text}</a>
                    </>
                  )}
                </p>
              </details>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
