'use client';

import { useSession } from "next-auth/react";
import { redirect } from "next/navigation";
import Image from "next/image";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";

export default function ProfilePage() {
    const session = useSession();
    const [userName, setUserName] = useState('');
    const [phone, setPhone] = useState('');
    const [streetAddress, setStreetAddress] = useState('');
    const [city, setCity] = useState('');
    const {status} = session;

    useEffect(() => {
      if (status === 'authenticated') {
        setUserName(session.data.user.name);
        fetch('/api/profile').then(response => {
          response.json().then(data => {
            setPhone(data.phone);
            setStreetAddress(data.streetAddress);
            setCity(data.city);
          })
        });
      }
    }, [session, status]);

    async function handleProfileInfoUpdate(ev) {
        ev.preventDefault();

        const savingPromise = new Promise(async (resolve, reject) => {
          const response = await fetch ('/api/profile', {
            method: 'PUT',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
              name: userName,
              streetAddress,
              phone,
              city,
              }),
        });
        if (response.ok) 
          resolve()
        else 
          reject();
        });

        await toast.promise(savingPromise, {
          loading: 'Saving...',
          success: 'Profile saved!',
          error: 'Error',
        })
    }
  
    if (status === 'loading') {
      return 'Loading...';
    }
  
    if (status === 'unauthenticated') {
      return redirect('/login');
    }

    const userImage = session.data.user.image;
  
    return (
      <section className="mt-8">
        <h1 className="text-center text-red-600 text-4xl mb-4">
            Profile
        </h1>
        <div className="max-w-lg mx-auto">
             <div className="flex gap-6 items-center">
                <div>
                    <div className="bg-gray-300 p-2 rounded-lg items-center">
                    <Image className="rounded-lg" src={userImage} width={128} height={128} alt={'avatar'}/>
                    </div>
                </div>
                <form className="grow" onSubmit={handleProfileInfoUpdate}>
                    <input type="text" placeholder="Name" value={userName} onChange={ev => setUserName (ev.target.value)}/>
                    <input type="email" disabled={true} value={session.data.user.email}></input>
                    <input type="text" placeholder="Phone number" value={phone} onChange={ev => setPhone(ev.target.value)}/>
                    <div className="flex gap-2">
                       <input type="text" placeholder="City" value={city} onChange={ev => setCity(ev.target.value)}/>
                       <input type="text" placeholder="Street address" value={streetAddress} onChange={ev => setStreetAddress(ev.target.value)}/>
                    </div>
                    <button type="submit">Save</button>
                </form>
            </div>
        </div>
      </section>
    );
  }