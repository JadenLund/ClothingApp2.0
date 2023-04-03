///this is where all of the styles will go
import { Image, Card, Icon } from "semantic-ui-react"
import goth from "../../assets/Images/ClothingStyles/goth.jpg"
import minimalist from "../../assets/Images/ClothingStyles/minimalist.jpg"
import Parisian from "../../assets/Images/ClothingStyles/Parisian.jpg"
import retro from "../../assets/Images/ClothingStyles/retro.jpg"
import techwear from "../../assets/Images/ClothingStyles/techwear.jpg"
export default function Styles() {
    //add an area so that the image can be used as a prop and not eneded to be repeated

    return (
        <Card.Group itemsPerRow={5}>
            <Card>
                <Image src={goth} />
                <Card.Content>
                    <Card.Header>Goth</Card.Header>
                </Card.Content>
            </Card >

            <Card>
                <Image src={minimalist} />
                <Card.Content>
                    <Card.Header>Minimalist</Card.Header>
                </Card.Content>
            </Card >

            <Card>
                <Image src={Parisian} />
                <Card.Content>
                    <Card.Header>Parisian</Card.Header>
                </Card.Content>
            </Card >

            <Card>
                <Image src={retro} />
                <Card.Content>
                    <Card.Header>Retro</Card.Header>
                </Card.Content>
            </Card >

            <Card>
                <Image src={techwear} />
                <Card.Content>
                    <Card.Header>Techwear</Card.Header>
                </Card.Content>
            </Card >
        </Card.Group>
    )
}
