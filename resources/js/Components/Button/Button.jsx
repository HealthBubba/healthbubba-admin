import Spinner from "../Spinner";

export default function ({children, className, loading = false, ...props}) {
    return (
      <button className={`btn disabled:opacity-70 ${className}`} {...props} >{children} <Spinner show={loading} /></button>
    )
}
