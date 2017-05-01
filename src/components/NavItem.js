import React from "react";

const NavItem = ({url,children}) => {
    return (
        <a className="nav-item" href={url}>
            {children}
        </a>
    )
}

export default NavItem;