export default function ({className, children, ...props}) {
    return (
        <label className={`text-gray-700 font-semibold text-sm mb-1 ${className}`} {...props} >
            {children}
        </label>
    )
}
