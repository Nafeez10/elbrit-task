type propsType ={
    title: string;
    description: string;
    icon: string;
}

const ContactLinkBtn = ({ title, description, icon }:propsType) =>{

    return(
        <>
            <button className="  flex items-center gap-8 bg-cyan-800 px-10 py-5 rounded-xl justify-center">
                <div className=" w-10">
                    <img className=" w-full" src={icon} alt="" />
                </div>
                <div className=" grow text-sm">
                    <h5 className="">
                        { title }
                    </h5>
                    <p>
                        { description }
                    </p>
                </div>
            </button>
        </>
    )
}

export default ContactLinkBtn;