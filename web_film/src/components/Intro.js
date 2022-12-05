import { Button, Col, Container, Row } from "react-bootstrap";
import NavigationBar from "./NavigationBar";

const Intro = () => {
  return (
    <div className="myBG">
      <NavigationBar />
      <div className="intro">
        <Container className="text-white d-flex justify-content-center text-center align-items-center">
          <Row>
            <Col>
              <div className="title">NONTON GRATIS</div>
              <div className="title">GAK BIKIN DOMPET TIPIS</div>
              <div className="introButton mt-4 text-center">
                <Button variant="dark">Lihat Semua List</Button>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default Intro;
