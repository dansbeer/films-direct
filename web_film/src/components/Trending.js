import { Card, Col, Container, Image, Row } from "react-bootstrap";
import duneImage from "../assets/images/trending/dune.jpg";

const Trending = () => {
  return (
    <Container>
      <h1 className="text-white">TRENDING</h1>
      <Row>
        <Col md={4}>
          <Card className="movieImage">
            <Image
              src={duneImage}
              alt="Dune Movies"
              className="text-white image"
            />
            <div className="bg-dark">
              <div className="p2 m-1 text-white">
                <Card.Title className="flex justify-center text-center">
                  DUNE
                </Card.Title>
                <Card.Text>
                  This is a wider card with supporting text below as a natural
                </Card.Text>
                <Card.Text>Last updated 3 mins ago</Card.Text>
              </div>
            </div>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Trending;
