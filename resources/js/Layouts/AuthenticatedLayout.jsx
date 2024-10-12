import Header from './Partials/Dashboard/Header';
import Sidebar from './Partials/Dashboard/Sidebar';

export default function DashboardLayout ({ children, title }) {
    return (
        <div className="min-h-screen flex bg-[#FAFAFB]">
            <div className="w-full flex ">
                <aside className="w-[22%] fixed bottom-0 top-0">
                    <Sidebar />
                </aside>

                <main className="h-full ms-[22%] flex-1">
                    <Header title={title} />

                    <div className="p-5">
                        {children}
                    </div>
                </main>
            </div>
        </div>
    );
}
