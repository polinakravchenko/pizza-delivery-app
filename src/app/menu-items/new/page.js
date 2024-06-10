'use client';

import {useProfile} from "../../components/UseProfile";
import { useState } from "react";
import UserTabs from "@/app/components/layout/UserTabs";
import toast from "react-hot-toast";
import Left from "../../components/icons/Left";
import Link from "next/link";
import { redirect } from "next/navigation";
import MenuItemForm from "@/app/components/layout/MenuItemForm";

export default function NewMenuItemPage() {

    const {loading, data} = useProfile();
    const [redirectToItems, setRedirectToItems] = useState(false);
  
    async function handleFormSubmit(ev, data) {
      ev.preventDefault();
      const savingPromise = new Promise(async (resolve, reject) => {
        const response = await fetch('/api/menu-items', {
          method: 'POST',
          body: JSON.stringify(data),
          headers: {'Content-Type': 'application/json'},
        });
  
        if (response.ok)
          resolve();
        else
           reject();
      });
  
      await toast.promise(savingPromise, {
        loading: 'Saving this tasty item',
        success: 'Saved',
        error: 'Error',
      });

      setRedirectToItems(true);
    }

    if(redirectToItems) {
        return redirect('/menu-items');
    }

    if (loading) {
        return 'Loading user info...';
    }
    if (!data.admin) {
        return 'Not an admin';
    }

    return (
    <section>
      <UserTabs isAdmin={true}/>
      <div className="max-w-lg mx-auto mt-8">
        <Link href={'/menu-items'} className="button">
        <Left/>
        <span>Show all menu items</span>
        </Link>
      </div>
      <MenuItemForm menuItem={null} onSubmit={handleFormSubmit} />
    </section>
    );
}