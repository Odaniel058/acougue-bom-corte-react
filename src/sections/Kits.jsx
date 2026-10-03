import { kits } from '../data/products';
import { whatsappUrl } from '../data/site';

export default function Kits() {
  return (
    <section className="section-space catalog-kits" id="kits" aria-labelledby="titulo-kits">
      <div className="container">
        <div className="section-heading">
          <h2 id="titulo-kits">Kits para churrasco</h2>
        </div>
        <p className="kits-intro">
          Escolha uma combinação para a sua churrasqueira. Consulte os valores e a disponibilidade
          antes de confirmar o pedido.
        </p>
        <div className="row g-4">
          {kits.map((kit) => (
            <div className="col-12 col-md-6 col-lg-4" key={kit.id}>
              <article className="grill-kit h-100">
                <img
                  className="kit-image"
                  src={kit.image}
                  width="1448"
                  height="1086"
                  alt={kit.alt}
                  loading="lazy"
                  decoding="async"
                />
                <div className="kit-body">
                  <p className="product-category">
                    SELEÇÃO PARA CHURRASCO <span aria-hidden="true">/</span> {kit.weight}
                  </p>
                  <h3>{kit.name}</h3>
                  <p className="kit-description">{kit.description}</p>
                  <ul className="kit-items">
                    {kit.items.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                  <p className="kit-total">
                    Peso total <strong>{kit.weight}</strong>
                  </p>
                  <a
                    className="product-inquiry"
                    href={whatsappUrl(
                      'Olá, gostaria de consultar o valor e a disponibilidade do ' + kit.name + '.',
                    )}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={'Consultar ' + kit.name + ' pelo WhatsApp em nova aba'}
                  >
                    Consultar kit no WhatsApp
                  </a>
                </div>
              </article>
            </div>
          ))}
        </div>
        <p className="kits-note">
          Precisa de outra quantidade? Consulte a possibilidade de ajustar os cortes e os pesos.
          Retirada e delivery a combinar.
        </p>
      </div>
    </section>
  );
}
