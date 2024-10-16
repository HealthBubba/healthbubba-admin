export default function ({className, children, ...props}) {
    return (
        <label className={`form-label ${className}`} {...props} >
            {children}
        </label>
    )
}
