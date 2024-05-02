import { useTranslation } from "react-i18next"

const Skill = ({ name, icon, content }: any) => {
    const { t } = useTranslation()
    return (
        <div className='bg-slate-100 dark:bg-inherit flex gap-3 p-6 text-justify border dark:border-slate-800 rounded-xl'>
            <div className='bg-white flex items-center justify-center shadow-md dark:shadow-gray-950 dark:bg-neutral-800 rounded-lg h-10 w-10'>
                {icon}
            </div>
            <div className='flex flex-col gap-3 w-4/5'>
                <span className='font-bold text-2xl'>{t(name)}</span>
                <p className='text-neutral-500 dark:text-neutral-400 text-left leading-relaxed'>{t(content)}</p>
            </div>
        </div>
    )
}

export default Skill
