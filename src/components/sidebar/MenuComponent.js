import React, { useState } from 'react';
import { useTheme } from 'react-jss';
import { slide as Menu } from 'react-burger-menu';
import { faBars, faTimes } from '@fortawesome/fontawesome-free-solid';
import IconBurger from 'assets/icons/icon-burger';


const getMenuStyles = ({ theme }) => ({
    bmBurgerButton: {
        position: 'absolute',
        width: 26,
        height: 20,
        left: 30,
        top: 40,
        zIndex: 19
    },

    bmMenuWrap: {
        position: 'fixed',
        height: '100%',
        width: 255,
        zIndex: 30
    },
    bmMenu: {
        background: theme.color.veryDarkGrayishBlue
    },
    bmItem: {
        outline: 'none',
        '&:focus': {
            outline: 'none'
        }
    },
    bmMorphShape: {
        fill: theme.color.veryDarkGrayishBlue
    },
    bmOverlay: {
        background: 'rgba(0, 0, 0, 0.3)',
        zIndex: 20
    }
});

function MenuComponent({ children, isMobile }) {
    const theme = useTheme();
    const menuStyles = getMenuStyles({ theme });
    const [isOpen, setIsOpen] = useState(false);
    const toggleSidebar = () => {
        setIsOpen((prevState) => !prevState);
    };



    return (<div> 

        {<button onClick={toggleSidebar}><IconBurger/></button>}

        <Menu
            isOpen={!isMobile || isOpen}
            noOverlay={!isMobile}
            disableCloseOnEsc
            styles={menuStyles}
            onStateChange={(state) => setIsOpen(state.isOpen)}
            
        >
            {children}
        </Menu>
    </div>
);
}

export default MenuComponent;
