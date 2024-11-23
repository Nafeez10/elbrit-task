import { locationTwoSvg, mainLogo } from "../assets";
import FooterContacts from "./FooterContacts";

const Footer = () =>{

    return(
        <>
            <section className=" my-container">
                <div className="">
                    <FooterContacts />
                </div>
                <div className=" mt-10 flex gap-20 max-md:flex-col max-md:gap-5  max-md:items-center">
                    <div className="p-3 flex items-center justify-center bg-white w-56">
                        <img className=" object-contain" src={mainLogo} alt="" />
                    </div>
                    <div className=" max-sm:grow">
                        <p className=" max-md:text-center text-[.7rem] text-neutral-300">
                            Your health, physical and emotional well-being is important <br /> 
                            to us. We are always by your side and have made it even <br />
                            easier for you to find the necessary vitamins.
                        </p>
                    </div>
                </div>
                <div className=" mt-10 flex gap-2.5 max-md:justify-center">
                    <img className="w-4" src={locationTwoSvg} alt="" />
                    <p className="text-[.7rem] text-neutral-300">
                        Elbrit Life Sciences Private Limited. C20, BKC, G Block, Mumbai 400051
                    </p>
                </div>
            </section>
        </>
    )
}

export default Footer;