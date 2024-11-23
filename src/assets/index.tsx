import mainLogo from './elbrit-logo.png';
import heroMedicineImg from './hero-medicine-img.png';
import vitaminSvg from './vitamin-svg.svg';
import vitaminB3Img from './vitamin-b3.png';
import vitaminCImg from './vitamin-c.png';
import magnesiumImg from './magnesium.png';
import hyaluronicAcidImg from './hyaluronic-acid.png';
import lactobacillusImg from './lactobacillus.png';
import blogsMediBottleImg from './blogs-medi-bottle.png';
import blogsMedihandsImg from './blogs-medi-hands.png';
import weightLossSvg from './weight-loss-svg.svg';
import functionalFoodSvg from './functional-food-svg.svg';
import clinicallyStudiedSvg from './clinically-studied-svg.svg';
import vegetarianFriendlySvg from './vegetarian-friendly-svg.svg';
import indiaFlagSvg from './india-flag-svg.svg';
import freeShippingSvg from './free-shipping-svg.svg';
import noRiskSvg from './no-risk-svg.svg';
import gmoFreeSvg from './gmo-free-svg.svg';
import telephoneSvg from './telephone-svg.svg';
import emailSvg from './email-svg.svg';
import locationOneSvg from './location-1-svg.svg';
import locationTwoSvg from './location-2-svg.svg';


type heroSolutionType = {
    id: number;
    title: string;
    description: string;
    icon: string
}

export const heroSolutionList : heroSolutionType[] = [
    {
        id: 1,
        title: "Vitamins",
        description: "Increased Vitamins and\n minerals in your diet",
        icon: vitaminSvg
    },
    {
        id: 2,
        title: "Weight Loss",
        description: "Weight Loss Find Scientifically proven Solutions",
        icon: weightLossSvg
    },
    {
        id: 3,
        title: "Functional Foods",
        description: "Functional Foods\n From protien powers to baby formula",
        icon: functionalFoodSvg
    }
]

export const mediInfoList = [
    {
        id: 1,
        icon: clinicallyStudiedSvg,
        title: "Clinically Studied",
        description: "All products that we offer have undergone lab and safety tests"
    },
    {
        id: 2,
        icon: vegetarianFriendlySvg,
        title: "Vegetarian Friendly",
        description: "We have a wide selection of vegetarian products to meet your needs"
    },
    {
        id: 3,
        icon: indiaFlagSvg,
        title: "Made In India",
        description: "Shop local and explore health products made right here in India"
    },
    {
        id: 4,
        icon: freeShippingSvg,
        title: "Free Shipping",
        description: "We deliver to your door with no shipping costs on your orders"
    },
    {
        id: 5,
        icon: noRiskSvg,
        title: "No Risk",
        description: "We ensure that all products are safe and within their use-by date"
    },
    {
        id: 6,
        icon: gmoFreeSvg,
        title: "GMO Free",
        description: "Natural, no modified products and derivatives for those who need it"
    }
]

export const contactList = [
    {
        id: 1,
        icon: telephoneSvg,
        title: "Phone Number",
        description: "+974 3118 1843" ,
        toLink: ""
    },
    {
        id: 2,
        icon: emailSvg,
        title: "Email Address",
        description: "Elbrithcqhr@gmail.com",
        toLink: ""
    },
    {
        id: 3,
        icon: locationOneSvg,
        title: "Office Location",
        description: "Ambassador Street, Zone 61",
        toLink: ""
    }
]

export {
    mainLogo,
    heroMedicineImg,
    vitaminSvg,
    vitaminB3Img,
    vitaminCImg,
    magnesiumImg,
    hyaluronicAcidImg,
    lactobacillusImg,
    blogsMediBottleImg,
    blogsMedihandsImg,
    weightLossSvg,
    functionalFoodSvg,
    locationTwoSvg
}