import { NavMenu, SideMenu } from "@/modules/shared"

export default function AdminLayout({ children }: { children: React.ReactNode }) {
    return (
        <div className="admin__layout">
            <SideMenu/>

            <main className="admin__layout--main">
                <NavMenu/>
                { children }
            </main>

        </div>
    );
}