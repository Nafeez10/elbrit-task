import OurBlogsCovidMediInfo from "./OurBlogsCovidMediInfo";

const OurBlogsSection = () =>{
    
    return(
        <>
            <div className="">
                <div className=" covid-medi-cont max-md:px-10 grid grid-cols-[1fr_1fr_1fr_1fr] max-lg:grid-cols-[1fr_1fr] max-md:grid-cols-[1fr] gap-10 text-white mt-10 ">
                    <OurBlogsCovidMediInfo />
                    <OurBlogsCovidMediInfo />
                    <OurBlogsCovidMediInfo />
                    <OurBlogsCovidMediInfo />
                </div>
            </div>
        </>
    )
}

export default OurBlogsSection;