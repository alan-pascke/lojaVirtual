import Navbar from "@/components/Navbar";


export default function Layout({children}: {children: React.ReactNode}) {
    return (
        <div>
            <Navbar/>
            <div className="grid justify-center">
                {children}
            </div>
        </div>
    )
};
