import { usePage } from "@inertiajs/react"
import { createContext, useEffect } from "react"
import { toast, ToastContainer } from "react-toastify"

export default ()  => {
    const { props } = usePage()

    useEffect(() => {
        if(props.toast){
            if(props.toast.status == 'success') toast.success(props.toast.message)
            if(props.toast.status == 'error') toast.success(props.toast.message)
            if(props.toast.status == 'info') toast.success(props.toast.message)
            if(props.toast.status == 'warn') toast.success(props.toast.message)
        }
    }, [props.toast])

    return null
}