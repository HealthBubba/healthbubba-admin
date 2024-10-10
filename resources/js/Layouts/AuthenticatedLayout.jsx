import Header from './Partials/Dashboard/Header';
import Sidebar from './Partials/Dashboard/Sidebar';

export default function DashboardLayout ({ children, title }) {
    return (
        <div className="min-h-screen flex bg-[#FAFAFB]">
            <div className="w-full flex ">
                <aside className="w-1/5 h-full">
                    <Sidebar />
                </aside>

                <main className="h-full flex-1">
                    <Header title={title} />

                    <div className="p-5">
                        {children}
                    </div>
                </main>
            </div>
        </div>
    );
}
