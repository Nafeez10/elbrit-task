type propsType = {
    title: string;
    description: string;
    icon: string;
}

const MediInfo = ({ title, description, icon }:propsType) =>{

    return(
        <>
            <div className=" medi-info  w-52 gap-2 flex flex-col items-center">
                <div className=" translate-y-[-50%] bg-white w-20 rounded-full p-5">
                    <img className=" w-full" src={icon} alt="" />
                </div>
                <div className="translate-y-[-50%]">
                    <h3 className=" text-white text-center text-xl">
                        {title}
                    </h3>
                    <p className=" text-center text-neutral-400 text-sm">
                        {description}
                    </p>
                </div>
            </div>
        </>
    )
}

export default MediInfo