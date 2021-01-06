import styled from 'styled-components';

const Container = styled.main`
    width: 100%;
    min-height: 100vh;
    display: flex;

    .main-content {
        width: calc(100% - 250px);
        padding: 90px 30px 30px;
        position: relative;
    }
`

export default Container;