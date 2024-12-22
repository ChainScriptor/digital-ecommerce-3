import { Button } from "@/components/ui/button"
import Image from "next/image"

function Hero() {
  return (
    <div className="bg-green-700 p-10 px-28 lg:px-36">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 pt-2">
            <div>
                <h2 className="font-extrabold text-5xl text-white">Speed Up Your Creative Work</h2>
                <p className="text-gray-200 mt-5">Join a growing family of 43,436 designers,creator and makers from around the world</p>
                <div className=" flex gap-5 mt-8">
                    <Button>Explore</Button>
                    <Button variant="destructive">Sell</Button>

                </div>
            </div>
            <div className="flex items-center justify-center">
                <Image src={'/computer.svg'} alt="computer" width={300} height={300} className="scale-x-[-1]"/>
            </div>
        </div>
    </div>
  )
}
export default Hero