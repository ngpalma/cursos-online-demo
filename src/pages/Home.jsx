import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="min-h-screen bg-gray-100">
      <Helmet>
        <title>Cursos Online - Home</title>
        <meta name="description" content="Learn new skills with our online courses." />
      </Helmet>
      <section className="bg-purple-600 text-white p-10 text-center">
        <h1 className="text-4xl font-bold">Welcome to Cursos Online</h1>
        <p className="mt-4">Master new skills from top instructors.</p>
        <Link to="/courses" className="mt-4 inline-block bg-white text-purple-600 px-6 py-2 rounded">
          Browse Courses
        </Link>
      </section>
    </div>
  );
}

export default Home;