import { header } from "../portfolio";
import { contact } from "../portfolio";
import { about } from "../portfolio";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
const Footer = () => {
  const { social } = about;
   const socialIcon =
    "relative text-white dark:text-gray-300 hover:text-gray-300 dark:hover:text-indigo-700 ml-2 text-2xl after:absolute after:left-0 after:bottom-[-2px] after:h-[2px] after:w-0 after:bg-current after:transition-all after:duration-300 hover:after:w-full";
  return (
    <footer className="sticky bottom-0 bg-gray-800 text-white px-7 py-8 z-1">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-4">
        {/* Left: Name or Logo */}
        <div className="text-center sm:text-left">
          <h3 className="text-xl font-bold">{header.title}</h3>
          <p className="text-sm text-gray-400">
            © {new Date().getFullYear()} All rights reserved.
          </p>
        </div>

        {/* Right: Contact Info */}
        <div className="text-center sm:text-right space-y-1 text-sm">
          <p>
            Email:{" "}
            <a
              href="mailto:your@email.com"
              className="text-gray-300 hover:underline"
            >
              {contact.email}
            </a>
          </p>
          <p>
            Phone: <span className="text-gray-300">{contact.phone}</span>
          </p>
          <div className="flex justify-center sm:justify-end gap-3 pt-1">
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
        </div>
      </div>
    </footer>
  );
};
export default Footer;
