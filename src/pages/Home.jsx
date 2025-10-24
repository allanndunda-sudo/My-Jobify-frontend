import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  return (
    <section className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-100 text-center px-4">
     
      <div className="max-w-2xl space-y-6 animate-fadeIn">
        <h1 className="text-5xl font-extrabold text-blue-700 drop-shadow-sm">
          Welcome to <span className="text-blue-500">Jobify</span>
        </h1>

        <p className="text-gray-600 text-lg leading-relaxed">
          Discover your dream job! Build your profile, explore opportunities, and connect with employers who value your skills.
        </p>

       
        <div className="flex flex-wrap justify-center gap-4 mt-8">
          <button
            onClick={() => navigate("/profile")}
            className="bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition transform hover:scale-105 shadow-md"
          >
            Create Profile
          </button>

          <button
            onClick={() => navigate("/jobs")}
            className="border-2 border-blue-600 text-blue-600 px-6 py-3 rounded-lg font-medium hover:bg-blue-600 hover:text-white transition transform hover:scale-105 shadow-md"
          >
            Browse Jobs
          </button>
        </div>
      </div>

     
      <div className="absolute top-10 left-10 w-32 h-32 bg-blue-200 rounded-full blur-3xl opacity-30 animate-pulse"></div>
      <div className="absolute bottom-10 right-10 w-32 h-32 bg-blue-300 rounded-full blur-3xl opacity-20 animate-pulse"></div>
    </section>
  );
};

export default Home;
