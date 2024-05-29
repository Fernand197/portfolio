import { useTranslation } from "react-i18next"
import profile from "../assets/images/profile.jpg"
import { contact } from "../data/contact"
import { socials } from "../data/social"
import ContactItem from "./ui/ContactItem"
import { SocialButton } from "./ui/SocialButton"

const Sidebar = () => {
    const { t } = useTranslation()
    return (
        <div className='xl:sticky xl:z-50 top-8 col-span-6 xl:col-span-2 xl:h-screen xl:mb-14'>
            <div className='relative flex items-center rounded-xl justify-center w-full'>
                <div className='w-56 shadow-lg dark:shadow-black h-56 top-0 rounded-xl bg-purple-600 z-10 absolute'>
                    <img src={profile} alt="" className="w-full h-full rounded-xl object-cover object-center" />
                </div>
                <div className='w-full py-10 shadow-lg dark:shadow-black flex-col pt-32 gap-4 mt-32 px-6 flex items-center relative bg-white dark:bg-[#111111] rounded-xl z-0'>
                    <h1 className='text-2xl font-semibold'>Tatchum Fernand Dief</h1>
                    <h2 className='font-bold shadow-lg dark:shadow-black px-5 py-1.5 rounded-lg bg-slate-100 dark:bg-neutral-800'>{t('app.title')}</h2>
                    <div className='flex gap-4'>
                        {socials.map((social: any, i) => <SocialButton key={i} {...social} />)}
                    </div>
                    <div className='bg-slate-100 dark:bg-neutral-800 px-8 py-10 mt-4 w-full rounded-xl gap-3 divide-gray-500 divide-y flex flex-col'>
                        {contact.map((item: any, i) => <ContactItem key={i} {...item} />)}
                    </div>
                    <button className='px-6 shadow-lg py-2 text-lg rounded-full bg-gradient-to-r from-purple-500 to-pink-600'>{t('Download CV')}</button>
                </div>
            </div>

        </div>
    )
}

export default Sidebar
