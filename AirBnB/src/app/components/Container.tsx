'use client'
interface ContainerProps {
    children: React.ReactNode
}
export default function Container({ children }: ContainerProps) {
    return <>
        <div className=" mx-auto px-4 xl:px-20 mx:px-10 sm:px-2">{children}</div>
    </>
}