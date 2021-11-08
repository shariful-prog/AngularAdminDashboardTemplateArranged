import { Injectable } from '@angular/core';

export interface BadgeItem {
    type: string;
    value: string;
}

export interface ChildrenItems {
    id?: string;
    router_link?: string;
    state: string;
    target?: boolean;
    name: string;
    type?: string;
    children?: ChildrenItems[];
}

export interface MainMenuItems {
    id?: string;
    router_link?: string;
    state: string;
    main_state?: string;
    target?: boolean;
    name: string;
    type: string;
    icon: string;
    badge?: BadgeItem[];
    children?: ChildrenItems[];
}

export interface Menu {
    label: string;
    cms_name: string;
    main: MainMenuItems[];
}

const MenuList = [
    {
        label: 'Navigation',
        cms_name: 'Base CMS',
        main: [
            {
                id: 'dashboard',
                state: 'dashboard',
                name: 'Dashboard',
                type: 'link',
                icon: 'fas fa-home',
                router_link: 'dashboard',
                user_type:'admin'
            },
            {
                id: 'demo',
                state: 'user',
                name: 'Demo',
                type: 'sub',
                icon: 'fas fa-id-card',
                user_type:'admin',
                children: [
                    {id: 'surah',user_type:'admin', state: 'surah', name: 'surah', type: 'link', router_link: 'demo' },
                    {id: 'courses',user_type:'user', state: 'courses', short_label: 'A', name: 'courses', type: 'link', }
                ]
            },
            {
                id: 'cont',
                state: 'user',
                name: 'Contents',
                type: 'sub',
                icon: 'fas fa-book',
                children: [
                    { id: 'quran', state: 'surah', name: 'Quran', type: 'link', router_link: 'nt'  },
                    {
                        id: 'courses',
                        state: 'courses',
                        short_label: 'A',
                        name: 'Quiz Courses',
                        type: 'sub',
                        children: [
                            { id: 'quiz', state: 'quiz', name: 'Quiz', target: false, type: 'link', },
                            {
                                id: 'answer', state: 'answer', type: 'sub', name: 'Quiz Answer', target: false,
                                children: [
                                    { id: 'colevel3ntents', state: 'level3', name: 'Level3 Menu', target: false, type: 'link', },
                                    { id: 'level3', state: 'Level3 Menu', name: 'Level3 Menu2', target: false, type: 'link', },
                                ]
                            },
                        ]
                    },
                ]
            },
    
        ],
    }
];

@Injectable()
export class MenuItems {
    getAll(): Menu[] {
        return MenuList;
    }

    /*add(menu: Menu) {
      MenuList.push(menu);
    }*/
}



