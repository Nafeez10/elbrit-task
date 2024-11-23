import { mediInfoList } from "../assets";
import MediInfo from "./MediInfo";

const MediInfoSection = ()  =>{

    return(
        <>
            <div className=" gap-[80px_0] pb-10 grid grid-cols-[1fr_1fr_1fr] max-lg:grid-cols-[1fr_1fr] max-md:grid-cols-[1fr] justify-items-center w-[80%] mx-auto green-bg rounded-[4rem]">
                {
                    mediInfoList.map( list =>(
                        <MediInfo
                            key={list.id}
                            title={list.title}
                            description={list.description}
                            icon={list.icon}
                        />
                    ))
                }
            </div>
        </>
    )
}

export default MediInfoSection;