import Table from '../ResultList/index.style';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function ClientListComponent(props: any) {
    const { results } = props;

    return (
        <Table>
            <thead>
                <tr>
                    <th>#</th>
                    <th>Nome</th>
                    <th>Telefone</th>
                    <th>Celular</th>
                    <th>Email</th>
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
                                <td>{item.celular}</td>
                                <td>{item.email}</td>
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

export default ClientListComponent;