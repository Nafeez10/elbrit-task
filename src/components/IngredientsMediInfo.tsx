
type propsType = {
    title: string;
    description: string;
    image: string;
}

const IngredientsMediInfo = ({ title, description, image }:propsType) =>{

    return(
        <>
            <div className=" hover:scale-105 transition min-w-[15rem] max-lg:max-w-[19rem] grow w-[19rem relative">
                <img className=" w-full" src={image} alt="" />
                <div className=" flex flex-col justify-between w-full h-full absolute top-0 left-0 p-5">
                    <div>
                        <h3 className=" primary-text font-[500] text-xl">
                            { title }
                        </h3>
                        <p className=" text-[1rem] text-neutral-500 font-[500]">
                            { description }
                        </p>
                    </div>
                    <div>
                        <button className=" active:scale-90 transition font-[500] primary-text underline underline-offset-2">
                            SEE MORE
                        </button>
                        
                    </div>
                </div>
            </div>
        </>
    )
}

export default IngredientsMediInfo;