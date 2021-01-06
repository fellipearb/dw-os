import styled from 'styled-components';
import Colors from '../../theme/Colors';

const Filter = styled.div`
    width: 100%;
    padding: 20px 0;
    display: flex;

    button {
        background: none;
        border: 2px solid ${Colors.primary};
        padding: 10px 20px;
        margin-right: 10px;
        border-radius: 3px;

        &:hover {
            background: ${Colors.primary};
            color: #fff;
        }
    }
`

export default Filter;