import { IconProp } from '@fortawesome/fontawesome-svg-core';

export interface IMenu {
    id: number;
    icon: IconProp;
    label: string;
    open: boolean;
    items: Array<IMenuItem>;
    route: string;
}

export interface IMenuItem {
    // icon: IconProp;
    action: string;
    route: string;
    label: string;
}

// export interface IMenus { IMenu: []; }

// export interface IMenuItems { IMenuItem: []; }