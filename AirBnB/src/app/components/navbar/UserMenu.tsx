'use client'
import { useState } from "react"
import Avatar from "../Avatar"
import MenuItem from "./MenuItem"
import { AiOutlineMenu } from 'react-icons/ai'

export default function UserMenu() {
    const [isOpen, setIsOpen] = useState(false)
    //change to cb
    const toggleOpen = () => {
        setIsOpen((value) => !value)
    }
    return <>
        <div className="relative">
            <div className="flex flex-row items-center gap-3">
                <div className="hidden md:block text-sm font-semibold rounded-full hover:bg-neutral-100 transition cursor-pointer  px-4 py-3">

                    HOME
                </div>

                <div onClick={toggleOpen}
                    className="p-4 md:py-1 md:px-2 border-[1px] border-neutral-200 flex flex-row items-center gap-3 rounded-full cursor-pointer hover:shadow-md transition">
                    <AiOutlineMenu />
                    <div>
                        <Avatar />
                    </div>
                </div>


            </div>

            {isOpen && (<div className="absolute rounded-xl shadow-md w-[40vw] bg-white md:w-3/4 overflow-hidden right-0 top-12 text-sm">
                <div className="flex flex-col cursor-pointer">
                    <MenuItem onClick={() => { }} label="Login" />
                    <MenuItem onClick={() => { }} label="Signup" />
                </div>
            </div>)}

        </div>
    </>
}