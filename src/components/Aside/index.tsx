
import { useState } from 'react';
import { IMenu } from '../../data/IMenus';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Menus from '../../data/Menus';
import Aside from './index.style';
import { Link } from 'react-router-dom';

function AsideComponent() {
    const [ MenuData ] = useState(Menus);
    
    // const setActiveMenu = (index: number) => {
    //     const updateArray = [...MenuData];
        
    //     !updateArray[index].open && updateArray.map((item) => item.open = false);

    //     updateArray[index].open = !updateArray[index].open;
        
    //     setMenuData(updateArray);
    // }

    return (
        <Aside>
            <div className="logo"><img src="/images/logo.png" alt="logo" /></div>
            <div className="user-data">Olá João Carlos</div>
            {
                MenuData.map((menu: IMenu, menuKey: number) => {
                    return ( 
                        <div className="menu" key={menuKey}>
                            <Link to={menu.route} className="menu__button">
                                <FontAwesomeIcon icon={menu.icon} className="icon" />
                                {menu.label}
                                <FontAwesomeIcon icon="chevron-right" className="icon-arrow" />
                            </Link>
                            {/* <ul className="menu__list">
                                {
                                    menu.items.map((menuItem: IMenuItem, itemKey: number) => {
                                        return  menu.open ? 
                                                <li className="menu__list__item" key={itemKey}>
                                                    <Link to={menuItem.route} className="menu__list__item__btn">{menuItem.label}</Link>
                                                    <FontAwesomeIcon icon="chevron-right" />
                                                </li>
                                                : '';
                                    })
                                }
                            </ul> */}
                        </div>
                    )
                })
            }
        </Aside>
    )
}

export default AsideComponent;