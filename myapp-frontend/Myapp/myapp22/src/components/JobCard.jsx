const JobCard = ({ job, isMatched }) => {
  return (
    <div className="border rounded-lg p-4 bg-white shadow-sm">
      <h3 className="text-xl font-semibold">{job.title}</h3>
      {/* Added a new color for styling */}
      <p className="text-gray-600">{job.company}</p>
      <p className="text-sm text-gray-500">{job.location}</p>
      <p className="text-sm mt-2">
        Experience: {job.experience} years | Education: {job.education}
      </p>
      <div className="mt-3 flex flex-wrap gap-2">
        {job.skills.map((skill) => (
          <span key={skill} className="bg-blue-100 text-blue-700 px-2 py-1 rounded-md text-xs">
            {skill}
          </span>
        ))}
      </div>
      {isMatched && (
        <p className="text-green-600 font-medium mt-3">✅ Matched to your skills!</p>
      )}
    </div>
  );
};

export default JobCard;
