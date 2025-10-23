import JobCard from "./JobCard";

const JobList = ({ jobs, showMatch = false }) => {
  if (jobs.length === 0) {
    return (
      <div className="text-center py-12 text-gray-500">
        No jobs found matching your search.
      </div>
    );
  }

  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
      {jobs.map((job) => (
        <JobCard key={job.id} job={job} isMatched={showMatch} />
      ))}
    </div>
  );
};

export default JobList;
