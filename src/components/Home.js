import { useState } from "react";


const Home = () => {

    const btnHandlar = (e) => {
        console.log("btn clicked", e);
    }

    const clickHere = (name, e) => {
        console.log("Hello",  name, e.target);
    }

    const [name, setName] = useState("Sumi");
    const [age, setAge] = useState(18);

    const changeName = () => {
        setName("sumi islam");
        setAge(20);
    }

    return (
        <div>
            <div className="home">
                <h1>This is Home Page</h1>
                <button onClick={btnHandlar}>Click me</button> <br/> <br/>
                <button onClick={(e) => clickHere("Arif", e)} >click here</button> <br/> <br/>

                <p> {name} is {age} years old. </p> <br/>
                <button onClick={changeName}>Change Name</button>
            </div>
        </div>
    )
}

export default Home
