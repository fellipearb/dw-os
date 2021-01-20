import React, { useCallback, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import Table from '../ResultList/index.style';
import Modal from '../Modal';
import Input from '../Input';
import Button from '../Button';

const ClientListComponent: React.FC<any> = (props) => {
    const { results } = props;

    const [openModal, setOpenModal] = useState(false);

    const handleOpenModal = useCallback((item?) => {
        setOpenModal(!openModal);

        if(item) {
            setUpdateNome(item.nome);
            setUpdateTelefone(item.telefone);
            setUpdateCelular(item.celular);
            setUpdateEmail(item.email);
        }
    }, [openModal]);

    const [updateNome, setUpdateNome] = useState('');
    const handleUpdateNome = useCallback((e) => setUpdateNome(e.target.value), []);
    
    const [updateTelefone, setUpdateTelefone] = useState('');
    const handleUpdateTelefone = useCallback((e) => setUpdateTelefone(e.target.value), []);

    const [updateCelular, setUpdateCelular] = useState('');
    const handleUpdateCelular = useCallback((e) => setUpdateCelular(e.target.value), []);

    const [updateEmail, setUpdateEmail] = useState('');
    const handleUpdateEmail = useCallback((e) => setUpdateEmail(e.target.value), []);

    const headerText = 'Adicionar Cliente';

    return (
        <>
            <Modal 
                open={openModal}
                headerText={headerText}
                handleOpenModal={handleOpenModal}
            >
                <Input 
                    id="nome" 
                    name="nome" 
                    onChange={handleUpdateNome} 
                    value={updateNome} 
                    label="Nome"
                />
                <Input 
                    id="telefone" 
                    name="telefone" 
                    onChange={handleUpdateTelefone} 
                    value={updateTelefone} 
                    label="Telefone"
                />
                <Input 
                    id="celular" 
                    name="celular" 
                    onChange={handleUpdateCelular} 
                    value={updateCelular} 
                    label="Celular"
                />
                <Input 
                    id="email" 
                    name="email" 
                    onChange={handleUpdateEmail} 
                    value={updateEmail} 
                    label="E-mail"
                />
            </Modal>

            <div className="controlHeader">
                <Button onClick={handleOpenModal}>Adicionar Cliente</Button>
            </div>

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
                                        <FontAwesomeIcon icon="edit" className="icon" onClick={() => handleOpenModal(item)} />
                                        <FontAwesomeIcon icon="trash" className="icon" />
                                    </td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </Table>
        </>
    );
}

export default ClientListComponent;