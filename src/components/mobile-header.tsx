
import Logo from "./Logo";

export default function MobileHeader() {

    return (
        <header className=" top-0 md:hidden p-2 items-center flex justify-center bg-gray-100/50 backdrop-blur-md w-full  fixed
        rounded-b-md border
        ">
            <Logo></Logo>
        </header>
    )
}