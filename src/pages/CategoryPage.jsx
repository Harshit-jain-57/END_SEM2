import { useParams } from 'react-router-dom';
import { useProducts } from '../hooks/useProducts';
import ProductGrid from '../components/ProductGrid';

export default function CategoryPage() {
  const { fabric, subcategory } = useParams();
  const products = useProducts().filter(
    p => p.fabric === fabric && p.subcategory === subcategory
  );
  return (
    <section className="container">
      <h1>{fabric} / {subcategory}</h1>
      <ProductGrid products={products} />
    </section>
  );
}