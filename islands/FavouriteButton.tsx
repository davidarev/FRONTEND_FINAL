import { useEffect, useState } from "preact/hooks";

const FavouriteButton = ({characterID}: {characterID: string}) => {
    const [like, setLike] = useState<boolean>(false);

    useEffect(() => {
        const likes = document.cookie.match(/favorite=([^;]*)/)
        if(likes) {
            const likesids = JSON.parse(likes[1] || '[]');
            setLike(likesids.includes(characterID))
        }
    }, [])

    const clickFavourite = () => {
        const likes = document.cookie.match(/favorite=([^;]*)/);
        let likesids = likes ? JSON.parse(likes[1] || '[]') : [];
        if(like) likesids = likesids.filter((id: string) => id != characterID);
        else likesids.push(characterID);
        document.cookie = `favorite=${JSON.stringify(likesids)}; path=/`;
        setLike(!like)

    }

    return (
        <button type="submit" onClick={clickFavourite} style={{backgroundColor: like ? "yellow" : "gray", padding: "15px"}}>
            FAVORITO
        </button>
    )
}

export default FavouriteButton;