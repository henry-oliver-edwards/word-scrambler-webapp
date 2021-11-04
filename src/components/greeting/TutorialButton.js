import {Button} from "react-bootstrap";

const TutorialButton = () => {
    return (
        <div>
            <Button variant="warning" itemRef={'tutorial-button'} className={'button-fill'}>Proper tutorial coming soon!</Button>
        </div>
    )
}

export default TutorialButton;