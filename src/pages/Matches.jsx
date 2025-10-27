import { useEffect, useState } from "react";
import MatchResults from "../components/MatchResults";

const Matches = () => {
  const [profile, setProfile] = useState(null);
  const [matchedJobs, setMatchedJobs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const savedProfile = JSON.parse(localStorage.getItem("userProfile"));
    if (savedProfile) {
      setProfile(savedProfile);

      // Fetch jobs from db.json
      fetch("https://json-server-vercel-a6ea.vercel.app/jobs")
        .then((res) => res.json())
        .then((data) => {
          const matches = data.filter((job) =>
            job.skills.some((skill) =>
              savedProfile.skills
                .map((userSkill) => userSkill.toLowerCase())
                .includes(skill.toLowerCase())
            )
          );

          setMatchedJobs(matches);
          setLoading(false);
        })
        .catch((err) => {
          console.error("Error fetching jobs:", err);
          setLoading(false);
        });
    } else {
      setLoading(false);
    }
  }, []);

  if (loading) {
    return <p className="text-center text-gray-500">Loading...</p>;
  }

  if (!profile) {
    return (
      <p className="text-center text-gray-500">
        Please create your profile first.
      </p>
    );
  }

  return <MatchResults profile={profile} matchedJobs={matchedJobs} />;
};

export default Matches;
