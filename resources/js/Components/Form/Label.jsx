export default function ({className, children, ...props}) {
    return (
        <label className={`form-label text-sm ${className}`} {...props} >
            {children}
        </label>
    )
}
