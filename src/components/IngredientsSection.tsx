import { hyaluronicAcidImg, lactobacillusImg, magnesiumImg, vitaminB3Img, vitaminCImg } from "../assets";
import IngredientsMediInfo from "./IngredientsMediInfo";

const IngredientsSection = () =>{


    return(
        <>
            <div className="animate-[pop-in_1s] my-container mx-auto flex flex-col gap-5 ">
                <div className=" flex gap-5 max-lg:flex-col max-lg:items-center ">
                    <div className=" w-[28rem] max-sm:w-full max-lg:text-center">
                        <h3 className=" primary-text text-sm font-[500]">
                            INGREDIENTS
                        </h3>
                        <h4 className=" mt-3 green-text text-3xl font-[500]">
                            Better Ingedients
                        </h4>
                        <p className=" mt-4 text-sm text-neutral-500">
                            Only the best when you choose products offered on our plarform - high quality ingredient sfor high quality products!
                        </p>
                    </div>
                    <IngredientsMediInfo
                        title="Vitamin C"
                        description="Vitamin C as ascorbic acid"
                        image={vitaminCImg}
                    />
                    <IngredientsMediInfo
                        title="Vitamin B3"
                        description="Niacin for healthy gut and skin"
                        image={vitaminB3Img}
                    />
                </div>
                <div className=" flex gap-5 max-lg:flex-col max-lg:items-center">
                    <IngredientsMediInfo
                        title="Magnesium"
                        description="Boost energy and support muscle function"
                        image={magnesiumImg}
                    />
                    <IngredientsMediInfo
                        title="Hyaluronic Acid"
                        description="For smooth, supple and soft skin!"
                        image={hyaluronicAcidImg}
                    />
                    <IngredientsMediInfo
                        title="Lactobacillus"
                        description="Invigorate your gut microbiome"
                        image={lactobacillusImg}
                    />
                    <div className=" flex flex-col gap-3 max-lg:hidden">
                        <div className=" w-20 h-[50%] slice-element bg-[#a0ddf2]"></div>
                        <div className=" w-20 h-20 bg-yellow-300 rounded-full"></div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default IngredientsSection;