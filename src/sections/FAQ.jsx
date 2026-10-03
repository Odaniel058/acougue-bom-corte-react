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
                  {index === 0 ? (
                    <>
                      Na seção <a href="#cortes">Nossos cortes</a>, você encontra fotos, descrições
                      e sugestões de preparo de carnes bovinas, suínas e aves.
                    </>
                  ) : (
                    item.answer
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
