import React, { Fragment } from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { Row, Col } from 'reactstrap';
import PageTitle from '../../../Layout/AppMain/PageTitle';

// Components
import Curriculo from './Components/Curriculo';
import MidiaSocial from './Components/MidiaSocial';
import Objetivo from './Components/Objetivo';

const Basic = () => (
    <Fragment>
        <TransitionGroup>
            <CSSTransition
                component="div"
                className="TabsAnimation"
                appear={true}
                timeout={0}
                enter={false}
                exit={false}>
                <div>
                    <PageTitle
                        heading="Apresentação"
                        subheading="Esta é uma breve apresentação pessoal e dos meus objetivos."
                        icon="pe-7s-home icon-gradient bg-premium-dark"
                    />
                    <Row>
                        <Curriculo />
                        <Col md="12" lg="6" sm='12' xs='12'>
                            <MidiaSocial />
                            <Objetivo />
                        </Col>
                    </Row>
                </div>
            </CSSTransition>
        </TransitionGroup>
    </Fragment>
);

export default Basic;