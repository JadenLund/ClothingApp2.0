import { Header, Image } from "semantic-ui-react"
import AboutBanner from '../../assets/Images/AboutBanner.png'
export default function About() {
    return (
        <>
            <Header as='h1' textAlign='center'>
                Thread Works is a revolutionary new clothing application that helps people pick out the perfect outfit for any occasion. With a wide variety of styles and aesthetics to choose from, users can browse through curated outfits and get inspired by other people's fashion choices. Whether you need help putting together a new outfit or just want to explore different styles, Thread Works has you covered. With its user-friendly interface and personalized recommendations, Thread Works is the ultimate fashion companion for anyone looking to up their style game.
            </Header>

            <Image src={AboutBanner}></Image>
        </>
    )
}
