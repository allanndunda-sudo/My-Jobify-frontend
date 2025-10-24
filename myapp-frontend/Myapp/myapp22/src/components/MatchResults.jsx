import JobList from "./JobList"; 
// Display user profile in match job listing

const MatchResults = ({ profile, matchedJobs }) => {
  return (
    <div className="space-y-8">
      <div className="bg-white border rounded-lg p-6 shadow">
        <h2 className="font-semibold text-lg mb-3">Your Profile</h2>
        <p><strong>Name:</strong> {profile.name}</p>
        <p><strong>Experience:</strong> {profile.experience} years</p>
        <p><strong>Education:</strong> {profile.education}</p>
        <div className="mt-2">
          <strong>Skills:</strong>
          <div className="flex flex-wrap gap-2 mt-2">
            {profile.skills.map((skill) => (
              <span key={skill} className="bg-blue-100 text-blue-700 px-2 py-1 rounded-md text-xs">
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>

      <h3 className="text-xl font-semibold text-gray-800">Matched Jobs</h3>
      <JobList jobs={matchedJobs} showMatch={true} />
    </div>
  );
};

export default MatchResults;
