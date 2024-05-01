/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect } from 'react'
import '../App.css'
import Navbar from './Navbar'
import { useTheme } from '../hooks/useTheme'
import Sidebar from './Sidebar';
import { navItems } from '../data/nav-items';
import NavButton from './ui/NavButton';

function Layout({ children }: any) {
    const { setTheme, getTheme }: any = useTheme();
    useEffect(() => {
        setTheme(getTheme())
    }, [getTheme, setTheme])
    return (
        <>
            <Navbar />
            <div className='grid grid-cols-6 gap-12 py-24 px-4 xl:px-32'>
                <Sidebar />
                <div className='col-span-6 xl:col-span-4 xl:mt-32 flex flex-col gap-12'>
                    <div className='shadow-lg dark:shadow-black hidden xl:flex self-end gap-5 bg-white w-auto px-10 py-6 rounded-xl dark:bg-[#111111]'>
                        {
                            navItems.map((item) => <NavButton {...item} />)
                        }
                    </div>
                    <div className='shadow-lg flex flex-col justify-between dark:shadow-black bg-white dark:bg-[#111111] w-full rounded-xl'>
                        {children}
                        <div className='content-end bottom-0 bg-slate-100 dark:bg-black dark:text-white text-center py-8 rounded-b-xl'>
                            © {new Date().getFullYear()} All Rights Reserved by Fernand Tatchum.
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Layout
