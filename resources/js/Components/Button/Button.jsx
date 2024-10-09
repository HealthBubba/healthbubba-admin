export default function ({children, className, ...props}) {
    return (
      <button className={`btn disabled:opacity-70 ${className}`} {...props} >{children}</button>
    )
}
