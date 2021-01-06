import Container from '../theme/Container';
import AsideComponent from '../components/Aside';
import HeaderComponent from '../components/Header';
import React from 'react';
import ClientesListComponent from '../components/ClientesList';

function Clientes() {
    const data: any[] = [
        {
            id: 1,
            nome: 'Fellipe Barros',
            telefone: '(11) 4636-4659',
            celular: '(11) 99601-4603',
            email: 'fellipe1609@gmail.com'
        },
        {
            id: 2,
            nome: 'Fellipe Barros',
            telefone: '(11) 4636-4659',
            celular: '(11) 99601-4603',
            email: 'fellipe1609@gmail.com'
        },
        {
            id: 3,
            nome: 'Fellipe Barros',
            telefone: '(11) 4636-4659',
            celular: '(11) 99601-4603',
            email: 'fellipe1609@gmail.com'
        },
        {
            id: 4,
            nome: 'Fellipe Barros',
            telefone: '(11) 4636-4659',
            celular: '(11) 99601-4603',
            email: 'fellipe1609@gmail.com'
        },
        {
            id: 5,
            nome: 'Fellipe Barros',
            telefone: '(11) 4636-4659',
            celular: '(11) 99601-4603',
            email: 'fellipe1609@gmail.com'
        },
        {
            id: 6,
            nome: 'Fellipe Barros',
            telefone: '(11) 4636-4659',
            celular: '(11) 99601-4603',
            email: 'fellipe1609@gmail.com'
        },
        {
            id: 7,
            nome: 'Fellipe Barros',
            telefone: '(11) 4636-4659',
            celular: '(11) 99601-4603',
            email: 'fellipe1609@gmail.com'
        },
        {
            id: 8,
            nome: 'Fellipe Barros',
            telefone: '(11) 4636-4659',
            celular: '(11) 99601-4603',
            email: 'fellipe1609@gmail.com'
        }
    ];

    return (
        <>
            <Container>
                <AsideComponent />
                <div className="main-content">
                    <HeaderComponent />
                    <main>
                        <ClientesListComponent results={data}/>
                    </main>
                </div>
            </Container>
        </>
    )
}

export default Clientes;