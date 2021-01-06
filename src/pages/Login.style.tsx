import styled from 'styled-components';
import Colors from '../theme/Colors';

const LoginContainer = styled.div`
    width: 100%;
    height: 100vh;
    padding: 0 30px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    background: url(/images/checking-current-in-laptop-circuit-board.jpg) no-repeat;
    background-size: cover;
    background-position: center;
    
    .login-form {
        width: 300px;
        background: #fff;
        padding: 20px;
        border-radius: 5px;
        
        .logo {
            width: 150px;
            display: block;
            margin: 0 auto 30px;
        }
    
        .welcome-text {
            margin-bottom: 30px; 
            color: #000;
        }

        .btn {
            width: 100%;
            height: 40px;
            background: ${Colors.primary};
            color: #fff;
            border: none;
        }
    }

`

export default LoginContainer;