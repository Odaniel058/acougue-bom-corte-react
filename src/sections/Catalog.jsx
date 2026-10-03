import { useState } from 'react';
import { products, categories } from '../data/products';
import ProductCard from '../components/ProductCard';

export default function Catalog() {
  const [selectedCategory, setSelectedCategory] = useState('todas');
  const filters = [{ id: 'todas', label: 'Todas' }, ...categories];
  const visibleCategories = categories.filter(
    (category) => selectedCategory === 'todas' || category.id === selectedCategory,
  );
  const count = products.filter(
    (product) => selectedCategory === 'todas' || product.category === selectedCategory,
  ).length;

  return (
    <section className="catalog-landing section-space" id="cortes" aria-labelledby="titulo-cortes">
      <div className="container">
        <div className="section-heading">
          <div>
            <p className="section-kicker">NOSSA SELEÇÃO</p>
            <h2 id="titulo-cortes">
              Nossos <em>cortes.</em>
            </h2>
          </div>
          <p className="catalog-intro">
            Conheça os cortes bovinos, suínos e aves do nosso catálogo, com descrições e sugestões
            de preparo.
          </p>
        </div>
        <div className="catalog-filters" role="group" aria-label="Filtrar cortes por categoria">
          {filters.map((filter) => (
            <button
              type="button"
              className="filter-button"
              key={filter.id}
              aria-pressed={selectedCategory === filter.id}
              aria-controls="lista-cortes"
              onClick={() => setSelectedCategory(filter.id)}
            >
              {filter.label}
            </button>
          ))}
          <a className="text-link ms-md-auto" href="#kits">
            Ver kits de churrasco
          </a>
        </div>
        <p className="catalog-count" role="status">
          {count} opções de carnes · 2 kits para churrasco
        </p>
        <div id="lista-cortes">
          {visibleCategories.map((category) => (
            <div className="catalog-section" key={category.id}>
              <p className="catalog-category">{category.title}</p>
              <div className="row g-4">
                {products
                  .filter((product) => product.category === category.id)
                  .map((product) => (
                    <div className="col-12 col-md-6 col-lg-4" key={product.id}>
                      <ProductCard product={product} />
                    </div>
                  ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
