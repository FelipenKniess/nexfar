import React from 'react';
import { Link } from 'react-router-dom';
import { AiOutlineShop } from 'react-icons/ai';
import { SidebarDataPurchases, SidebarDataAdministrative, SidebarDataHelp } from './SideBarData';
import { Container } from './styles';

const Navbar = () => (
  <>
    <Container>
      <div className="establishment">
        <AiOutlineShop size={40} />
        <div>
          <span className="title">Farmácia da ilha</span>
          <span className="cnpj">
            000.000.000/0000-00
          </span>
        </div>
      </div>
      <ul className="nav-menu-items">
        <span className="title-submenu">
          Compras
        </span>

        {SidebarDataPurchases.map(({
          cName, icon, path, title,
        }) => (
          <li key={title} className={cName}>
            <Link to={path}>
              {icon}
              <span>{title}</span>
            </Link>
          </li>
        ))}

        <span className="title-submenu">
          Administrativo
        </span>

        {SidebarDataAdministrative.map(({
          cName, icon, path, title,
        }) => (
          <li key={title} className={cName}>
            <a href={path}>
              {icon}
              <span>{title}</span>
            </a>
          </li>
        ))}

        <span className="title-submenu">
          Ajuda
        </span>

        {SidebarDataHelp.map(({
          cName, icon, path, title,
        }) => (
          <li key={title} className={cName}>
            <a href={path}>
              {icon}
              <span>{title}</span>
            </a>
          </li>
        ))}
      </ul>
    </Container>

  </>
);

export default Navbar;
