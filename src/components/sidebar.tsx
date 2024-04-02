'use client'

import { Bell, Bookmark, Home, List, Mail, User, Users } from "lucide-react"
import { SidebarDesktop } from "./sidebar-desktop"
import { SidebarItems } from "@/types"


const sidebarItems: SidebarItems = {
    links: [
      {label: 'Home', href: '/', icon: Home},
      {label: 'Notifications', href: '/item/notifications', icon: Bell},
      {label: 'Messages', href: '/item/messages', icon: Mail},
      {
        href: '/item/lists', 
        icon: List,
        label: 'Lists', 
       },
       {
        href: '/item/bookmarks', 
        icon: Bookmark,
        label: 'Bookmarks', 
       },
       {
        href: '/item/communities', 
        icon: Users,
        label: 'Communities', 
       },
       {
        href: '/item/profile', 
        icon: User,
        label: 'Profile', 
       },
    ],
  }


export function Sidebar(){
    return(
        <SidebarDesktop  sidebarItems={sidebarItems}
          
          />
    )
}