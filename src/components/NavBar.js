import React from "react";
import {Menu,Button} from "semantic-ui-react";

const NavBar = () => {
    return (
        <div>
            <h1>Welcome to trakr!</h1>
            <Menu fluid widths={4}>
            <Menu.Item name='dashboard'>
                Dashboard
            </Menu.Item>

            <Menu.Item name='schools'>
                Schools
            </Menu.Item>

            <Menu.Item name='athletes'>
                Athletes
            </Menu.Item>
            <Menu.Item name='login'>
                <Button color="green">Log In</Button>
            </Menu.Item>
        </Menu>
      </div>
    );
};

export default NavBar;