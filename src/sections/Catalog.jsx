import { useState } from 'react';
import { products, categories, kits } from '../data/products';
import ProductCard from '../components/ProductCard';

const filters = [{ id: 'todas', label: 'Todas' }, ...categories];

export default function Catalog() {
  const [selectedCategory, setSelectedCategory] = useState('todas');
  const visibleCategories = categories.filter(
    (category) => selectedCategory === 'todas' || category.id === selectedCategory,
  );
  const visibleProducts = products.filter(
    (product) => selectedCategory === 'todas' || product.category === selectedCategory,
  );

  return (
    <section className="catalog-landing section-space" id="cortes" aria-labelledby="titulo-cortes">
      <div className="container">
        <div className="section-heading">
          <h2 id="titulo-cortes">
            Nossos <em>cortes.</em>
          </h2>
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
        </div>
        <p className="catalog-count" role="status">
          {visibleProducts.length} opções de carnes · {kits.length} kits para churrasco
        </p>
        <div id="lista-cortes">
          {visibleCategories.map((category) => {
            const categoryProducts = visibleProducts.filter(
              (product) => product.category === category.id,
            );

            return (
              <div className="catalog-section" key={category.id}>
                <p className="catalog-category">{category.title}</p>
                <div className="row g-4">
                  {categoryProducts.map((product) => (
                    <div className="col-12 col-md-6 col-lg-4" key={product.id}>
                      <ProductCard product={product} />
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
