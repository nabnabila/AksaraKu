import { Container, Row, Col, Card, Image } from "react-bootstrap";
import BelajarImage from "../assets/image/Belajar.png";
import KuisImage from "../assets/image/Kuis.png";

const Mode1 = () => {
  return (
    <div className="mode">
      <Container>
        <br />
        <h1 className="p-10 m-5 text-center">Aksara Nglegena</h1>
        <br />
        <Row>
          <Col md={4} id="categories">
            <Card className="modeImage">
              <Image src={BelajarImage} alt="Belajar" className="modeimages" />
              <div>
                <div className="p-3 m-3">
                  <Card.Title className="text-center">Belajar</Card.Title>
                </div>
                <div className="p-1 m-1 text-center">
                  <a href="/aksaranglegena/belajar1" class="btn btn-custom">
                    Mulai
                  </a>
                </div>
              </div>
            </Card>
          </Col>
          <Col md={4}>
            <Card className="modeImage">
              <Image src={KuisImage} alt="Kuis" className="modeimages" />
              <div>
                <div className="p-3 m-3">
                  <Card.Title className="text-center">Kuis</Card.Title>
                </div>
                <div className="p-1 m-1 text-center">
                  <a href="/aksaranglegena/kuis1" class="btn btn-custom">
                    Mulai
                  </a>
                </div>
              </div>
            </Card>
          </Col>
          <Col md={4} className="categoryWrapper">
            <Card className="modeImage1">
              <a href="/">
                <i
                  className="bi bi-arrow-left"
                  style={{ fontSize: "200px", color: "white" }}
                ></i>{" "}
              </a>
              <div>
                <Card.Title className="card-title-back">
                  Pilih Kategori
                </Card.Title>
              </div>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Mode1;
