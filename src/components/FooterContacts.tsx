import { contactList  } from "../assets";
import ContactLinkBtn from "./ContactLinkBtn";

const FooterContacts = () =>{

    return(
        <>
            <div className=" grid grid-cols-[1fr_1fr_1fr] max-md:grid-cols-[1fr] max-lg:grid-cols-[1fr_1fr] gap-[3rem_5rem]">
                {
                    contactList.map( list =>(
                        <ContactLinkBtn 
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

export default FooterContacts;