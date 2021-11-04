import DescButton from "../../components/greeting/DescButton";
import GetStartedButton from "../../components/greeting/GetStartedButton";
import TutorialButton from "../../components/greeting/TutorialButton";
import {Container, Row} from "react-bootstrap";


const Greeting = () => {
    return (
        <Container fluid={'lg'} className={'d-lg-grid gap-lg-3'}>
            <Row className={'text-center button-resize'}>
                <GetStartedButton/>
            </Row>
            <Row className={'text-center button-resize'}>
                <DescButton/>
            </Row>
            <Row className={'text-center button-resize'}>
                <TutorialButton/>
            </Row>
        </Container>
    )
}

export default Greeting;