import { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { CartContext } from '../context/CartContext';
import courses from '../data/courses';

function CourseDetails() {
  const { addToCart } = useContext(CartContext);
  const { id } = useParams();
  const course = courses.find(c => c.id === parseInt(id));

  if (!course) return <div>Course not found</div>;

  return (
    <div className="min-h-screen bg-gray-100 p-10">
      <Helmet>
        <title>Cursos Online - {course.title}</title>
        <meta name="description" content={`Learn ${course.title} with ${course.instructor}.`} />
      </Helmet>
      <div className="max-w-4xl mx-auto bg-white p-6 rounded shadow">
        <img src={course.image} alt={course.title} className="h-64 w-full object-cover rounded" />
        <h1 className="text-2xl font-bold mt-4">{course.title}</h1>
        <p className="mt-2">Instructor: {course.instructor}</p>
        <p className="mt-2">${course.price.toLocaleString('es-AR')}</p>
        <p className="mt-2">Duration: {course.duration}</p>
        <p className="mt-2">{course.description}</p>
        <button
          onClick={() => addToCart(course)}
          className="mt-4 bg-purple-600 text-white px-6 py-2 rounded"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
}

export default CourseDetails;