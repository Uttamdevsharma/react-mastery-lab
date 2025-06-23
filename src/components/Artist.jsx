import { useState } from "react";
import artistsAll from "../Data/artist-data";

export default function Artist(){

    const[artists,  setArtists] = useState(artistsAll);

    const deleteArtist = (id) => {

        const NewDelArray = artists.filter(person => person.id !== id);
        setArtists(NewDelArray);

    };

    const addSubmit = () => {

        const uttam = {id: 4 , name : "Uttam"};
        const newArray = [...artists , uttam];

        setArtists(newArray);
    }


    return(
        <>
        <div>
            <button onClick={addSubmit}>Add Uttam</button>
        </div>

        <ul>
            {artists.map((artist) => (
                <li key={artist.id}>{artist.name}
                {" "}
                <button onClick={() => deleteArtist(artist.id)}> Delete </button>
                <button>Edit</button>
                </li>
            ))}
        </ul>
        
        </>
    )
}