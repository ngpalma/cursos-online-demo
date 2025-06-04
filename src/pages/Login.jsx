import { useState, useContext } from 'react';
import { Helmet } from 'react-helmet-async';
import { useNavigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';

function Login() {
  const [formData, setFormData] = useState({ email: '', password: '' });
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from || '/';

  const handleSubmit = e => {
    e.preventDefault();
    if (login(formData.email, formData.password)) {
      navigate(from, { replace: true });
    } else {
      alert('Login failed');
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 p-10">
      <Helmet>
        <title>Cursos Online - Login</title>
        <meta name="description" content="Log in to access your courses." />
      </Helmet>
      <h1 className="text-3xl font-bold text-center">Login</h1>
      <div className="max-w-md mx-auto mt-6">
        <form onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="Email"
            className="w-full p-3 mb-4 border rounded"
            value={formData.email}
            onChange={e => setFormData({ ...formData, email: e.target.value })}
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full p-3 mb-4 border rounded"
            value={formData.password}
            onChange={e => setFormData({ ...formData, password: e.target.value })}
          />
          <button
            type="submit"
            className="bg-purple-600 text-white px-6 py-3 rounded w-full"
          >
            Log In
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;