import { mainLogo } from "../assets";

const Header = () =>{

    return(
        <>
            <section className=" my-container mt-10">
                <div className=" w-52">
                    <img className=" w-full" src={mainLogo} alt="" />
                </div>
            </section>
        </>
    )
}

export default Header;