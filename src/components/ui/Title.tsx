
const Title = ({ children }: any) => {
    return (
        <div className='flex max-sm:flex-col sm:items-center gap-5'>
            <span className='capitalize max-sm:text-4xl text-5xl font-bold'>{children}</span>
            <div className='h-1 w-56 rounded-full bg-gradient-to-r from-purple-500 to-pink-600'></div>
        </div>
    )
}

export default Title
