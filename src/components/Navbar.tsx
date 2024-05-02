import { useState } from 'react';
import { FiMenu, FiMoon, FiSun } from 'react-icons/fi';
import { RiCloseFill } from 'react-icons/ri';
import { Link, useLocation } from 'react-router-dom';
import english from '../assets/images/english.png';
import french from '../assets/images/french.png';
import { navItems } from '../data/nav-items';
import { useLocale } from '../hooks/useLocale';
import { useTheme } from '../hooks/useTheme';
import { useTranslation } from 'react-i18next';

const Navbar = () => {
    const { getTheme, setTheme }: any = useTheme();
    const [showNav, setShowNav] = useState(false);
    const { t } = useTranslation()
    const { setLocale, getLocale } = useLocale();
    const location = useLocation();
    const activeClass = (url: string) => location.pathname === url ? 'text-white bg-gradient-to-r from-purple-500 to-pink-600' : 'text-neutral-500 dark:text-neutral-400';

    const handleTheme = () => {
        if (getTheme() === "dark") {
            setTheme('light')
        } else {
            setTheme('dark')
        }
    }
    return (
        <header className='px-4 xl:px-32 xl:pt-14 py-6 max-xl:bg-slate-100 max-xl:sticky top-0 z-30 dark:max-xl:bg-[#111111]'>
            <nav className='flex justify-between items-center'>
                <h1 className='text-4xl font-bold text-transparent bg-gradient-to-r from-purple-500 to-pink-600 bg-clip-text'>{t('My portfolio')}</h1>
                <div className="inline-flex gap-5">
                    <button onClick={() => {
                        setLocale(getLocale() === 'en' ? 'fr' : 'en')
                    }} className='h-10 w-10 bg-white text-black flex justify-center hover:text-white hover:bg-gradient-to-r hover:from-purple-500 hover:to-pink-600 items-center rounded-full'>
                        {getLocale() === 'en'
                            ? <img src={french} className='h-6 w-6' />
                            : <img src={english} className='h-6 w-6' />
                        }
                    </button>
                    <button onClick={handleTheme} className='h-10 w-10 bg-white text-black flex justify-center hover:text-white hover:bg-gradient-to-r hover:from-purple-500 hover:to-pink-600 items-center rounded-full'>
                        {getTheme() == "dark"
                            ? <FiSun className='h-6 w-6' />
                            : <FiMoon className='h-6 w-6' />
                        }
                    </button>
                    <button onClick={() => setShowNav(!showNav)} className='h-10 w-10 xl:hidden bg-white text-black flex justify-center hover:text-white hover:bg-gradient-to-r hover:from-purple-500 hover:to-pink-600 items-center rounded-full'>
                        {showNav ? <RiCloseFill className='h-6 w-6' /> :
                            <FiMenu className='h-6 w-6' />
                        }
                    </button>
                </div>
            </nav>
            <div className='w-full relative'>
                <div hidden={!showNav} className='bg-slate-100 absolute rounded-xl p-4 dark:bg-[#111111] z-20 w-full mt-8'>
                    {
                        navItems.map((item) =>
                            <Link to={item.url} className={'rounded-xl text-sm hover:text-white shadow-l hover:bg-gradient-to-r hover:from-purple-500 hover:to-pink-600 flex px-4 py-2 items-center gap-2' + activeClass(item.url)}>
                                <span>
                                    {item.icon}
                                </span>
                                <span className='pl-2'>{item.title}</span>
                            </Link>
                        )
                    }
                </div>
            </div>
        </header>
    )
}

export default Navbar
