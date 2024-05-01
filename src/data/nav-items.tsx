import { CiViewList } from "react-icons/ci";
import { FiHome } from "react-icons/fi";
import { PiCube } from "react-icons/pi";
import { RiContactsBookLine } from "react-icons/ri";

export const navItems = [
    {
        title: "Home",
        icon: <FiHome className="h-6 w-6" />,
        url: "/"
    },
    {
        title: "Resume",
        icon: <CiViewList className="h-6 w-6" />,
        url: "/resume"
    },
    {
        title: "Works",
        icon: <PiCube className="h-6 w-6" />,
        url: "/works"
    },
    {
        title: "Contacts",
        icon: <RiContactsBookLine className="h-6 w-6" />,
        url: "/contacts"
    }
]