import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default function Footer() {
  return (
    <>
      <Row className='footer_flex'>
        <Col>
          <h2>LICORERIA Gadiel & Caleb</h2>
          <hr />
          <p>FIDELIDAD | DIGITAL | SOCIOS & CLIENTES | BLOG |</p>
          <p>CONTACTO</p>
        </Col>
        <Col>
          <p>VISITANOS EN REDES</p>
          <div>
            <p><i className="bi bi-whatsapp"></i> 951-253-215</p>
            <p><i className="bi bi-facebook"></i> Facebook</p>
            <p><i className="bi bi-instagram"></i> instagran</p>
          </div>
        </Col>
        <Col>
          <h2>INFORMACIÓN LEGAL</h2>
          <p>Politica de privacidad | Aviso legal | Politica de cookies</p>
        </Col>
      </Row>
    </>
  )
}