import { address } from '../data/site';

export default function Location() {
  const mapAddress = encodeURIComponent(address);

  return (
    <section className="contact-location section-space" id="localizacao" aria-labelledby="titulo-localizacao">
      <div className="container">
        <div className="row gy-3 align-items-end mb-4">
          <div className="col-lg-7"><h2 id="titulo-localizacao">Como chegar</h2><address className="mb-0">{address}</address></div>
          <div className="col-lg-5 text-lg-end">
            <a className="text-link" href={'https://www.google.com/maps/search/?api=1&query=' + mapAddress} target="_blank" rel="noopener noreferrer" aria-label="Abrir endereço no Google Maps em nova aba">Abrir no Google Maps</a>
          </div>
        </div>
        <iframe className="contact-map" src={'https://www.google.com/maps?q=' + mapAddress + '&z=17&output=embed'} title={'Mapa de localização: ' + address} width="1200" height="420" loading="lazy" referrerPolicy="no-referrer-when-downgrade" allowFullScreen />
      </div>
    </section>
  );
}
