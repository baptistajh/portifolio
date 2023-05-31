import { Row, Col } from 'reactstrap';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faInstagram, faGithub, faLinkedinIn, faWhatsapp } from '@fortawesome/free-brands-svg-icons';

const MidiaSocial = () => (
    <Row>
        <Col md="3" title='Instagram'>
            <a href='https://www.instagram.com/baptistajh/' target='_blank' rel="noopener noreferrer">
                <div className="card mb-3 bg-dark widget-chart text-white card-border">
                    <FontAwesomeIcon icon={faInstagram} style={{color: "#ffffff"}} size='2x' />
                </div>
            </a>
        </Col>
        <Col md="3" title='GitHub'>
            <a href='https://github.com/baptistajh' target='_blank' rel="noopener noreferrer">
                <div className="card mb-3 bg-dark widget-chart text-white card-border">
                    <FontAwesomeIcon icon={faGithub} style={{color: "#ffffff"}} size='2x' />
                </div>
            </a>
        </Col>
        <Col md="3" title='LinkedIn'>
            <a href='https://www.linkedin.com/in/jos%C3%A9-henrique-baptista-junior-259a26153/' target='_blank' rel="noopener noreferrer">
                <div className="card mb-3 bg-dark widget-chart text-white card-border">
                    <FontAwesomeIcon icon={faLinkedinIn} style={{color: "#ffffff"}} size='2x' />
                </div>
            </a>
        </Col>
        <Col md="3" title='WhatsApp'>
            <a href='https://web.whatsapp.com/send?phone=5516997073659&text=Ol%C3%A1+Jos%C3%A9+Henrique%2C+tudo+bem%3F+Encontrei+seu+n%C3%BAmero+atrav%C3%A9s+do+seu+portif%C3%B3lio+online.' target='_blank' rel="noopener noreferrer">
                <div className="card mb-3 bg-dark widget-chart text-white card-border">
                    <FontAwesomeIcon icon={faWhatsapp} style={{color: "#ffffff"}} size='2x' />
                </div>
            </a>
        </Col>
    </Row>
)

export default MidiaSocial;