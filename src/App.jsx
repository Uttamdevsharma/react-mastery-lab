import BioData from "./components/BioData"

const bioDataInfo = [
  {
  name : "uttam sharma",
  age : 25,
  phone : "+88012876876",
  email : "uttam@gmail.com",
  skills : ["js","react"],
},

{
  name : "sharma",
  age : 24,
  phone : "+88012876876",
  email : "sharma@gmail.com",
  skills : ["js"],
}
];


function App() {

  return (

    <>
    {bioDataInfo.map((biodata) => (

      <BioData

      name={biodata.name}
      age={biodata.age}
      phone={biodata.phone}
      email={biodata.email}
      skills={biodata.skills} 
      />

    ))}
    </>
  );

 
}

export default App

