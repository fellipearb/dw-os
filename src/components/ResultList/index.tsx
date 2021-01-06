import Table from './index.style';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function TableComponent(props: any) {
    const { results } = props;

    return (
        <Table>
            <thead>
                <tr>
                    <th>#</th>
                    <th>Nome</th>
                    <th>Celular</th>
                    <th>Equipamento</th>
                    <th>Marca</th>
                    <th>Status</th>
                    <th>Data Entrada</th>
                    <th>Data Saída</th>
                    <th>Ações</th>
                </tr>
            </thead>
            <tbody>
                {
                    results.map((item: any) => {
                        return (
                            <tr key={item.id}>
                                <td>{item.id}</td>
                                <td>{item.nome}</td>
                                <td>{item.telefone}</td>
                                <td>{item.equipamento}</td>
                                <td>{item.marca}</td>
                                <td>{item.status}</td>
                                <td>{item.created_at}</td>
                                <td>{item.closed_at}</td>
                                <td className="actions">
                                    <FontAwesomeIcon icon="edit" className="icon" />
                                    <FontAwesomeIcon icon="print" className="icon" />
                                    <FontAwesomeIcon icon="trash" className="icon" />
                                </td>
                            </tr>
                        )
                    })
                }
            </tbody>
        </Table>
    );
}

export default TableComponent;