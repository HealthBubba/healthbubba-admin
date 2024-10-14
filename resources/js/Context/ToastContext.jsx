import { usePage } from "@inertiajs/react"
import { createContext } from "react"
import { ToastContainer } from "react-toastify"
import { NotificationsProvider } from "reapop"

const ToastContext = createContext()

export default ({children })  => {

    const { props } = usePage()

    return (
        <>
            {children}

            <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
                transition='Bounce'
            />
        </>
    )
}