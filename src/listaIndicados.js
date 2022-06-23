import React from 'react';
import './App.css';
import Header from './components/Header/header';
import TitlePage from './components/TitlePage/titlePage';
import './listaIndicados.css';
import ItemListIndicated from './components/ItemListIndicated/ItemListIndicated'
import { AiOutlineArrowLeft, AiOutlineArrowRight } from 'react-icons/ai';

function ListaIndicados() {
    const steps = 3
    const [activeStep, setActiveStep] = React.useState(1);
    const data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

    const handleNextStep = () => {
        setActiveStep(activeStep + 1)
    }

    const handleBackStep = () => {
        setActiveStep(activeStep - 1)
    }

    return (
        <div className="container-lista-indicados">
            <Header />
            <div className='content-lista-indicados'>
                <TitlePage title="Os indicados" />
                <div className='buttons-action'>
                    {activeStep !== 1 && <AiOutlineArrowLeft onClick={() => handleBackStep()} />}
                    {activeStep !== 3 && <AiOutlineArrowRight onClick={() => handleNextStep()} className='icon-right' />}
                </div>
                {
                    {
                        1: <>< ItemListIndicated title="Melhores Filmes" data={data} />
                            <ItemListIndicated title="" data={data} />
                            <ItemListIndicated title="Melhor Ator" data={data} />
                            <ItemListIndicated title="" data={data} /></>,

                        2: <>< ItemListIndicated title="Melhor Diretor" data={data} />
                            <ItemListIndicated title="" data={data} />
                            <ItemListIndicated title="Melhor Atriz" data={data} />
                            <ItemListIndicated title="Melhor Ator Coadjuvante" data={data} /></>,

                        3: <>< ItemListIndicated title="Melhor Atriz Coadjuvante" data={data} />
                            <ItemListIndicated title="" data={data} />
                            <ItemListIndicated title="Melhor Roteiro Original" data={data} />
                            <ItemListIndicated title="Melhor Roteiro Adaptado" data={data} /></>
                    }[activeStep]
                }
            </div>
            <footer>
                <p>
                    Contato
                </p>
                <p>
                    GuessWhat 2022. Todos os direitos reservados
                </p>
            </footer>
        </div>
    );
}

export default ListaIndicados;
