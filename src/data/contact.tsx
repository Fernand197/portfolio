import { FaCalendarAlt } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { MdOutlineAlternateEmail } from "react-icons/md";
import { SlScreenSmartphone } from "react-icons/sl";

export const contact = [
    {
        name: "Email",
        icon: <MdOutlineAlternateEmail className="h-6 w-6 group-hover:text-white text-purple-400" />,
        content: <a href="mailto:tatchumf@gmail.com" className="hover:bg-gradient-to-r hover:from-purple-500 hover:to-pink-600 hover:bg-clip-text hover:text-transparent">tatchumf@gmail.com</a>,
    },
    {
        name: "Phone",
        icon: <SlScreenSmartphone className="text-pink-500 h-6 w-6 group-hover:text-white" />,
        content: <a href="tel:+237655672523" className="hover:bg-gradient-to-r hover:from-purple-500 hover:to-pink-600 hover:bg-clip-text hover:text-transparent">+237 655672523</a>,
    },
    {
        name: "Location",
        icon: <FaLocationDot className="h-6 text-blue-400 w-6 group-hover:text-white" />,
        content: "Douala, Cameroon",
    },
    {
        name: "Birthday",
        icon: <FaCalendarAlt className="h-6 w-6 group-hover:text-white text-green-500" />,
        content: "May 21, 2000",
    },
]