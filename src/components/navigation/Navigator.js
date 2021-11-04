import {Route} from "wouter";
import Greeting from "../../pages/greeting/Greeting";

const Navigator = () => {
    return (
        <div>
            <Route path={'/'} component={Greeting}/>
        </div>
    )
}

export default Navigator;