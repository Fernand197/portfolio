import { useTranslation } from "react-i18next"

const ContactItem = ({ name, content, icon }: any) => {
    const { t } = useTranslation()
    return (
        <div className='flex gap-3 items-center pt-3 first:pt-0'>
            <div className='bg-white shadow-md hover:bg-gradient-to-r group hover:from-purple-500 hover:to-pink-600 dark:shadow-gray-950 dark:bg-black flex items-center justify-center rounded-lg h-10 w-10'>
                {icon}
            </div>
            <div className='flex flex-col'>
                <span className='text-neutral-500 text-sm'>{t(name)}</span>
                {typeof content === "string" ? t(content) : content}
            </div>
        </div>
    )
}

export default ContactItem
