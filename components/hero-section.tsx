import { Plus } from "lucide-react";

export function HeroSection(){
    return(<section className="m-2 flex">
        <div className="flex flex-col w-[50%]">
            <div className="mx-1 bg-gray-100 p-2 mt-2 rounded-md"><h3 className="font-semibold">History</h3><p className="text-xs mb-3">Check your history</p></div>
            <div className="mx-1 bg-gray-100 p-2 mt-2 rounded-md"><h3 className="font-semibold">Transactions</h3><p className="text-xs mb-3">Check your Transactions</p></div>
        </div>
        <div className="h-[144px] w-[50%] bg-gray-100 mx-1 p-2 mt-2 rounded-md  relative">
            <h3 className="font-semibold">Create Bill</h3>
            <p className="text-xs mb-8">Click here to create bills instantly!</p>
            <button className="absolute right-0 bottom-0 m-3 bg-gray-950 rounded-full text-white p-2"><Plus/></button>
        </div>
    </section>)
}