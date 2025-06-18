import { FunctionalComponent } from "preact/src/index.d.ts";
import FavouriteButton from "../islands/FavouriteButton.tsx";

type CharacterProps = {
    id: string,
    name: string,
    image: string
}

const Character: FunctionalComponent<CharacterProps> = (props) => {
    const {id, name, image} = props;
    return(
        <div key={id} class="characters-card">
            <a href={`/characters/${id}`}>
                <img src={image} />
                <p>{name}</p>
            </a>
            <FavouriteButton characterID={id}/>
        </div>
    )
}

export default Character;