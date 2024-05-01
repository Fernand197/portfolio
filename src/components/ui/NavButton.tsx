import { Link, useLocation } from "react-router-dom"

const NavButton = ({ title, icon, url }: any) => {
    const location = useLocation();
    const activeClass = location.pathname === url ? 'text-white bg-gradient-to-r from-purple-500 to-pink-600' : 'text-neutral-500 dark:text-neutral-400 dark:bg-neutral-800 bg-slate-100';
    return (
        <Link to={url} className={'rounded-xl h-20 text-sm hover:text-white w-20 shadow-lg hover:bg-gradient-to-r hover:from-purple-500 hover:to-pink-600 flex justify-center items-center gap-1 flex-col text-center' + activeClass}>
            <span>
                {icon}
            </span>
            <span>{title}</span>
        </Link>
    )
}

export default NavButton
