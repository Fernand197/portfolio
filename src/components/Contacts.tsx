import { useTranslation } from 'react-i18next'
import { contact } from '../data/contact'
import Title from './ui/Title'

const Contacts = () => {
    const { t } = useTranslation()
    return (
        <div className='flex flex-col gap-10 max-xl:p-6 p-10'>
            <Title>{t('Contacts')}</Title>
            <div className='flex max-sm:flex-col gap-5'>
                <div className='flex flex-col gap-4'>
                    <div className='flex gap-3'>
                        <span className='dark:text-neutral-400 text-neutral-500'>
                            {t('Email')} :
                        </span>
                        {contact[0].content}
                    </div>
                    <div className='flex gap-3'>
                        <span className='dark:text-neutral-400 text-neutral-500'>
                            {t('Phone')} :
                        </span>
                        {contact[1].content}
                    </div>
                </div>
                <div>
                    <input className='rounded-xl px-4 py-2 border dark:border-neutral-800 focus:ring-0 bg-transparent focus:ring-offset-0 focus:border-none' />
                </div>
            </div>
        </div>
    )
}

export default Contacts
