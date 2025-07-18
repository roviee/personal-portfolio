import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import SaveAltIcon from "@mui/icons-material/SaveAlt";
import { about } from "../portfolio";

const About = () => {
  const { name, role, resume, social } = about;
  const socialIcon =
    "relative text-gray-600 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-700 ml-2 text-2xl after:absolute after:left-0 after:bottom-[-2px] after:h-[2px] after:w-0 after:bg-current after:transition-all after:duration-300 hover:after:w-full";
  return (
    <div className="sticky top-0 h-screen flex items-center justify-center bg-white dark:bg-[#23283e]  z-10">
      <div className="text-center">
        {name && (
          <h1 className="text-[32px] sm:text-[64px] font-bold text-gray-900 dark:text-white">
            Hi, I'm{" "}
            <span className="text-indigo-600 dark:text-indigo-300">{name}</span>
          </h1>
        )}
        {role && (
          <h2 className="text-2xl text-gray-700 dark:text-gray-300 mt-2">
            Aspiring {role}
          </h2>
        )}
        <div className="mt-4 flex items-center justify-center gap-2 sm:gap-3">
          {resume && (
            <a href={resume} download>
              <span className="relative inline-block px-4 py-2 border-2 border-indigo-600 text-indigo-600 dark:border-indigo-300 dark:text-indigo-300 overflow-hidden z-10 group rounded transition-all duration-300 ease-in-out">
                <SaveAltIcon className="absolute left-2 top-1/2 transform -translate-y-1/2 text-indigo-600 dark:text-indigo-300 transition-all duration-300 ease-in-out group-hover:text-white dark:group-hover:text-black" />

                <span className="relative z-20 group-hover:text-white dark:group-hover:text-black transition-colors duration-300 text-[14px] pl-6">
                  Resume
                </span>

                <span className="absolute inset-0 bg-indigo-600 dark:bg-blue-300 z-0 right-full group-hover:right-0 transition-all duration-300 ease-in-out" />
              </span>
            </a>
          )}

          {social && (
            <>
              {social.github && (
                <a
                  href={social.github}
                  aria-label="github"
                  target="_blank"
                  className={socialIcon}
                >
                  <GitHubIcon />
                </a>
              )}
              {social.linkedin && (
                <a
                  href={social.linkedin}
                  aria-label="linkedin"
                  target="_blank"
                  className={socialIcon}
                >
                  <LinkedInIcon />
                </a>
              )}
            </>
          )}
        </div>
        <p className="animate-bounce mt-10 text-gray-600">
          <KeyboardArrowDownIcon />
        </p>
      </div>
    </div>
  );
};

export default About;
