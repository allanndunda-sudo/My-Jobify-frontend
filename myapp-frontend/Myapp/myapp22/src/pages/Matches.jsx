import { useEffect, useState } from "react";
import MatchResults from "../components/MatchResults";

const Matches = () => {
  const [profile, setProfile] = useState(null);
  const [matchedJobs, setMatchedJobs] = useState([]);

  useEffect(() => {
    const savedProfile = JSON.parse(localStorage.getItem("userProfile"));
    if (savedProfile) {
      setProfile(savedProfile);

      const allJobs = [
        {
          id: 1,
          title: "Frontend Developer",
          company: "TechCorp",
          location: "Nairobi",
          experience: 2,
          education: "Bachelor's",
          skills: ["React", "JavaScript", "Tailwind"],
        },
        {
          id: 2,
          title: "Backend Engineer",
          company: "CodeWorks",
          location: "Remote",
          experience: 3,
          education: "Bachelor's",
          skills: ["Node.js", "Express", "MongoDB"],
        },
      ];

      const matches = allJobs.filter((job) =>
        job.skills.some((s) =>
          savedProfile.skills.map((k) => k.toLowerCase()).includes(s.toLowerCase())
        )
      );

      setMatchedJobs(matches);
    }
  }, []);

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
