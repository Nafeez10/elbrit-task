import { functionalFoodSvg, vitaminSvg, weightLossSvg } from "../assets";

const HeroSolutionInfo = () =>{

    return(
        <>
            <div className=" flex gap-5">
                <div className="w-14 h-14 green-bg p-3 rounded-full">
                    <img className=" w-full" src={vitaminSvg} alt="" />
                </div>
                <div className="">
                    <h2 className=" text-xl font-[500] green-text">
                        Vitamins
                    </h2>
                    <p className=" text-sm text-neutral-500">
                        Increased Vitamins and<br /> minerals in your diet
                    </p>
                </div>
            </div>
            <div className=" flex gap-5">
                <div className="w-14 h-14 green-bg p-3 rounded-full">
                    <img className=" w-full" src={weightLossSvg} alt="" />
                </div>
                <div className="">
                    <h2 className=" text-xl font-[500] green-text">
                        Weight Loss
                    </h2>
                    <p className=" text-sm text-neutral-500">
                        Weight Loss <br /> Find Scientifically proven Solutions
                    </p>
                </div>
            </div>
            <div className=" flex gap-5">
                <div className="w-14 h-14 green-bg p-3 rounded-full">
                    <img className=" w-full" src={functionalFoodSvg} alt="" />
                </div>
                <div className="">
                    <h2 className=" text-xl font-[500] green-text">
                        Functional Foods
                    </h2>
                    <p className=" text-sm text-neutral-500">
                        Functional Foods<br /> From protien powers to baby formula
                    </p>
                </div>
            </div>
        </>
    )
}

export default HeroSolutionInfo;