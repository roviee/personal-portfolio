import ProjectContainer from "./ProjectContainer.jsx";
import { projects } from "../portfolio.js";
const Project = () => {
  return (
   <div className="sticky top-0 h-[100dvh] z-20 bg-gray-100 rounded-4xl">
      <div className="overflow-y-auto h-full flex flex-col items-center px-6 py-12">
        <h2 className="text-3xl sm:text-4xl md:text-5xl gray-600 font-bold text-center mt-1 sm:mt-6 mb-2">Featured Projects</h2>
        <p className="text-gray-600 mb-6">Check out some of my recent work</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
          {projects.map((project, index) => (
            <ProjectContainer key={index} project={project} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Project;
