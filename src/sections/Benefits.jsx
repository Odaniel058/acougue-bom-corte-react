import { benefits } from '../data/story';

export default function Benefits() {
  return (
    <section className="benefits" aria-label="O cuidado Bom Corte">
      <div className="container"><div className="row gy-4">
        {benefits.map((benefit, index) => (
          <div className="col-md-4" key={benefit}><div className="benefit">
            <span className="benefit-number" aria-hidden="true">{String(index + 1).padStart(2, '0')}</span>
            <h2>{benefit}</h2>
          </div></div>
        ))}
      </div></div>
    </section>
  );
}
