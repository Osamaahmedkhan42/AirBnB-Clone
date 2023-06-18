'use client'
import { BiSearch } from 'react-icons/bi'



export default function Search() {
    return <>
        <div className="rounded-full  shadow-sm hover:shadow-md cursor-pointer transition ">
            <div className="flex flex-row items-center justify-between">
                <div className="text-sm font-semibold px-6">
                    Any where
                </div>
                <div className="hidden sm:block text-sm  font-semibold px-6 border-x-[1px] flex-1 text-center">
                    Any week
                </div>
                <div className=" text-sm  pl-6 pr-2 text-gray-600 flex flex-row items-center gap-3 ">
                    <div className="hidden sm:block">
                        Add Guests
                    </div>
                    <div className="p-2 rounded-full ">
                        <BiSearch />
                    </div>
                </div>

            </div>
        </div>
    </>
}