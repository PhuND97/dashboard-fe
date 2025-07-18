import { Outlet } from 'react-router-dom';

export default function MainLayout() {
    return (
        <div className="flex min-h-screen">
            {/* Sidebar */}
            <aside className="w-64 bg-gray-800 text-white p-4">
                <h1 className="text-xl font-bold mb-4">GitHub Metrics</h1>
                <nav className="flex flex-col gap-2">
                    <a href="/dashboard">Dashboard</a>
                </nav>
            </aside>

            {/* Main content */}
            <div className="flex-1 bg-gray-100 p-6">
                <header className="mb-4">
                    <h2 className="text-2xl font-semibold">Topbar</h2>
                </header>
                <main>
                    <Outlet />
                </main>
            </div>
        </div>
    );
}
