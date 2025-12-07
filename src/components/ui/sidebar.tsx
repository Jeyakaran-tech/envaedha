"use client";
import { useState } from "react";
import { FiHome, FiUser, FiSettings, FiChevronLeft, FiChevronRight } from "react-icons/fi";

export default function Sidebar() {
    const [collapsed, setCollapsed] = useState(false);

    return (
        <aside
            className={`h-screen border-r border-neutral-200 bg-white transition-all duration-300
        ${collapsed ? "w-16" : "w-60"}`}
        >
            {/* Header */}
            <div className="flex items-center justify-between p-4">
                {!collapsed && <span className="font-semibold text-lg">Envaedha</span>}
                <button onClick={() => setCollapsed(!collapsed)}>
                    {collapsed ? <FiChevronRight /> : <FiChevronLeft />}
                </button>
            </div>

            {/* Nav Items */}
            <nav className="mt-6 flex flex-col gap-1 px-2">
                <SidebarItem icon={<FiHome size={18} />} label="Dashboard" collapsed={collapsed} />
                <SidebarItem icon={<FiUser size={18} />} label="Clients" collapsed={collapsed} />
                <SidebarItem icon={<FiSettings size={18} />} label="Settings" collapsed={collapsed} />
            </nav>
        </aside>
    );
}

function SidebarItem({ icon, label, collapsed }: { icon: React.ReactNode; label: string; collapsed: boolean }) {
    return (
        <div className="flex items-center gap-3 cursor-pointer p-2 rounded-md hover:bg-neutral-100 text-sm font-medium">
            {icon}
            {!collapsed && <span>{label}</span>}
        </div>
    );
}