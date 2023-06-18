'use client'
import Image from "next/image"
import { useRouter } from "next/router"

export default function Logo() {
    return <>
        <Image
            alt="logo"
            width={100}
            height={100}
            src='/images/air_logo.png'
        />
    </>
}