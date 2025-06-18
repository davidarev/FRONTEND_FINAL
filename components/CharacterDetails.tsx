import { FunctionalComponent } from "preact/src/index.d.ts";

type CharacterProps = {
    id: string,
    name: string,
    image: string
    house: string,
    alive: boolean
}

const CharacterDetails: FunctionalComponent<CharacterProps> = (props) => {
    const {id, name, image, house, alive} = props;
    return(
        <div key={id}>
            <img src={image} />
            <p>{name}</p>
            <p>Casa: {house}</p>
            <p>{alive === true ? (<p>VIVO</p>) : (<p>MUERTO</p>)}</p>
        </div>
    )
}

export default CharacterDetails;