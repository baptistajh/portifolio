import { Row, Col } from 'reactstrap';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faCircleInfo } from '@fortawesome/free-solid-svg-icons';
import { faJs, faLaravel, faPhp, faReact } from '@fortawesome/free-brands-svg-icons';

const Objetivo = () => (
    <div className="card mb-3 widget-chart">
        <div className="widget-chart-content">
            <FontAwesomeIcon icon={faCircleInfo} size='3x'/>
            <div className="widget-numbers">
                Objetivo profissional
            </div>
            <div className="widget-heading text-align-justify">
                <p>
                    Busco atuar como desenvolvedor fullstack, 
                    utilizando minha experiência e conhecimentos 
                    nas linguagens PHP, Laravel, Javascript e 
                    React, para criar soluções tecnológicas 
                    eficientes e inovadoras. Meu objetivo é contribuir
                    para o desenvolvimento de aplicações web de alta 
                    qualidade, com interfaces intuitivas e ótima usabilidade, 
                    agregando valor aos clientes e usuários finais.
                </p>
                <p>
                    Tenho como meta aprimorar minhas habilidades técnicas, 
                    buscando sempre atualizar-me com as últimas tendências e 
                    melhores práticas no desenvolvimento de software. Com um 
                    forte domínio do PHP e do framework Laravel, posso projetar 
                    e implementar a lógica do back-end de forma robusta e 
                    escalável, garantindo a estabilidade e a segurança das 
                    aplicações.
                </p>
                <p>
                    No front-end, sou especializado em JavaScript e React,
                    e meu objetivo é criar interfaces responsivas e interativas,
                    proporcionando uma experiência do usuário envolvente e 
                    intuitiva. Tenho conhecimento em HTML, CSS e também nas
                    bibliotecas e ferramentas mais populares do ecossistema
                    React, como Redux e React Router.
                </p>
                <p>
                    Além das habilidades técnicas, busco ser um membro proativo
                    e colaborativo da equipe de desenvolvimento, contribuindo 
                    com minhas ideias e soluções para o sucesso dos projetos. 
                    Sou dedicado, organizado e possuo habilidades de resolução 
                    de problemas, o que me permite enfrentar desafios com 
                    confiança e encontrar as melhores soluções.
                </p>
                <p>
                    Estou sempre em busca de novos desafios e oportunidades 
                    para expandir meus conhecimentos e aprimorar minhas 
                    habilidades como desenvolvedor fullstack. Estou entusiasmado 
                    em trabalhar em projetos desafiadores, que me permitam 
                    aprender e crescer profissionalmente, ao mesmo tempo 
                    em que faço a diferença no desenvolvimento de soluções 
                    inovadoras e de alta qualidade.
                </p>
                <p>
                    Em resumo, meu objetivo profissional como desenvolvedor 
                    fullstack é utilizar minha experiência nas linguagens PHP, 
                    Laravel, Javascript e React para desenvolver aplicações 
                    web de qualidade, contribuindo para o sucesso da equipe 
                    e para a satisfação dos clientes. Estou comprometido 
                    em aprender continuamente e em me manter atualizado 
                    com as melhores práticas do mercado, visando sempre 
                    alcançar resultados excepcionais.
                </p>
            </div>
            <Row>
                <Col md="3" title='ReactJS'>
                    <a href='https://react.dev/' target='_blank' rel="noopener noreferrer">
                        <div className="card mb-3 widget-chart card-border">
                            <FontAwesomeIcon icon={faReact} style={{color: "#343a40"}} size='2x' />
                        </div>
                    </a>
                </Col>
                <Col md="3" title='Laravel'>
                    <a href='https://laravel.com/' target='_blank' rel="noopener noreferrer">
                        <div className="card mb-3 widget-chart card-border">
                            <FontAwesomeIcon icon={faLaravel} style={{color: "#343a40"}} size='2x' />
                        </div>
                    </a>
                </Col>
                <Col md="3" title='JavaScript'>
                    <a href='https://developer.mozilla.org/pt-BR/docs/Web/JavaScript' target='_blank' rel="noopener noreferrer">
                        <div className="card mb-3 widget-chart card-border">
                            <FontAwesomeIcon icon={faJs} style={{color: "#343a40"}} size='2x' />
                        </div>
                    </a>
                </Col>
                <Col md="3" title='PHP'>
                    <a href='https://www.php.net/' target='_blank' rel="noopener noreferrer">
                        <div className="card mb-3 widget-chart card-border">
                            <FontAwesomeIcon icon={faPhp} style={{color: "#343a40"}} size='2x' />
                        </div>
                    </a>
                </Col>
            </Row>
        </div>
    </div>
)

export default Objetivo;