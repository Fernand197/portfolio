import { useTranslation } from 'react-i18next'
import Title from './ui/Title'

const Works = () => {
    const { t } = useTranslation()
    return (
        <div className='flex flex-col gap-10 max-xl:p-6 p-10'>
            <Title>{t('Works')}</Title>
        </div>
    )
}

export default Works
