import { skills } from "../portfolio.js";

const Skills = () => {
  return (
    <div className="sticky top-0 h-screen bg-gray-900 flex flex-col items-center px-6 py-12 rounded-4xl z-30">
      <h2 className="text-3xl sm:text-4xl md:text-5xl text-white font-bold text-center mt-1 sm:mt-6 mb-2">
        Technical Skills
      </h2>
      <p className="text-white text-center mb-6 sm:mb-10 sm:block">
        <span className="sm:hidden">Tech stack I use</span>
        <span className="hidden sm:inline">
          Here are some of the technologies I work with
        </span>
      </p>

      <div
        className="bg-gray-600 p-6 rounded-xl max-w-5xl w-full 
  grid grid-cols-2 sm:grid-cols-3 gap-4 
  lg:flex lg:flex-wrap lg:justify-center lg:gap-4"
      >
        {skills.map((skill) => (
          <div
            key={skill.name}
            className="flex items-center gap-2 px-4 py-2 bg-white rounded-lg hover:bg-gray-300 cursor-pointer"
          >
            <img
              src={`/icons/${skill.file}`}
              alt={skill.name}
              className="w-6 h-6"
            />
            <span className="text-gray-900 text-sm font-bold">
              {skill.name}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
