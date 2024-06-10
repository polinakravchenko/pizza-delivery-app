'use client';

import UserTabs from "../components/layout/UserTabs";
import {useProfile} from "../components/UseProfile";
import Link from "next/link";
import Right from "../components/icons/Right";
import { useEffect, useState } from "react";


export default function MenuItemPage() {

  const {loading, data} = useProfile();
  const [menuItems, setMenuItems] = useState();

  useEffect(() => {
    fetch('/api/menu-items').then(res => {
      res.json().then(menuItems => {
        setMenuItems(menuItems);
      });
    })
  }, []);
  
  if (loading) {
    return 'Loading user info...';
  }

  if (!data.admin) {
    return 'Not an admin';
   }
  
  return(
    <section className="mt-8 max-w-lg mx-auto">
      <UserTabs isAdmin={true} />
      <div className="mt-8">
      <Link className="button flex" href={'/menu-items/new'}>
      <span>Create new menu item</span>
      <Right/>
      </Link>
      </div>
      <div>
        <h2 className="text-sm text-gray-400 mt-8">Edit menu item</h2>
        <div className="grid grid-cols-3 gap-2">
        {menuItems?.length > 0 && menuItems.map(item => (
          <Link href={'/menu-items/edit/'+item._id} 
             className="bg-gray-200 rounded-lg p-4">
           <div className="text-center">
           {item.name}
           </div>
          </Link>
        ))}
        </div>
      </div>
    </section>
  )
}