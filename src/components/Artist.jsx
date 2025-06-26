import { useState } from "react";
import artistsAll from "../Data/artist-data";

export default function Artist() {
  const [artists, setArtists] = useState(artistsAll);

  const deleteArtist = (id) => {
    const NewDelArray = artists.filter(person => person.id !== id);
    setArtists(NewDelArray);
  };

  const addSubmit = () => {
    const uttam = { id: 4, name: "Uttam" };
    const newArray = [...artists, uttam];
    setArtists(newArray);
  };


  const editArtist = (id) => {
    const updatedArray = artists.map(artist => {
      if (artist.id === id) {
        return { ...artist, name: artist.name + " (Edited)" };
      } else {
        return artist;
      }
    });

    setArtists(updatedArray);
  };

  return (
    <>
      <div>
        <button onClick={addSubmit}>Add Uttam</button>
      </div>

      <ul>
        {artists.map((artist) => (
          <li key={artist.id}>
            {artist.name}{" "}
            <button onClick={() => deleteArtist(artist.id)}>Delete</button>{" "}
            <button onClick={() => editArtist(artist.id)}>Edit</button>
          </li>
          
        ))}
      </ul>
    </>
  );
}
