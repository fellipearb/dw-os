import Table from '../ResultList/index.style';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function ServicosListComponent(props: any) {
    const { results } = props;

    return (
        <Table>
            <thead>
                <tr>
                    <th>#</th>
                    <th>Nome</th>
                    <th>Valor</th>
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
                                <td>{item.valor}</td>
                                <td className="actions">
                                    <FontAwesomeIcon icon="edit" className="icon" />
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

export default ServicosListComponent;