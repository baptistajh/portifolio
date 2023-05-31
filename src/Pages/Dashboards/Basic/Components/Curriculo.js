import { Col, CardHeader, Card, CardBody } from 'reactstrap';
import jose from '../../../../assets/utils/images/jose.jpg';

const getIdade = (data_nascimento) => {
    let diferenca_ms = Date.now() - data_nascimento.getTime();
    let idade_data = new Date(diferenca_ms); 
    return Math.abs(idade_data.getUTCFullYear() - 1970);
}

const Curriculo = () => (
    <Col md="12" lg="6">
        <Card className="mb-3">
            <CardHeader className="card-header-tab">
                <div className="card-header-title">
                    <i className="header-icon lnr-user icon-gradient bg-dark"> </i>
                    Apresentação pessoal
                </div>
            </CardHeader>
            <CardBody>
                <div className="widget-content p-0">
                    <div className="widget-content-wrapper">
                        <div className="widget-content-left me-3">
                            <div className="widget-content-left" style={{height:'10%', width:'20%'}}>
                                <img width={120} className="rounded-circle" src={jose} alt="Avatar" />
                            </div>
                        </div>
                        <div className="widget-content-left flex2" style={{fontSize:'16px !important'}}>
                            <div className="widget-heading">José Henrique Baptista Junior</div>
                            <div className="widget-subheading opacity-9">Desenvolvedor Fullstack</div>
                            <div className="widget-subheading opacity-9">Brasileiro, solteiro, {getIdade(new Date('09-08-1999'))} anos</div>
                            <div className="widget-subheading opacity-9">Guariba - SP</div>
                            <div className="widget-subheading opacity-9">Celular: (16) 99707-3659</div>
                            <div className="widget-subheading opacity-9">E-mail: jhbaptista2016@gmail.com</div>
                            <hr/>
                        </div>
                    </div>
                </div>
                <div className="widget-content p-0 ms-2">
                    <div className="widget-content-wrapper">
                        <div className="widget-content-left flex2" style={{fontSize:'16px !important'}}>
                            <div className="widget-heading">Formação</div>
                            <div className="widget-subheading opacity-9">Ensino Médio ETEC – “Bento Carlos Botelho do Amaral” – Completo</div>
                            <div className="widget-subheading opacity-9">FATEC Taquaritinga – Analise e Desenvolvimento de Sistemas – Completo </div>
                            <hr/>
                            <div className="widget-heading">Atividade profissional exercida atualmente</div>
                            <div className="widget-subheading opacity-9">MITRA Sistemas de Informação - Março de 2020</div>
                            <div className="widget-subheading opacity-9">Principais atividades:</div>
                            <div className="widget-subheading opacity-9">
                                <ul>
                                    <li>Desenvolvimento de soluções para gestão municipal</li>
                                    <li>Desenvolvimento Back-End API Rest em Laravel</li>
                                    <li>Desenvolvimento Front-End em ReactJS</li>
                                    <li>Ingestão de dados com Talend Open Studio</li>
                                    <li>Disponibilização e criação de novos ambientes de produção</li>
                                </ul>
                            </div>
                            <hr/>
                            <div className="widget-heading">Qualificações e atividades complementares</div>
                            <div className="widget-subheading opacity-9">
                                <ul>
                                    <li>Curso especializante de informática</li>
                                    <li>Inglês intermediário</li>
                                    <li>CNH Categorias A e B</li>
                                    <li>Conhecimento e utilização de banco de dados relacionais</li>
                                    <li>Conhecimento e utilização de linguagens para desenvolvimento web</li>
                                    <li>Conhecimento e utilização de PHP</li>
                                    <li>Conhecimento e utilização do Framework Laravel</li>
                                    <li>Conhecimento e utilização de JavaScript</li>
                                    <li>Conhecimento e utilização do Framework ReactJS</li>
                                    <li>Conhecimento em Talend Open Studio for Big Data</li>
                                    <li>Conhecimento e utilização Framework SCRUM</li>
                                    <li>Conhecimento e utilização de Git e Github</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </CardBody>
        </Card>
    </Col>
);

export default Curriculo;