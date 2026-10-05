import ProductCard from '../components/ProductCard';
import { products } from '../data/products';

const highlightedIds = ['alcatra', 'contra-file', 'costela-suina'];

export default function Highlights() {
  const highlightedProducts = products.filter((product) => highlightedIds.includes(product.id));

  return (
    <section className="featured section-space" aria-labelledby="titulo-destaques">
      <div className="container">
        <div className="section-heading">
          <h2 id="titulo-destaques">Cortes em destaque</h2>
          <a className="text-link" href="#cortes">
            Ver todos os cortes
          </a>
        </div>
        <div className="row g-4">
          {highlightedProducts.map((product) => (
            <div className="col-12 col-md-6 col-lg-4" key={product.id}>
              <ProductCard product={product} featured />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
