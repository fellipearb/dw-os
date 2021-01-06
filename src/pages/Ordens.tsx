import Container from '../theme/Container';
import AsideComponent from '../components/Aside';
import HeaderComponent from '../components/Header';
import React from 'react';
import Table from '../components/ResultList';
import FilterComponent from '../components/ResultFilter';

function Ordens() {
    const data = [
        {
            id: 1844,
            nome: 'milka cordeiro',
            telefone: '(11) 9916-03352',
            equipamento: 'Notebook',
            marca: 'samsung',
            status: 'Cancelado',
            created_at: '2020-12-19 13:03:32',
            closed_at: ''
        },
        {
            id: 1845,
            nome: 'milka cordeiro',
            telefone: '(11) 9916-03352',
            equipamento: 'Notebook',
            marca: 'samsung',
            status: 'Cancelado',
            created_at: '2020-12-19 13:03:32',
            closed_at: ''
        },
        {
            id: 1846,
            nome: 'milka cordeiro',
            telefone: '(11) 9916-03352',
            equipamento: 'Notebook',
            marca: 'samsung',
            status: 'Cancelado',
            created_at: '2020-12-19 13:03:32',
            closed_at: ''
        },
        {
            id: 1847,
            nome: 'milka cordeiro',
            telefone: '(11) 9916-03352',
            equipamento: 'Notebook',
            marca: 'samsung',
            status: 'Cancelado',
            created_at: '2020-12-19 13:03:32',
            closed_at: ''
        },
        {
            id: 1848,
            nome: 'milka cordeiro',
            telefone: '(11) 9916-03352',
            equipamento: 'Notebook',
            marca: 'samsung',
            status: 'Cancelado',
            created_at: '2020-12-19 13:03:32',
            closed_at: ''
        },
        {
            id: 1849,
            nome: 'milka cordeiro',
            telefone: '(11) 9916-03352',
            equipamento: 'Notebook',
            marca: 'samsung',
            status: 'Cancelado',
            created_at: '2020-12-19 13:03:32',
            closed_at: ''
        },
        {
            id: 1850,
            nome: 'milka cordeiro',
            telefone: '(11) 9916-03352',
            equipamento: 'Notebook',
            marca: 'samsung',
            status: 'Cancelado',
            created_at: '2020-12-19 13:03:32',
            closed_at: ''
        }
    ];

    return (
        <>
            <Container>
                <AsideComponent />
                <div className="main-content">
                    <HeaderComponent />
                    <main>
                        <FilterComponent />
                        <div className="result">
                            <Table results={data} />
                        </div>
                    </main>
                </div>
            </Container>
        </>
    )
}

export default Ordens;