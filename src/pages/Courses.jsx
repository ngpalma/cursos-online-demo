import { useState, useContext } from 'react';
import { Helmet } from 'react-helmet-async';
import { CartContext } from '../context/CartContext';
import courses from '../data/courses';

function Courses() {
  const { addToCart } = useContext(CartContext);
  const [search, setSearch] = useState('');
  const [category, setCategory] = useState('All');

  const filteredCourses = courses.filter(
    course =>
      course.title.toLowerCase().includes(search.toLowerCase()) &&
      (category === 'All' || course.category === category)
  );

  const categories = ['All', ...new Set(courses.map(course => course.category))];

  return (
    <div className="min-h-screen bg-gray-100 p-10">
      <Helmet>
        <title>Cursos Online - Courses</title>
        <meta name="description" content="Browse our online courses." />
      </Helmet>
      <h1 className="text-3xl font-bold text-center">Courses</h1>
      <div className="max-w-md mx-auto mt-4 flex gap-4">
        <input
          type="text"
          placeholder="Search..."
          value={search}
          onChange={e => setSearch(e.target.value)}
          className="w-full p-3 rounded"
        />
        <select
          value={category}
          onChange={e => setCategory(e.target.value)}
          className="p-3 rounded"
        >
          {categories.map(cat => (
            <option key={cat} value={cat}>
              {cat}
            </option>
          ))}
        </select>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
        {filteredCourses.map(course => (
          <div key={course.id} className="bg-white p-4 rounded shadow">
            <img src={course.image} alt={course.title} className="h-40 w-full object-cover rounded" />
            <h3 className="text-lg font-bold">{course.title}</h3>
            <p>{course.instructor}</p>
            <p>${course.price.toLocaleString('es-AR')}</p>
            <button
              onClick={() => addToCart(course)}
              className="mt-2 bg-purple-600 text-white px-4 py-2 rounded"
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Courses;