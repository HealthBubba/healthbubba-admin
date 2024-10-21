import Header from './Partials/Dashboard/Header';
import Sidebar from './Partials/Dashboard/Sidebar';
import 'react-toastify/dist/ReactToastify.css';
import ToastContext from '@/Context/ToastContext';
import { Bounce, ToastContainer } from 'react-toastify';
import { useEffect, useRef, useState } from 'react';
import Disclose from '@/Components/Disclose';

export default function DashboardLayout ({ children, title }) {

    const [show, setShow] = useState(false)

    const ref = useRef(null)

    // const hide = (e) => {
    //     // if(show && !e.target?.contains(ref.current)) setShow(false)
    // }

    // useEffect(() => {
    //     if(show) document.addEventListener('click', hide)
    //     return document.removeEventListener('click', hide)
    // }, [show])

    return (
        <>
            <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss={false}
                draggable
                pauseOnHover={false}
                theme="dark"
                transition={Bounce}
            />

            <div className="min-h-screen flex bg-[#FAFAFB]">
                <div className="w-full md:flex ">
                    <aside className="md:w-[22%] hidden md:block  fixed bottom-0 top-0">
                        <Sidebar />
                    </aside>

                    <Disclose show={show} >
                        <div ref={ref} className="w-5/6 h-full fixed md:hidden bottom-0 top-0 z-[99999]">
                            <Sidebar />
                        </div>
                    </Disclose>

                    <main className="h-full md:ms-[22%] w-full md:flex-1 pb-10">
                        <Header open={setShow} title={title} />

                        <div className="md:p-5 p-2 ">
                            {children}
                        </div>
                    </main>
                </div>
            </div>
        
            <ToastContext />
        </>
    );
}
