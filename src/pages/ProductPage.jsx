import { useParams } from 'react-router-dom';
import { useProducts } from '../hooks/useProducts';
import ProductDetails from '../components/ProductDetails'; // gallery + info

export default function ProductPage() {
  const { slug } = useParams();
  const product = useProducts().find(p => p.slug === slug);
  return <ProductDetails product={product} />;
}