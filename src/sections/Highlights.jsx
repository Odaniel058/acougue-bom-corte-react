import { useEffect, useRef } from 'react';
import Carousel from 'bootstrap/js/dist/carousel';
import ProductCard from '../components/ProductCard';
import { products, kits } from '../data/products';

const highlightedIds = ['alcatra', 'contra-file', 'costela-suina'];
const highlightedKit = kits.find((kit) => kit.id === 'kit-churrasco-classico');
const highlightedItems = [
  { ...highlightedKit, label: 'KIT PARA CHURRASCO · ' + highlightedKit.weight },
  ...products.filter((product) => highlightedIds.includes(product.id)),
];

export default function Highlights() {
  const carouselRef = useRef(null);

  // Inicia o carrossel do Bootstrap sem troca automática.
  useEffect(() => {
    const carousel = new Carousel(carouselRef.current, { interval: false, ride: false });
    return () => carousel.dispose();
  }, []);

  return (
    <section className="featured section-space" aria-labelledby="titulo-destaques">
      <div className="container">
        <div className="section-heading">
          <h2 id="titulo-destaques">Carnes e kits em destaque</h2>
        </div>
        <div
          id="carrossel-destaques"
          className="carousel slide highlights-carousel"
          ref={carouselRef}
          aria-label="Carnes e kits em destaque"
          aria-roledescription="carrossel"
        >
          <div className="carousel-inner" aria-live="polite">
            {highlightedItems.map((product, index) => (
              <div
                className={index === 0 ? 'carousel-item active' : 'carousel-item'}
                key={product.id}
                role="group"
                aria-roledescription="slide"
                aria-label={index + 1 + ' de ' + highlightedItems.length}
              >
                <ProductCard product={product} featured />
              </div>
            ))}
          </div>
          <div className="highlight-controls">
            <button
              className="highlight-control"
              type="button"
              data-bs-target="#carrossel-destaques"
              data-bs-slide="prev"
              aria-label="Destaque anterior"
            >
              <span className="carousel-control-prev-icon" aria-hidden="true" />
            </button>
            <div className="carousel-indicators">
              {highlightedItems.map((product, index) => (
                <button
                  type="button"
                  key={product.id}
                  data-bs-target="#carrossel-destaques"
                  data-bs-slide-to={index}
                  className={index === 0 ? 'active' : ''}
                  aria-current={index === 0 ? 'true' : undefined}
                  aria-label={'Mostrar ' + product.name}
                />
              ))}
            </div>
            <button
              className="highlight-control"
              type="button"
              data-bs-target="#carrossel-destaques"
              data-bs-slide="next"
              aria-label="Próximo destaque"
            >
              <span className="carousel-control-next-icon" aria-hidden="true" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
