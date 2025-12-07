import Avatar from "./avatar";
import { FiBell } from "react-icons/fi";

export default function Topbar() {
    return (
        <header className="h-14 border-b border-neutral-200 bg-white flex items-center justify-between px-6">

            <input
                placeholder="Search..."
                className="border border-neutral-200 rounded-md px-3 py-1 text-sm w-60 focus:ring-1 focus:ring-neutral-400"
            />

            <div className="flex items-center gap-4">
                <FiBell size={20} className="cursor-pointer" />
                <Avatar size={32} />
            </div>

        </header>
    );
}