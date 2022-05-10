import { Row, Col, Button, Image } from "react-bootstrap";
import { useState } from "react";

function LabImage() {
    const [image, setImage] = useState(0);
    const images = [
        "normal.jpg",
        "cruel.jpg",
        "merciless.jpg",
        "uber.jpg",
    ]
    
    return (
        <>
        <Row className="mb-2">
            <Col className="d-grid gap-2">
            <Button onClick={() => {setImage(0)} } variant="primary">Normal</Button>
            </Col>
            <Col className="d-grid gap-2">
            <Button onClick={() => {setImage(1)} }variant="primary">Cruel</Button>
            </Col>
            <Col className="d-grid gap-2">
            <Button onClick={() => {setImage(2)} }variant="primary">Merciless</Button>
            </Col>
            <Col className="d-grid gap-2">
            <Button onClick={() => {setImage(3)} }variant="primary">Uber</Button>
            </Col>
        </Row>
        <Row className="mt-2">
            <Image className="expandable" src={`../../lab/${images[image]}`} fluid></Image>
        </Row>
        </>
    );
}

export default LabImage;
