import banner from '../../assets/Images/Banner.jpeg'
import { Icon, Image } from 'semantic-ui-react'
import Styles from "../Home/styles"
import Test from './test'

export default function Home() {
    return (
        <>

            <Image src={banner} size='massive' centered />
            {/* <Test /> */}
            <Styles />
        </>
    )
}
