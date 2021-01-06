import Filter from './index.style';
import Input from '../Input';

function FilterComponent() {
    return (
        <>
            <Filter>
                <button>Orçamento</button>
                <button>Aprovado</button>
                <button>Cancelado</button>
                <button>Realizando</button>
                <button>Concluído</button>
                <button>Entregue</button>
            </Filter>
        
            <label htmlFor="buscar">Buscar</label>
            <Input id="buscar" placeholder="Busque por: id, nome, marca, identificação telefone e status" />
        </>
    );
}

export default FilterComponent;