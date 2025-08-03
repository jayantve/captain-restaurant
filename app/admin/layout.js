'use client'
import React, { useState } from "react";
import AdminNavbar from "@/component/AdminNavbar";
import {
  ClerkProvider, SignInButton,
  SignUpButton,
  SignedIn,
  SignedOut,
  useUser,
  UserButton
} from '@clerk/nextjs'
import { redirect, RedirectType } from "next/navigation";

export default function RootLayout({ children }) {

  return (
    <>
      <ClerkProvider>
        <SubLayout>
          {children}
        </SubLayout>
      </ClerkProvider>
    </>
  )
}


function SubLayout({ children }) {

  const { isSignedIn, user, isLoaded } = useUser();

  if (!isLoaded) {
    return null;
  }

  if (!isSignedIn) {
    return null;
  }

  console.log(user)
  if (user?.emailAddresses[0].emailAddress === 'hnverma2007@gmail.com') {

    return (
      <>

        <AdminNavbar className="flex justify-end items-center p-4 gap-4 h-16">
          <SignedOut>
            <SignInButton />

            <SignUpButton>

              <button className="bg-[#6c47ff] text-ceramic-white rounded-full font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 cursor-pointer">
                Sign Up
              </button>

            </SignUpButton>

          </SignedOut>
          <SignedIn>
            <UserButton />
          </SignedIn>
        </AdminNavbar>
        <main className="p-2 flex flex-col items-center justify-center">
          {children}
        </main>
      </>
    )
  }
  else{
    redirect('/',RedirectType.push)
  }
}
// export default function DashboardLayout({ children }) {
//   return (
//     <main className="">
//       <AdminNavbar/>
//       <div className="p-1">
//       {children}
//       </div>
//     </main>
//   )
// }