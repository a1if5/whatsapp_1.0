import { Circle } from "better-react-spinkit";

function Loading() {
    return (
        <center style={{display:"grid", placeItems: "center", height: '100vh'}}>
            <div>
                <img src=""/>
                <Circle colour="#3CBC28" size={60}></Circle>
            </div>
        </center>
    )
}

export default Loading;