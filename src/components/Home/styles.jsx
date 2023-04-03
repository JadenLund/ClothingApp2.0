///this is where all of the styles will go

export default function Styles({ image, header }) {
    //add an area so that the image can be used as a prop and not eneded to be repeated

    return (
        <div>
            <img src={image} />
            <h2>{header}</h2>
        </div>
    )
}
