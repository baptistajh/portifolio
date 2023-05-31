import React, {Component, Fragment} from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { Row, Col } from 'reactstrap';
import PageTitle from '../../../Layout/AppMain/PageTitle';

// Components
import Curriculo from './Components/Curriculo';
import MidiaSocial from './Components/MidiaSocial';
import Objetivo from './Components/Objetivo';

export default class AnalyticsDashboard1 extends Component {
    constructor() {
        super();

        this.state = {
            dropdownOpen: false,
            activeTab1: '11',

        };
        this.toggle = this.toggle.bind(this);
        this.toggle1 = this.toggle1.bind(this);

    }

    toggle() {
        this.setState(prevState => ({
            dropdownOpen: !prevState.dropdownOpen
        }));
    }

    toggle1(tab) {
        if (this.state.activeTab1 !== tab) {
            this.setState({
                activeTab1: tab
            });
        }
    }

    render() {

        return (
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
                                <Col md="12" lg="6">
                                    <MidiaSocial />
                                    <Objetivo />
                                </Col>
                            </Row>
                        </div>
                    </CSSTransition>
                </TransitionGroup>
            </Fragment>
        )
    }
}
