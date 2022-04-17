import {FC, useContext} from "react";
import {ThemeContext} from "../App";


const Main: FC = () => {
    let name = useContext(ThemeContext);
    console.log(name)
    return (
        <>
            <h1 >USER NAME: </h1>
            <br/>
            <h1 style={{background:"white"}}>{`${name.name}`}</h1>
        </>
    )
}
export default Main;