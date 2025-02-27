export default function ({children, className, ...props}) {
    return (
        <div >
            <select className={`rounded-[8px] border border-gray-100 shadow-sm shadow-black/5 text-gray-500 w-full ${className}`} {...props} >
                {children}
            </select>
        </div>
    )
}
