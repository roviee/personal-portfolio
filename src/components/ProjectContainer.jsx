import GitHubIcon from "@mui/icons-material/GitHub";
import LaunchIcon from '@mui/icons-material/Launch';
const ProjectContainer = ({ project }) => {
const { image, name, description, stack, sourceCode, livePreview } = project;
const socialIcon = "relative text-gray-600 dark:text-gray-300 hover:text-indigo-700 dark:hover:text-indigo-300 ml-2 text-2xl after:absolute after:left-0 after:bottom-[-2px] after:h-[2px] after:w-0 after:bg-current after:transition-all after:duration-300 hover:after:w-full";

return (
    <div className=" bg-white overflow-hidden shadow pb-10 flex flex-col relative group transform transition-transform duration-300 hover:scale-105 hover:shadow-xl" >
        <div className="relative">
            <img
                src={image}
                alt={`Project`}
                className="w-full h-36 object-cover flex-shrink-0"
            />
            <div className="absolute inset-0 bg-black opacity-50 group-hover:opacity-0 transition-opacity duration-300"></div>
        </div>
        <div className="p-4 flex flex-col flex-grow">
            <h3 className="text-lg font-semibold text-gray-800">
                {name}
            </h3>
            <p className="text-sm text-gray-600 flex-grow overflow-y-auto">
                {description}
            </p>
            <div className="flex flex-col gap-2 justify-center items-center mt-4">
                <div className="flex flex-wrap justify-center gap-2">
                    {stack.map((tech, index) => (
                        <span
                            key={index}
                            className="text-xs bg-gray-200 text-gray-700 px-2 py-1 rounded-full"
                        >
                            {tech}
                        </span>
                    ))}
                </div>
                <div className="flex space-x-2">
                    <a
                        href={sourceCode}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={socialIcon}
                    >
                       <GitHubIcon />
                    </a>
                    <a
                        href={livePreview}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={socialIcon}
                    >
                        <LaunchIcon />
                    </a>
                </div>
            </div>
        </div>
    </div>
);
};

export default ProjectContainer;
