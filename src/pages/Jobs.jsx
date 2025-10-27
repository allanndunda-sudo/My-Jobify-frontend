import { useEffect, useState } from "react";
import JobList from "../components/JobList";

const Jobs = () => {
  const [jobs, setJobs] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedLocation, setSelectedLocation] = useState("All");


  useEffect(() => {
    fetch("https://json-server-vercel-a6ea.vercel.app/jobs")
      .then((res) => res.json())
      .then((data) => setJobs(data))
      .catch((err) => console.error("Error fetching jobs:", err));
  }, []);

  const locations = ["All", ...new Set(jobs.map((job) => job.location))];

  const filteredJobs = jobs.filter((job) => {
    const matchesSearch =
      job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      job.company.toLowerCase().includes(searchTerm.toLowerCase()) ||
      job.skills.some((skill) =>
        skill.toLowerCase().includes(searchTerm.toLowerCase())
      );

    const matchesLocation =
      selectedLocation === "All" || job.location === selectedLocation;

    return matchesSearch && matchesLocation;
  });

  return (
    <section className="p-8 bg-gray-50 min-h-screen">
      <h2 className="text-3xl font-bold text-center text-blue-600 mb-8">
        Browse Jobs
      </h2>

      
      <div className="flex flex-col md:flex-row items-center justify-center gap-4 mb-10">
       
        <input
          type="text"
          placeholder="Search by title, company, or skill..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full md:w-1/2 border border-gray-300 rounded-lg px-4 py-2 text-gray-700 
                     focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-sm"
        />

        
        <select
          value={selectedLocation}
          onChange={(e) => setSelectedLocation(e.target.value)}
          className="w-full md:w-1/4 border border-gray-300 rounded-lg px-4 py-2 text-gray-700 
                     focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-sm"
        >
          {locations.map((location, index) => (
            <option key={index} value={location}>
              {location}
            </option>
          ))}
        </select>
      </div>

      
      {filteredJobs.length > 0 ? (
        <JobList jobs={filteredJobs} />
      ) : (
        <p className="text-center text-gray-500">No matching jobs found.</p>
      )}
    </section>
  );
};

export default Jobs;


