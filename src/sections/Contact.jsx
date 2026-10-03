import SocialLinks from '../components/SocialLinks';
import { address, phone, whatsappNumber } from '../data/site';

export default function Contact() {
  return (
    <section className="contact-intro section-space" id="contato" aria-labelledby="titulo-contato">
      <div className="container">
        <div className="row align-items-center gx-4 gy-4">
          <div className="col-lg-7">
            <p className="section-kicker">FALE COM A GENTE</p>
            <h2 id="titulo-contato">Contato</h2>
            <p>
              Consulte o endereço, o telefone e as orientações para tirar suas dúvidas sobre os
              cortes.
            </p>
            <a className="text-link" href="#duvidas">
              Dúvidas frequentes
            </a>
          </div>
          <div className="col-lg-5">
            <dl className="contact-info contact-info-panel mb-0">
              <dt>Endereço</dt>
              <dd>
                <address className="mb-0">{address}</address>
              </dd>
              <dt>Telefone</dt>
              <dd>
                <a href={'tel:+' + whatsappNumber}>{phone}</a>
              </dd>
              <dt>Horário de funcionamento</dt>
              <dd>
                <ul className="list-unstyled mb-0">
                  <li>
                    Segunda a sexta: <time dateTime="08:00">08h</time> às{' '}
                    <time dateTime="18:00">18h</time>
                  </li>
                  <li>
                    Sábado: <time dateTime="08:00">08h</time> às <time dateTime="14:00">14h</time>
                  </li>
                  <li>Domingos e feriados: fechado</li>
                </ul>
              </dd>
              <dt>Formas de atendimento</dt>
              <dd className="mb-0">
                Retirada no local e delivery.
                <br />
                Consulte a área de entrega, a taxa e o prazo antes de confirmar o pedido.
              </dd>
            </dl>
            <SocialLinks />
          </div>
        </div>
      </div>
    </section>
  );
}
