import AuthLayout from '../layouts/AuthLayout'
import { useEffect, useState } from 'react';
import axios from 'axios';
import { Card, Collapse, Spin } from 'antd';
import { EyeIcon } from 'lucide-react';
import { Link } from 'react-router-dom';

const { Panel } = Collapse;
const Home = () => {
  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const res = await axios.get('https://fakestoreapi.com/products/categories');
        setCategories(res.data);
      } catch (error) {
        console.error('Error fetching categories:', error);
      }
    };

    fetchCategories();
  }, []);

  const fetchProducts = async (category) => {
    if (products[category]) return; // Don't fetch if products are already fetched

    setLoading(true);

    try {
      const res = await axios.get(`https://fakestoreapi.com/products/category/${category}`);
      setProducts((prev) => ({ ...prev, [category]: res.data }));
    } catch (error) {
      console.error('Error fetching products:', error);
    } finally {
      setLoading(false);
    }
  };


  return (
    <AuthLayout>
      <div className="w-full" style={{ padding: '20px' }}>
        <h1 className="text-2xl mb-4">Product Categories</h1>
        {/* accordion */}
        <Collapse
          accordion
          onChange={fetchProducts}
          expandIconPosition="right"
          className='w-full'
        >
          {categories.map((category) => (
            <Panel className='capitalize' header={category} key={category}>

              {/* products grid */}
              <div className='grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2   gap-4'>
                {loading ? (
                  <Spin />
                ) : (
                  products[category] && products[category].map((product) => (
                    <Card key={product.id} className='gap-8 flex flex-col '  >
                      <img src={product.image} alt={product.title} className='size-36 object-contain' />
                      <div className='capitalize flex w-full justify-between'> <p>{product.title.split(' ').slice(0, 6).join(' ') + (product.title.split(' ').length > 6 ? '...' : '')}</p>
                        <Link to={`/product/${product.id}`}>
                          <EyeIcon size={24} className='text-black hover:text-black/50 duration-500' />
                        </Link>
                      </div>
                      <div className='font-bold'>${product.price}</div>
                    </Card>
                  ))
                )}
              </div>
            </Panel>
          ))}
        </Collapse>
      </div>
    </AuthLayout>
  )
}

export default Home