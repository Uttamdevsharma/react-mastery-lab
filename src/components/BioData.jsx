
const BioData = (props) => {

    return (
        <div className="bio-data">
            <h2>Biodata of {props.name}</h2>
            <hr/>

            <div className="personal-info">
                <p>Age : {props.age}</p>
                <p>Phone : {props.phone}</p>
                <p>Email: {props.email}</p>
            </div>

            <div className="skills">
                <h2>My Skills</h2>

                <ul>
                    {props.skills.map((skill) => (
                        <li> {skill} </li>
                    ))}
                </ul>
            </div>
        </div>

    )

}
export default BioData