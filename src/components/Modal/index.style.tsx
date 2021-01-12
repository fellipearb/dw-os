import styled from 'styled-components';
import Colors from '../../theme/Colors';

const Modal = styled.div`
    width: 100%;
    height: 100%;
    position: fixed;
    top: 0;
    left: 0;
    background: rgba(255, 255, 255, .8);
    display: flex;
    align-items: center;
    justify-content: center;

    .modal {
        width: 400px;
        border: 1px solid ${Colors.secondary};
        background: #fff;

        &__header {
            width: 100%;
            height: 60px;
            position: relative;
            display: flex;
            align-items: center;
            justify-content: center;
            background: ${Colors.tertiary};
            color: #fff;
        }

        &__footer {
            display: flex;
            align-items: center;
            justify-content: flex-end;
            padding: 20px;
        }

        &__content {
            padding: 15px 15px 0;
        }

        &__close {
            position: absolute;
            right: 0;
            padding: 10px;
            border: none;
            background: none;
            color: #fff;
        }

        &__cancel, &__save {
            padding: 10px;
            border: 1px solid;
            background: none;
            border-radius: 3px;
        }

        &__cancel {
            margin-right: 5px;
        }
    }
`

export default Modal;