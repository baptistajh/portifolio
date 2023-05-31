import React, { Fragment } from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { Card, CardHeader, CardBody, CardFooter, Label, Input, Button } from 'reactstrap';
import PageTitle from '../../../Layout/AppMain/PageTitle';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import { faArrowLeft, faCheck } from '@fortawesome/free-solid-svg-icons';
import SumarioFibonacci from './Components/SumarioFibonacci';

const solucao = `
const calcular = () => {
    let sequencia = document.querySelector('#inpt_sequencia').value;
    document.querySelector('#inpt_resultado').value = '';
    if(sequencia == '' ){
        return
    }
    if (sequencia < 2){
        document.querySelector('#inpt_resultado').value = sequencia;
    }
    else{
        let i = 1;
        let numero;
        let penultimo=0, ultimo=1;
        while(i < sequencia){
            numero = ultimo + penultimo;
            penultimo = ultimo;
            ultimo = numero;
            i++;
        }
        document.querySelector('#inpt_resultado').value = numero;
    }
}
`

const While = () => {

    const calcular = () => {
        let sequencia = document.querySelector('#inpt_sequencia').value;
        document.querySelector('#inpt_resultado').value = '';
        if(sequencia == '' ){
            return
        }
        if (sequencia < 2){
            document.querySelector('#inpt_resultado').value = sequencia;
        }
        else{
            let i = 1;
            let numero;
            let penultimo=0, ultimo=1;
            while(i < sequencia){
                numero = ultimo + penultimo;
                penultimo = ultimo;
                ultimo = numero;
                i++;
            }
            document.querySelector('#inpt_resultado').value = numero;
        }
    }
    return(
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
                            heading="Sequência de fibonacci"
                            subheading="Resolvendo com o laço while"
                            icon="pe-7s-tools icon-gradient bg-premium-dark"
                        />
                        <Card>
                            <CardHeader>
                                Resolvendo com o laço while
                            </CardHeader>
                            <CardBody>
                                <SumarioFibonacci/>
                                <br/>
                                <Label id='lbl_sequencia' htmlFor='sequencia' >Sequência</Label>
                                <Input
                                    id="inpt_sequencia"
                                    name="sequencia"
                                    type="number"
                                />
                                <br/>
                                <Label id='lbl_resultado' htmlFor='resultado' >Resultado</Label>
                                <Input
                                    id="inpt_resultado"
                                    name="resultado"
                                    type="number"
                                    disabled
                                />
                                <br/>
                                <details>
                                    <summary>Solução</summary>
                                    <div className='text-align-justify font-size-md'>
                                        <p>Ao clicar no botão calcular ele chamará a função abaixo:
                                            <pre><code className='code'>{solucao}</code></pre>
                                        </p>
                                    </div>
                                </details>
                            </CardBody>
                            <CardFooter className="align-right">
                                <Link to='/'>
                                    <Button color={"secondary"} className="btn btn-xl" type="button">
                                        <FontAwesomeIcon icon={faArrowLeft}/>
                                        <span className="ml-2">Voltar</span>
                                    </Button>
                                </Link>
                                <Button color={"success"} className="btn btn-xl ml-10" type="button" onClick={()=>calcular()}>
                                    <FontAwesomeIcon icon={faCheck}/>
                                    <span className="ml-2">Calcular</span>
                                </Button>
                            </CardFooter>
                        </Card>
                    </div>
                </CSSTransition>
            </TransitionGroup>
        </Fragment>
    );
}

export default While;