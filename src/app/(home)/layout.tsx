import Navebar from "@/components/header";

import { ReactNode } from "react";

export default function HomeLayout({ children }: { children: ReactNode }) {
    return (
        <main className="">
            <Navebar></Navebar>
            {children}
        </main >
    )
}