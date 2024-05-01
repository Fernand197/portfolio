
export const SocialButton = ({ icon, name, url }: any) => {
    return (
        <a href={url} target="_blank" className='bg-slate-100 group flex justify-center items-center hover:bg-gradient-to-r group hover:from-purple-500 hover:to-pink-600 shadow-lg dark:shadow-black dark:bg-neutral-800 rounded-lg h-10 w-10'>
            {icon}
            <span className='sr-only'>{name}</span>
        </a>
    )
}

