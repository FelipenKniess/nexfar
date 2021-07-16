import React, { ReactElement } from 'react';
import * as HiIcons from 'react-icons/hi';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';

export type SideBarDataType = {
  title: string,
  path: string,
  icon: ReactElement,
  cName: string
}

export const SidebarDataPurchases:SideBarDataType[] = [
  {
    title: 'Promoções',
    path: '/promocoes',
    icon: <AiIcons.AiOutlineFire size={25} />,
    cName: 'nav-text',
  },
  {
    title: 'Produtos',
    path: '/produtos',
    icon: <FaIcons.FaBox size={20} />,
    cName: 'nav-text',
  },
  {
    title: 'Pedidos',
    path: '/pedidos',
    icon: <IoIcons.IoMdPaper size={25} />,
    cName: 'nav-text',
  },
  {
    title: 'Cupons',
    path: '/cupons',
    icon: <HiIcons.HiOutlineTicket size={25} />,
    cName: 'nav-text',
  },
];

export const SidebarDataAdministrative:SideBarDataType[] = [
  {
    title: 'Estabelecimentos',
    path: '/estabelecimentos',
    icon: <AiIcons.AiOutlineShop size={25} />,
    cName: 'nav-text',
  },
];

export const SidebarDataHelp:SideBarDataType[] = [
  {
    title: 'Whatsapp',
    path: '/whatsapp',
    icon: <AiIcons.AiOutlineWhatsApp size={25} />,
    cName: 'nav-text',
  },
  {
    title: 'Contato Distribuidora',
    path: '/contato',
    icon: <AiIcons.AiOutlinePhone size={25} />,
    cName: 'nav-text',
  },
];
