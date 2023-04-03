import banner from '../../assets/Images/Banner.jpeg'
import { Icon, Image } from 'semantic-ui-react'
import Styles from "../Home/styles"
import goth from "../../assets/Images/ClothingStyles/goth.jpg"
export default function Home() {
    return (
        <>

            <Image src={banner} size='massive' centered />
            <Icon name="angle left" />
            <Styles />
            <Icon name="angle right" />
        </>
    )
}
