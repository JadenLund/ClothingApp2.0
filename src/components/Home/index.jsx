import banner from '../../assets/Images/Banner.jpeg'
import { Image } from 'semantic-ui-react'
export default function Home() {
    return (
        <>
            <Image src={banner} size='massive' centered />

            <div> Div that will display clothing styles</div>
        </>
    )
}
