import { FaFacebookF, FaGithub, FaLinkedinIn, FaXTwitter } from "react-icons/fa6";

export const socials = [
    {
        name: "Github",
        url: "https://github.com/Fernand197",
        icon: <FaGithub className="h-6 group-hover:text-white w-6" />,
    },
    {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/fernand-dief-tatchum-27050a202",
        icon: <FaLinkedinIn className="h-6 group-hover:text-white text-blue-700 w-6" />,
    },
    {
        name: "X",
        url: "#",
        icon: <FaXTwitter className="h-6 group-hover:text-white text-black w-6" />,
    },
    {
        name: "Facebook",
        url: "#",
        icon: <FaFacebookF className="h-6 group-hover:text-white text-blue-700 w-6" />,
    },
]