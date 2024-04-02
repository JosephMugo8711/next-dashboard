'use client';

import { SidebarItems } from "@/types";
import { Sheet, SheetClose, SheetContent, SheetHeader, SheetTrigger } from "./ui/sheet";
import { Button } from "./ui/button";
import { Menu, X } from "lucide-react";

interface SidebarMobileProps {
    sidebarItems: SidebarItems;
}

export function SidebarMobile(props: SidebarMobileProps){
    return(

        <Sheet>
            <SheetTrigger asChild>
                <Button size='icon' variant='ghost' className="fixed top-3 left-3">
                    <Menu  size={20}/>
                </Button>
            </SheetTrigger>
            <SheetContent side='left' className="px-3 py-4" hideClose>
                <SheetHeader className="flex flex-row justify-between items-center space-y-0">
                    <span className="text-lg font-semibold text-foreground mx-3">
                        Twitter
                    </span>
                    <SheetClose asChild>
                        <Button className="h-7 w-7 p-0"  variant='ghost'>
                            <X  size={15}/>
                        </Button>
                    </SheetClose>
                </SheetHeader>
            </SheetContent>
        </Sheet>

    )
}