import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { Badge, Nav, NavItem, NavLink as RsNavLink } from 'reactstrap';
import classNames from 'classnames';
import nav from './_nav';
import SidebarFooter from './../SidebarFooter';
import SidebarForm from './../SidebarForm';
import SidebarHeader from './../SidebarHeader';
import SidebarMinimizer from './../SidebarMinimizer';

class Sidebar extends Component {
  /* eslint class-methods-use-this:0 */
  handleClick(e) {
    e.preventDefault();
    e.target.parentElement.classList.toggle('open');
  }

  activeRoute(routeName, props) {
    return props.location.pathname.indexOf(routeName) > -1 ? 'nav-item nav-dropdown open' : 'nav-item nav-dropdown';
  }

  render() {
    const { props, activeRoute, handleClick } = this;
    // badge addon to NavItem
    const badge = (badgeOb) => {
      if (badgeOb) {
        const classes = classNames(badgeOb.class);
        return (<Badge className={classes} color={badgeOb.variant}>{ badgeOb.text }</Badge>);
      }
      return 'not batdge';
    };

    // simple wrapper for nav-title item
    const wrapper = item => (
      item.wrapper && item.wrapper.element ? (
        React.createElement(item.wrapper.element, item.wrapper.attributes, item.name)) : item.name
    );

    // nav list section title
    const title = (titleV, key) => {
      const classes = classNames('nav-title', titleV.class);
      return (<li key={key} className={classes}>{wrapper(titleV)} </li>);
    };

    // nav list divider
    const divider = (dividerOb, key) => (<li key={key} className="divider" />);

    // nav item with nav link
    const navItem = (item, key) => {
      const classes = classNames(item.class);
      const isExternal = url => (url.substring(0, 4) === 'http');
      const variant = classNames('nav-link', item.variant ? `nav-link-${item.variant}` : '');
      return (
        <NavItem key={key} className={classes}>
          { isExternal(item.url) ?
            <RsNavLink href={item.url} className={variant} active>
              <i className={item.icon} />{item.name}{badge(item.badge)}
            </RsNavLink>
            :
            <NavLink to={item.url} className={variant} activeClassName="active">
              <i className={item.icon} />{item.name}{badge(item.badge)}
            </NavLink>
              }
        </NavItem>
      );
    };
    /* eslint no-use-before-define:0 */
    // nav list
    const navList = items => items.map((item, index) => navLink(item, index));
    // nav link
    const navLink = (item, idx) =>
      /* eslint no-nested-ternary:0 */
      (item.title ? title(item, idx) :
        item.divider ? divider(item, idx) :
          item.children ? navDropdown(item, idx)
            : navItem(item, idx));
    // nav dropdown
    /* eslint jsx-a11y/anchor-is-valid : 0 */
    const navDropdown = (item, key) => (
      <li key={key} className={activeRoute(item.url, props)}>
        <a className="nav-link nav-dropdown-toggle" href="#" onClick={handleClick}><i className={item.icon} />{item.name}</a>
        <ul className="nav-dropdown-items">
          {navList(item.children)}
        </ul>
      </li>);
    // sidebar-nav root
    return (
      <div className="sidebar">
        <SidebarHeader />
        <SidebarForm />
        <nav className="sidebar-nav">
          <Nav>
            {navList(nav.items)}
          </Nav>
        </nav>
        <SidebarFooter />
        <SidebarMinimizer />
      </div>
    );
  }
}

export default Sidebar;
