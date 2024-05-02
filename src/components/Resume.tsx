import { FaBriefcase } from 'react-icons/fa'
import { IoSchoolSharp } from 'react-icons/io5'
import Title from './ui/Title'
import { useTranslation } from 'react-i18next'
import { resume } from '../data/resume'

const Resume = () => {
    const { t } = useTranslation()
    return (
        <div className='flex flex-col gap-10 max-xl:p-6 p-10'>
            <Title>Resume</Title>
            <div className='grid lg:grid-cols-2 gap-10'>
                <div className='flex flex-col gap-8'>
                    <span className='capitalize inline-flex gap-4 items-center font-bold text-3xl'>
                        <span>
                            <IoSchoolSharp className='h-6 w-6 text-purple-500' />
                        </span>
                        <span>{t('Education')}</span>
                    </span>
                    <div className='flex flex-col gap-5'>
                        {resume.education.map((edu, i) => (
                            <div key={i} className='flex flex-col gap-1 border rounded-xl p-6'>
                                <span className='font-bold text-xl'>{t(edu.degree)}</span>
                                <span className='text-neutral-500 font-semibold dark:text-neutral-400 text-left leading-relaxed'>{t(edu.subject)}</span>
                                <span className='text-neutral-500 dark:text-neutral-400 text-left leading-relaxed'>{t(edu.school)}</span>
                                <span className='text-neutral-500 dark:text-neutral-400 text-left leading-relaxed'>{t(edu.date)}</span>
                            </div>
                        ))}
                    </div>
                </div>
                <div className='flex flex-col gap-8'>
                    <span className='capitalize inline-flex gap-4 items-center font-bold text-3xl'>
                        <span>
                            <FaBriefcase className='h-6 w-6 text-pink-600' />
                        </span>
                        <span>{t('Experience')}</span>
                    </span>
                    <div className='flex flex-col gap-5'>
                        {resume.experience.map((exp, i) => (
                            <div key={i} className='flex flex-col gap-1 border rounded-xl p-6'>
                                <span className='font-bold text-xl'>{t(exp.position)}</span>
                                <span className='text-neutral-500 font-semibold dark:text-neutral-400 text-left leading-relaxed'>{t(exp.company)}</span>
                                <span className='text-neutral-500 dark:text-neutral-400 text-left leading-relaxed'>{t(exp.location) + ', ' + t("Douala, Cameroon")}</span>
                                <span className='text-neutral-500 dark:text-neutral-400 text-left leading-relaxed'>{t(exp.date)}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <div className='grid lg:grid-cols-2 gap-10'>
                <div className='flex flex-col gap-8'>
                    <span className='capitalize inline-flex gap-4 items-center font-bold text-3xl'>
                        <span>{t('Working Skills')}</span>
                    </span>
                    <div className="flex flex-wrap gap-3">
                        {resume.skills.map((skill, i) => (
                            <div key={i} className='bg-slate-100 dark:bg-neutral-800 hover:bg-gradient-to-r hover:from-purple-500 hover:to-pink-600 flex gap-3 p-6 text-justify border dark:border-slate-800 rounded-xl'>
                                {skill.icon}
                            </div>
                        ))}
                    </div>
                </div>
                <div className='flex flex-col gap-8'>
                    <div className='flex flex-col gap-5'>
                        <span className='capitalize inline-flex gap-4 items-center font-bold text-3xl'>
                            <span>{t('Languages')}</span>
                        </span>
                        <div className='flex flex-col gap-5'>
                            <div className='flex flex-col gap-4'>
                                <span>{t('French')}</span>
                                <div className='h-1 w-full bg-slate-100 dark:bg-neutral-800'>
                                    <div className='w-4/5 h-1 bg-gradient-to-r from-purple-500 to-pink-600 rounded-full'></div>
                                </div>
                            </div>
                            <div className='flex flex-col gap-4'>
                                <span>{t('English')}</span>
                                <div className='h-1 w-full bg-slate-100 dark:bg-neutral-800'>
                                    <div className='w-1/2 h-1 bg-gradient-to-r from-purple-500 to-pink-600 rounded-full'></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='flex flex-col gap-5'>
                        <span className='capitalize inline-flex gap-4 items-center font-bold text-3xl'>
                            <span>{t('Personal Skills')}</span>
                        </span>
                        <div className="flex flex-wrap gap-3">
                            {resume.personalSkills.map((skill, i) => (
                                <div key={i} className='bg-slate-100 dark:bg-neutral-800 hover:bg-gradient-to-r hover:from-purple-500 hover:to-pink-600 flex px-4 py-2 text-justify border dark:border-slate-800 rounded-xl'>
                                    {t(skill.name)}
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className='flex flex-col gap-5'>
                        <span className='capitalize inline-flex gap-4 items-center font-bold text-3xl'>
                            <span>{t('Softwares')}</span>
                        </span>
                        <div className="flex flex-wrap gap-3">
                            {resume.softwares.map((soft, i) => (
                                <div key={i} className='bg-slate-100 dark:bg-neutral-800 hover:bg-gradient-to-r hover:from-purple-500 hover:to-pink-600 flex px-4 py-2 text-justify border dark:border-slate-800 rounded-xl'>
                                    {soft.icon}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Resume
