import { blogsMediBottleImg, blogsMedihandsImg } from "../assets";

const OurBlogsCovidMediInfo = () =>{

    return(
        <>
            <div className=" covid-medi-info grow flex gap-5">
                <div className=" w-full h-96 relative hover:scale-105 transition cursor-pointer">
                    <img className="rounded-xl object-cover h-full w-full " src={blogsMediBottleImg} alt="" />
                    <div className=" -translate-x-2 px-6 py-1 mt-4 rounded-e-full text-sm primary-bg absolute top-0 left-0">
                        <p>20 APR</p>
                    </div>
                    <div className=" absolute top-14 w-full left-[50%] translate-x-[-50%]">
                        <h2 className=" w-full px-5 font-[500]">
                            The Covid-19 Epidemic 2022 Is Back
                        </h2>
                    </div>  
                </div>
                <div className=" relative w-full h-40 hover:scale-105 transition cursor-pointer">
                    <img className="rounded-xl w-full h-full object-cover" src={blogsMedihandsImg} alt="" />
                    <div className=" -translate-x-2 px-6 py-1 mt-4 rounded-e-full text-sm primary-bg absolute top-0 left-0">
                        <p>20 APR</p>
                    </div>  
                    <div className=" absolute top-14 w-full left-[50%] translate-x-[-50%]">
                        <h2 className=" w-full px-5 font-[500]">
                            The Covid-19 Epidemic 2022 Is Back
                        </h2>
                    </div>  
                </div>
            </div>
        </>
    )
}

export default OurBlogsCovidMediInfo;