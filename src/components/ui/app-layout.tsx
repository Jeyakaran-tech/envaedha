import Sidebar from "./sidebar";
import Topbar from "./topbar";

export default function AppLayout({ children }: { children: React.ReactNode }) {
    return (
        <div className="flex h-screen w-full">
            <Sidebar />

            <div className="flex flex-col flex-1">
                <Topbar />
                <main className="flex-1 bg-neutral-50 p-6 overflow-auto">
                    {children}
                </main>
            </div>
        </div>
    );
}