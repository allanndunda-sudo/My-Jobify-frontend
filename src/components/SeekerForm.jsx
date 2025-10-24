import { useState } from "react";
import { useNavigate } from "react-router-dom";

const SeekerForm = () => {
  const navigate = useNavigate();

  const [profile, setProfile] = useState({
    name: "",
    skills: [],
    experience: "",
    education: "",
  });
  const [currentSkill, setCurrentSkill] = useState("");
  const [errors, setErrors] = useState({});

  // Validate form fields
  const validateForm = () => {
    const newErrors = {};

    if (!profile.name.trim()) newErrors.name = "Full name is required.";
    if (profile.skills.length === 0) newErrors.skills = "Add at least one skill.";
    if (profile.experience === "" || isNaN(profile.experience)) {
      newErrors.experience = "Enter a valid number of years.";
    } else if (profile.experience < 0 || profile.experience > 50) {
      newErrors.experience = "Experience must be between 0 and 50 years.";
    }
    if (!profile.education) newErrors.education = "Please select your education level.";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  //  Add a skill
  const handleAddSkill = () => {
    if (currentSkill.trim() && !profile.skills.includes(currentSkill.trim())) {
      setProfile((prev) => ({
        ...prev,
        skills: [...prev.skills, currentSkill.trim()],
      }));
      setCurrentSkill("");
    }
  };

  // Remove a skill
  const handleRemoveSkill = (skillToRemove) => {
    setProfile((prev) => ({
      ...prev,
      skills: prev.skills.filter((skill) => skill !== skillToRemove),
    }));
  };

  // Submit handler
  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validateForm()) return;

    localStorage.setItem("userProfile", JSON.stringify(profile));

    alert("Profile saved successfully!");
    navigate("/matches");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-lg mx-auto bg-white shadow-md rounded-lg p-6 space-y-6"
    >
      {/* Full Name */}
      <div>
        <label htmlFor="name" className="block text-gray-700 font-medium mb-1">
          Full Name *
        </label>
        <input
          id="name"
          type="text"
          placeholder="John Doe"
          className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          value={profile.name}
          onChange={(e) => setProfile({ ...profile, name: e.target.value })}
        />
        {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
      </div>

      {/* Skills */}
      <div>
        <label htmlFor="skills" className="block text-gray-700 font-medium mb-1">
          Skills *
        </label>
        <div className="flex gap-2">
          <input
            id="skills"
            type="text"
            placeholder="Add a skill (e.g., React, Python)"
            className="flex-grow border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={currentSkill}
            onChange={(e) => setCurrentSkill(e.target.value)}
            onKeyPress={(e) => {
              if (e.key === "Enter") {
                e.preventDefault();
                handleAddSkill();
              }
            }}
          />
          <button
            type="button"
            onClick={handleAddSkill}
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
          >
            Add
          </button>
        </div>
        {errors.skills && <p className="text-red-500 text-sm">{errors.skills}</p>}

        {profile.skills.length > 0 && (
          <div className="flex flex-wrap gap-2 mt-3">
            {profile.skills.map((skill) => (
              <span
                key={skill}
                className="flex items-center gap-2 bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm"
              >
                {skill}
                <button
                  type="button"
                  onClick={() => handleRemoveSkill(skill)}
                  className="text-red-500 hover:text-red-700"
                >
                  ✕
                </button>
              </span>
            ))}
          </div>
        )}
      </div>

      {/* Experience */}
      <div>
        <label htmlFor="experience" className="block text-gray-700 font-medium mb-1">
          Years of Experience *
        </label>
        <input
          id="experience"
          type="number"
          min="0"
          max="50"
          placeholder="0"
          className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          value={profile.experience}
          onChange={(e) => setProfile({ ...profile, experience: e.target.value })}
        />
        {errors.experience && (
          <p className="text-red-500 text-sm">{errors.experience}</p>
        )}
      </div>

      {/* Education */}
      <div>
        <label htmlFor="education" className="block text-gray-700 font-medium mb-1">
          Education Level *
        </label>
        <select
          id="education"
          className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          value={profile.education}
          onChange={(e) => setProfile({ ...profile, education: e.target.value })}
        >
          <option value="">Select your education level</option>
          <option value="High School">High School</option>
          <option value="Diploma">Diploma</option>
          <option value="Bachelor's">Bachelor's Degree</option>
          <option value="Master's">Master's Degree</option>
          <option value="PhD">PhD</option>
        </select>
        {errors.education && (
          <p className="text-red-500 text-sm">{errors.education}</p>
        )}
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        className="w-full bg-blue-600 text-white py-3 rounded-lg font-medium hover:bg-blue-700 transition"
      >
        Save Profile & Find Matches
      </button>
    </form>
  );
};

export default SeekerForm;
