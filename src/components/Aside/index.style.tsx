import styled from 'styled-components';
import Colors from '../../theme/Colors';

const Aside = styled.aside`
    width: 250px;
    min-height: 100%;
    padding: 20px 15px;
    background: ${Colors.tertiary};
    color: #fff;

    .logo {
        width: 100%;

        img {
            max-width: 150px;
            margin: 0 auto;
            display: block;
        }
    }

    .user-data {
        margin: 20px 0;
        text-align: center;
        font-size: 15px;
    }

    .menu {
        &__button {
            width: 100%;
            height: 40px;
            padding: 0;
            border: none;
            background: none;
            color: #fff;
            text-align: left;
            font-size: 16px;
            display: flex;
            align-items: center;
            position: relative;
            text-decoration: none;

            .icon {
                margin-right: 15px;
            }

            .icon-arrow {
                position: absolute;
                right: 0;
            }
        }

        &__list {
            margin: 20px 0 20px 30px;

            &__item {
                display: flex;
                align-items: center;
                align-content: space-between;

                &__btn {
                    width: 100%;
                    height: 40px;
                    padding: 0;
                    border: none;
                    background: none;
                    text-align: left;
                    font-size: 14px;
                    color: #fff;
                    text-decoration: none;
                    display: flex;
                    align-items: center;
                }
            }
        }
    }
`

export default Aside;