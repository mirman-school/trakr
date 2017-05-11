import React from "react";
import {Menu} from "semantic-ui-react";

const NavBar = () => {
    return (
        <div>
            <h1>It's working</h1>
            <Menu>
            <Menu.Item
            name='dashboard'
            >
            Dashboard
            </Menu.Item>

            <Menu.Item
            name='schools'
            >
            Schools
            </Menu.Item>

            <Menu.Item
            name='athletes'
            >
            Athletes
            </Menu.Item>
            <Menu.Item
            name='login'
            >
            Log In
            </Menu.Item>
        </Menu>
      </div>
    );
};

export default NavBar;