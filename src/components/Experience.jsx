import { experience } from "../portfolio";

const Experience = () => {
  return (
     <div className="relative lg:sticky lg:top-0 lg:h-screen z-40 bg-white flex flex-col items-center px-6 py-12">
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800 text-center mt-6 mb-4">
        Experience
      </h2>

      <div className="max-w-4xl w-full space-y-6">
        {experience.map((item, index) => (
          <div
            key={index}
            className="bg-gray-100 p-6 rounded-xl shadow-md"
          >
            <h3 className="text-xl font-semibold text-gray-800 mb-1">
              {item.role}
            </h3>
            <p className="text-sm text-gray-600 italic mb-2">
              {item.company} — {item.duration}
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-1 text-sm sm:text-base">
              {item.description.map((point, idx) => (
                <li key={idx}>{point}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};
export default Experience;
