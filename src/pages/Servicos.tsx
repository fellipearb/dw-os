import Container from '../theme/Container';
import AsideComponent from '../components/Aside';
import HeaderComponent from '../components/Header';
import React from 'react';
import ServicosListComponent from '../components/ServicosList';

function Servicos() {
    const data: any[] = [
        {
            id: 1,
            nome: 'Fellipe Barros',
            valor: 'R$ 10,99'
        },
        {
            id: 2,
            nome: 'Fellipe Barros',
            valor: 'R$ 10,99'
        },
        {
            id: 3,
            nome: 'Fellipe Barros',
            valor: 'R$ 10,99'
        },
        {
            id: 4,
            nome: 'Fellipe Barros',
            valor: 'R$ 10,99'
        },
        {
            id: 5,
            nome: 'Fellipe Barros',
            valor: 'R$ 10,99'
        },
        {
            id: 6,
            nome: 'Fellipe Barros',
            valor: 'R$ 10,99'
        },
        {
            id: 7,
            nome: 'Fellipe Barros',
            valor: 'R$ 10,99'
        },
        {
            id: 8,
            nome: 'Fellipe Barros',
            valor: 'R$ 10,99'
        }
    ];

    return (
        <>
            <Container>
                <AsideComponent />
                <div className="main-content">
                    <HeaderComponent />
                    <main>
                        <ServicosListComponent results={data}/>
                    </main>
                </div>
            </Container>
        </>
    )
}

export default Servicos;