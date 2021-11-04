const {Button} = require("react-bootstrap");
const {useLocation} = require("wouter");

const GetStartedButton = () => {

    const [location, setLocation] = useLocation();


    return (
        <div id={'start-button'}>
            <Button variant="primary" onClick={()=>{
                setLocation(`${location}/lobbys`)
            }} className={'button-fill'}>Get Started</Button>
        </div>
    )
}

export default GetStartedButton;