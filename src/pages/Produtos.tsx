import Container from '../theme/Container';
import AsideComponent from '../components/Aside';
import HeaderComponent from '../components/Header';
import React from 'react';
import ProdutosListComponent from '../components/ProdutosList';

function Produtos() {
    const data: any[] = [
        {
            id: 1,
            nome: 'Teclados',
            valor: 'R$ 10,99'
        },
        {
            id: 2,
            nome: 'Teclados',
            valor: 'R$ 10,99'
        },
        {
            id: 3,
            nome: 'Teclados',
            valor: 'R$ 10,99'
        },
        {
            id: 4,
            nome: 'Teclados',
            valor: 'R$ 10,99'
        },
        {
            id: 5,
            nome: 'Teclados',
            valor: 'R$ 10,99'
        },
        {
            id: 6,
            nome: 'Teclados',
            valor: 'R$ 10,99'
        },
        {
            id: 7,
            nome: 'Teclados',
            valor: 'R$ 10,99'
        },
        {
            id: 8,
            nome: 'Teclados',
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
                        <ProdutosListComponent results={data}/>
                    </main>
                </div>
            </Container>
        </>
    )
}

export default Produtos;