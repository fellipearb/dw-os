import {IMenu} from './IMenus';

const Menus: Array<IMenu> = [
    {
        id: 1,
        label: 'Clientes',
        open: false,
        icon: 'users',
        route: '/clientes',
        items: [
            {
                action: 'add',
                route: '/clientes/adicionar',
                label: 'Adicionar'
            },
            {
                action: 'all',
                route: '/clientes',
                label: 'Ver todos'
            }
        ]
    },
    {
        id: 2,
        label: 'Tipos de serviço',
        open: false,
        icon: 'paint-roller',
        route: '/servicos',
        items: [
            {
                action: 'add',
                route: '/servicos/adicionar',
                label: 'Adicionar'
            },
            {
                action: 'all',
                route: '/servicos',
                label: 'Ver todos'
            }
        ]
    },
    {
        id: 3,
        label: 'Produtos',
        open: false,
        icon: 'shopping-cart',
        route: '/produtos',
        items: [
            {
                action: 'add',
                route: '/produtos/adicionar',
                label: 'Adicionar'
            },
            {
                action: 'all',
                route: '/produtos',
                label: 'Ver todos'
            }
        ]
    },
    {
        id: 4,
        label: 'Ordens de serviço',
        open: false,
        icon: 'newspaper',
        route: '/ordens',
        items: [
            {
                action: 'add',
                route: '/ordens/adicionar',
                label: 'Adicionar'
            },
            {
                action: 'all',
                route: '/ordens',
                label: 'Ver todos'
            }
        ]
    }
];

export default Menus;