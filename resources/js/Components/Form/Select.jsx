export default function ({children, className, ...props}) {
    return (
        <div className="">
            <select className={`rounded-[8px] border border-[#F3F3F3] shadow-inner text-gray-500 w-full ${className}`} {...props} >
                {children}
            </select>
        </div>
    )
}
