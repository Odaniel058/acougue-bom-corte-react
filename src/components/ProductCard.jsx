import { whatsappUrl } from '../data/site';

export default function ProductCard({ product, featured = false }) {
  return (
    <article className="card product-card h-100">
      <img className="product-image" src={product.image} width={product.width} height={product.height} alt={product.alt} loading="lazy" decoding="async" />
      <div className="card-body">
        <p className="product-category">{product.label}</p>
        <h3>{product.name}</h3>
        <p className="product-description">{product.description}</p>
        {!featured && <p className="product-use"><span>Preparo</span>{product.preparation}</p>}
        <a className="product-inquiry" href={whatsappUrl('Olá, gostaria de consultar o valor de ' + product.name + '.')} target="_blank" rel="noopener noreferrer" aria-label={'Consultar o valor de ' + product.name + ' pelo WhatsApp em nova aba'}>Consulte o valor</a>
      </div>
    </article>
  );
}
