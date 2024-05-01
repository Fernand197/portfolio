import { FaFacebookF, FaGithub, FaLinkedinIn, FaXTwitter } from "react-icons/fa6";

export const socials = [
    {
        name: "Github",
        url: "https://github.com/tatchumdev",
        icon: <FaGithub className="h-6 group-hover:text-white w-6" />,
    },
    {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/tatchum-fernand-dief/",
        icon: <FaLinkedinIn className="h-6 group-hover:text-white text-blue-700 w-6" />,
    },
    {
        name: "X",
        url: "https://www.linkedin.com/in/tatchum-fernand-dief/",
        icon: <FaXTwitter className="h-6 group-hover:text-white text-black w-6" />,
    },
    {
        name: "Facebook",
        url: "https://www.linkedin.com/in/tatchum-fernand-dief/",
        icon: <FaFacebookF className="h-6 group-hover:text-white text-blue-700 w-6" />,
    },
]