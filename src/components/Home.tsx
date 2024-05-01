import Title from "./ui/Title"

const Home = () => {
    return (
        <div className='flex flex-col gap-10 max-xl:p-6 p-10'>
            <Title>About Me</Title>
            <div className='text-slate-500 leading-relaxed flex flex-col gap-3 dark:text-gray-400'>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quisquam, enim. Sint natus excepturi perferendis aut distinctio doloribus, fugiat nostrum placeat quis mollitia recusandae similique quia totam explicabo quos repudiandae repellat.</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor, sunt amet accusamus dolorum, molestiae doloremque aliquam reiciendis assumenda tenetur repellat veritatis sed delectus repudiandae quaerat. Quisquam distinctio sint aut fuga.</p>
            </div>
            <div className='flex flex-col gap-5'>
                <span className='capitalize font-bold text-4xl'>what i do !</span>
                <div className="grid lg:grid-cols-2 gap-8">
                    <div className='bg-slate-100 dark:bg-inherit flex gap-3 p-6 text-justify border dark:border-slate-800 rounded-xl'>
                        <div className='bg-white shadow-md dark:shadow-gray-950 dark:bg-gray-700/40 rounded-lg h-10 w-10'></div>
                        <div className='flex flex-col gap-3 w-4/5'>
                            <span className='font-bold text-2xl'>Frontend Dev</span>
                            <p className='text-gray-400'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odit qui soluta minus ullam beatae molestiae iusto dol.</p>
                        </div>
                    </div>
                    <div className='bg-slate-100 dark:bg-inherit flex gap-3 p-6 text-justify border dark:border-slate-800 rounded-xl'>
                        <div className='bg-white shadow-md dark:shadow-gray-950 dark:bg-gray-700/40 rounded-lg h-10 w-10'></div>
                        <div className='flex flex-col gap-3 w-4/5'>
                            <span className='font-bold text-2xl'>Backend Dev</span>
                            <p className='text-gray-400'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odit qui soluta minus ullam beatae molestiae iusto dol.</p>
                        </div>
                    </div>
                    <div className='bg-slate-100 dark:bg-inherit flex gap-3 p-6 text-justify border dark:border-slate-800 rounded-xl'>
                        <div className='bg-white shadow-md dark:shadow-gray-950 dark:bg-gray-700/40 rounded-lg h-10 w-10'></div>
                        <div className='flex flex-col gap-3 w-4/5'>
                            <span className='font-bold text-2xl'>Api Dev</span>
                            <p className='text-gray-400'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odit qui soluta minus ullam beatae molestiae iusto dol.</p>
                        </div>
                    </div>
                    <div className='bg-slate-100 dark:bg-inherit flex gap-3 p-6 text-justify border dark:border-slate-800 rounded-xl'>
                        <div className='bg-white shadow-md dark:shadow-gray-950 dark:bg-gray-700/40 rounded-lg h-10 w-10'></div>
                        <div className='flex flex-col gap-3 w-4/5'>
                            <span className='font-bold text-2xl'>Mobile Dev</span>
                            <p className='text-gray-400'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odit qui soluta minus ullam beatae molestiae iusto dol.</p>
                        </div>
                    </div>
                    <div className='bg-slate-100 dark:bg-inherit flex gap-3 p-6 text-justify border dark:border-slate-800 rounded-xl'>
                        <div className='bg-white shadow-md dark:shadow-gray-950 dark:bg-gray-700/40 rounded-lg h-10 w-10'></div>
                        <div className='flex flex-col gap-3 w-4/5'>
                            <span className='font-bold text-2xl'>Mobile Dev</span>
                            <p className='text-gray-400'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odit qui soluta minus ullam beatae molestiae iusto dol.</p>
                        </div>
                    </div>
                    <div className='bg-slate-100 dark:bg-inherit flex gap-3 p-6 text-justify border dark:border-slate-800 rounded-xl'>
                        <div className='bg-white shadow-md dark:shadow-gray-950 dark:bg-gray-700/40 rounded-lg h-10 w-10'></div>
                        <div className='flex flex-col gap-3 w-4/5'>
                            <span className='font-bold text-2xl'>Mobile Dev</span>
                            <p className='text-gray-400'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odit qui soluta minus ullam beatae molestiae iusto dol.</p>
                        </div>
                    </div>
                    <div className='bg-slate-100 dark:bg-inherit flex gap-3 p-6 text-justify border dark:border-slate-800 rounded-xl'>
                        <div className='bg-white shadow-md dark:shadow-gray-950 dark:bg-gray-700/40 rounded-lg h-10 w-10'></div>
                        <div className='flex flex-col gap-3 w-4/5'>
                            <span className='font-bold text-2xl'>Mobile Dev</span>
                            <p className='text-gray-400'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odit qui soluta minus ullam beatae molestiae iusto dol.</p>
                        </div>
                    </div>
                    <div className='bg-slate-100 dark:bg-inherit flex gap-3 p-6 text-justify border dark:border-slate-800 rounded-xl'>
                        <div className='bg-white shadow-md dark:shadow-gray-950 dark:bg-gray-700/40 rounded-lg h-10 w-10'></div>
                        <div className='flex flex-col gap-3 w-4/5'>
                            <span className='font-bold text-2xl'>Mobile Dev</span>
                            <p className='text-gray-400'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odit qui soluta minus ullam beatae molestiae iusto dol.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home
