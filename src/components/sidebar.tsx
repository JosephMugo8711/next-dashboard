import { Home } from "lucide-react"
import { SidebarButton } from "./sidebar-button"

export function Sidebar(){
    return(
        <aside className="w-[270px] max-w-xs h-screen fixed left-0 top-0 z-40 border-r">
            <div className="h-full px-3 py-4">
                <h3 className="mx-3 text-lg font-semibold text-foreground">
                    Freedashboard
                </h3>
                <div className="mt-5">
                    <div className="flex flex-col gap-1 w-full">
                        <SidebarButton icon={Home}>
                            Home
                        </SidebarButton>
                    </div>

                </div>

            </div>

        </aside>
    )
}