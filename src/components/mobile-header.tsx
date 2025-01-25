

export default function MobileHeader() {

    return (
        <header className="font-title top-2  py-2 mx-2 rounded-full  bg-dark2 w-[calc(100%-1rem)] sticky z-50 md:hidden        ">
            <div className="flex justify-center items-center 
              ">
                <h1 className="font-title font-extrabold text-2xl bg-accent rounded-full 
                   hover:scale-110 transition-all px-4 py-4 text-white
        ">{"GN"}</h1>

            </div>
        </header>
    )
}