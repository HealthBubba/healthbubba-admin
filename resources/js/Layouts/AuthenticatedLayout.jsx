import Header from './Partials/Dashboard/Header';
import Sidebar from './Partials/Dashboard/Sidebar';
import 'react-toastify/dist/ReactToastify.css';
import ToastContext from '@/Context/ToastContext';
import { Bounce, ToastContainer } from 'react-toastify';

export default function DashboardLayout ({ children, title }) {
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

                    <main className="h-full md:ms-[22%] w-full md:flex-1">
                        <Header title={title} />

                        <div className="md:p-5 p-2">
                            {children}
                        </div>
                    </main>
                </div>
            </div>
        
            <ToastContext />
        </>
    );
}
