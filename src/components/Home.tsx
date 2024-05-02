import { useTranslation } from "react-i18next"
import Title from "./ui/Title"
import { skills } from "../data/skills"
import Skill from "./ui/Skill"

const Home = () => {
    const { t } = useTranslation()
    return (
        <div className='flex  flex-col gap-10 max-xl:p-6 p-10'>
            <Title>{t('About Me')}</Title>
            <div className='text-neutral-500 leading-relaxed flex flex-col gap-3 dark:text-neutral-400'>
                <p>{t("app.about.first")}</p>
                <p>{t("app.about.second")}</p>
                <p>{t("app.about.third")}</p>
            </div>
            <div className='flex flex-col gap-5'>
                <span className='capitalize font-bold text-4xl'>{t('what i do !')}</span>
                <div className="grid lg:grid-cols-2 gap-8">
                    {skills.map((skill, i) => <Skill key={i} {...skill} />)}
                </div>
            </div>
            {/* <div className='flex flex-col gap-5'>
                <span className='capitalize font-bold text-4xl'>{t('My client !')}</span>
                <div className="grid lg:grid-cols-2 gap-8">
                    {skills.map((skill, i) => <Skill key={i} {...skill} />)}
                </div>
            </div> */}
        </div>
    )
}

export default Home
