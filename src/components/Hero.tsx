import { heroMedicineImg } from "../assets";
import HeroSolutionInfo from "./HeroSolutionInfo";

const Hero = () =>{

    return(
        <>
            <section className=" my-container">
                <div className=" pt-16">
                    <h1 className=" text-center text-8xl max-xl:text-6xl max-md:text-5xl font-semibold primary-text ">
                        Essential Vitamins
                    </h1>
                </div>
                <div className=" max-xl:mt-10 flex max-xl:flex-col max-xl:items-center justify-center gap-20 px-10">
                  
                    <div className=" self-center">
                        <p className=" text-lg text-neutral-500 max-xl:text-center">
                            Online Medical Supplies
                        </p>
                        <p className=" green-text text-2xl font-[500] mt-5">
                            Get Your Vitamins <br className="max-xl:hidden"/> & Minerals
                        </p>
                        <div className="max-xl:flex max-xl:justify-center">
                            <button className=" active:scale-90 transition mt-5 green-bg text-white px-10 py-2 rounded-full">
                                Explore
                            </button>
                        </div>
                    </div>
                    <div className=" w-72">
                        <img className=" w-full" src={heroMedicineImg} alt="" />
                    </div>
                    
                    <div className=" flex flex-col gap-5 self-center xl:self-end">
                        <HeroSolutionInfo />
                    </div>
                </div>
                <div className=" flex gap-5 mt-20">
                    <div className=" bg-slate-400 h-10 w-10 rounded-full"></div>
                    <div className=" bg-slate-400 h-10 w-10 rounded-full"></div>
                </div>
            </section>
        </> 
    )
}

export default Hero;