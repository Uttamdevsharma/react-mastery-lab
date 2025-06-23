import { useState } from "react";
import artistsAll from "../Data/artist-data";

export default function Artist(){

    const[artists, setArtists] = useState(artistsAll);


    return(
        <>

        <li>Artist</li>
        <li>Artist2</li>
        <li>Artist3</li>
        
        </>
    )
}