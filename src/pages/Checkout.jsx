import { useState, useContext } from 'react';
import { Helmet } from 'react-helmet-async';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';
import { CartContext } from '../context/CartContext';

function Checkout() {
  const { user } = useContext(AuthContext);
  const { cart, clearCart } = useContext(CartContext);
  const [formData, setFormData] = useState({ name: user?.name || '', email: user?.email || '', card: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const navigate = useNavigate();
  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  if (!user) {
    navigate('/login', { state: { from: '/checkout' } });
    return null;
  }

  const handleSubmit = async e => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      await new Promise(resolve => setTimeout(resolve, 1000));
      console.log('Order placed:', { ...formData, items: cart, total });
      clearCart();
      navigate('/success');
    } catch (error) {
      alert('Error processing order');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 p-10">
      <Helmet>
        <title>Cursos Online - Checkout</title>
        <meta name="description" content="Complete your course purchase." />
      </Helmet>
      <h1 className="text-3xl font-bold text-center">Checkout</h1>
      <div className="max-w-md mx-auto mt-6">
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Name"
            className="w-full p-3 mb-4 border rounded"
            value={formData.name}
            onChange={e => setFormData({ ...formData, name: e.target.value })}
            disabled={isSubmitting}
          />
          <input
            type="email"
            placeholder="Email"
            className="w-full p-3 mb-4 border rounded"
            value={formData.email}
            onChange={e => setFormData({ ...formData, email: e.target.value })}
            disabled={isSubmitting}
          />
          <input
            type="text"
            placeholder="Card Number (Demo)"
            className="w-full p-3 mb-4 border rounded"
            value={formData.card}
            onChange={e => setFormData({ ...formData, card: e.target.value })}
            disabled={isSubmitting}
          />
          <p className="text-xl font-bold mb-4">Total: ${total.toLocaleString('es-AR')}</p>
          <button
            type="submit"
            className="bg-purple-600 text-white px-6 py-3 rounded disabled:opacity-50"
            disabled={isSubmitting || cart.length === 0}
          >
            {isSubmitting ? 'Processing...' : 'Pay Now'}
          </button>
        </form>
      </div>
    </div>
  );
}

export default Checkout;