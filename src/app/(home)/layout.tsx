import Footer from "@/components/footer";
import Navebar from "@/components/header";
import MobileFooter from "@/components/mobile-footer";
import MobileHeader from "@/components/mobile-header";

import { ReactNode } from "react";

export default function HomeLayout({ children }: { children: ReactNode }) {
    return (
        <main>
            {children}
            <Navebar></Navebar>
            <MobileHeader></MobileHeader>
            <MobileFooter></MobileFooter>
            <Footer></Footer>
        </main >
    )
}