import React from "react";
import NavSection from "./NavSection";
import NavItem from "./NavItem";

const NavBar = () => {
    return (
        <div className="nav">
            <NavSection pos="left">
                <NavItem>
                    <h1>Dashboard</h1>
                    <span className="icon">
                        <i className="fa fa-tachometer"></i>
                    </span>
                </NavItem>
                <NavItem>
                    <h1>Schools</h1>
                    <span className="icon">
                        <i className="fa fa-graduation-cap"></i>
                    </span>
                </NavItem>
                <h1>Athletes</h1>
                    <NavItem>
                    <span className="icon">
                        <i className="fa fa-users"></i>
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