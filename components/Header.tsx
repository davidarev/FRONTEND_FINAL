import { FunctionalComponent } from "preact/src/index.d.ts";

const Header: FunctionalComponent = () => {
    return (
        <div class="header">
            <p><a href={`/`}>TODOS LOS PERSONAJES</a>   <a href={`/favourites`}>FAVOURITES</a></p>
        </div>
    )
}

export default Header;