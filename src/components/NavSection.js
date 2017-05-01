import React from "react";

const NavSection = ({children, pos}) => {
    return (
        <div className={`nav-${pos}`}>
            {children}
        </div>
    );
};

NavSection.propTypes = {
    pos: React.PropTypes.string.isRequired
};

export default NavSection;