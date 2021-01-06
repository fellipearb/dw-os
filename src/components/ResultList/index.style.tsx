import styled from 'styled-components';

const Table = styled.table`
    width: 100%;
    border: 1px solid; 
    margin: 20px 0;
    
    td, th {
        border: 1px solid;
        padding: 15px;

        &.actions {
            text-align: center;
            
            .icon {
                margin: 0 2px;
            }
        }
    }
    
`

export default Table;