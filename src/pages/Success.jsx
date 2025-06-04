import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';

function Success() {
  return (
    <div className="min-h-screen bg-gray-100 p-10">
      <Helmet>
        <title>Cursos Online - Order Success</title>
        <meta name="description" content="Course purchase successful." />
      </Helmet>
      <h1 className="text-3xl font-bold text-center">Purchase Successful!</h1>
      <p className="mt-4 text-center">Thank you for your purchase.</p>
      <Link
        to="/courses"
        className="mt-4 inline-block mx-auto bg-purple-600 text-white px-6 py-2 rounded"
      >
        Browse More Courses
      </Link>
    </div>
  );
}

export default Success;