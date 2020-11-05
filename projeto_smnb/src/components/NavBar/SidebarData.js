import React from 'react'
import * as VscIcons from "react-icons/vsc";
import * as IoIcons from "react-icons/io";

export const SidebarData = [
{
    title: 'Consultas',
    path: '/schedule',
    icon: <IoIcons.IoIosPaper />,
    cName: 'nav-text'
},
{
    title: 'Meu Perfil',
    path: '/perfil',
    icon: <VscIcons.VscAccount />,
    cName: 'nav-text'
},
{
    title: 'Sair',
    path: '/',
    icon: <VscIcons.VscSignOut />,
    cName: 'nav-text'
}]
