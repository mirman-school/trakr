import React from "react";
import NavSection from "./NavSection";
import NavItem from "./NavItem";

const NavBar = () => {
    return (
        <div className="nav">
            <NavSection pos="left">
                <NavItem>
                    <h1>Trakr</h1>
                </NavItem>
                <NavItem>
                    <span className="icon">
                        <i className="fa fa-rebel"></i>
                    </span>
                </NavItem>
            </NavSection>
            <NavSection pos="center">                
            </NavSection>
            <NavSection pos="right">
                <NavItem url="/login">
                    <h3 className="button is-primary">Login</h3>
                </NavItem>
            </NavSection>
        </div>
    );
};

export default NavBar;