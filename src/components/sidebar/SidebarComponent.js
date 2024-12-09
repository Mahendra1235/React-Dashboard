import React, { useState, useEffect } from 'react'; 
import { createUseStyles, useTheme } from 'react-jss';
import { useHistory } from 'react-router-dom';
import SLUGS from 'resources/slugs';
import {
    IconAgents,
    IconArticles,
    IconContacts,
    IconOverview,
    IconSubscription,
    IconLogout,
    IconBurger,
} from 'assets/icons';
import { convertSlugToUrl } from 'resources/utilities';
import LogoComponent from './LogoComponent';
import Menu from './MenuComponent';
import MenuItem from './MenuItemComponent';

const useStyles = createUseStyles({
    separator: {
        borderTop: ({ theme }) => `1px solid ${theme.color.lightGrayishBlue}`,
        marginTop: 16,
        marginBottom: 16,
        opacity: 0.06,
    },
    sidebar: {
        position: 'fixed',
        top: 0,
        left: 0,
        width: 270,
        height: '100vh',
        backgroundColor: '#fff',
        transition: 'transform 0.3s ease-in-out',
        zIndex: 1000, // Ensure the sidebar is above other elements
    },
    sidebarClosed: {
        transform: 'translateX(-100%)', // Sidebar will slide out (hidden)
    },
    sidebarOpen: {
        transform: 'translateX(0)', // Sidebar is visible
    },
    toggleButton: {
        position: 'fixed',
        top: 20,
        left: 20,
        zIndex: 1001, // Button is above the sidebar
        backgroundColor: 'transparent',
        border: 'none',
        fontSize: '24px',
        cursor: 'pointer',
    },
});

function SidebarComponent() {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false); // Sidebar is initially closed
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 1580); // Dynamic mobile check
    const { push } = useHistory();
    const theme = useTheme();
    const classes = useStyles({ theme });

    // Handle window resize to check if it is mobile
    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 1580);
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    // Function to close the sidebar
    const closeSidebar = () => {
        setIsSidebarOpen(false); // Close the sidebar
    };

    // Function to toggle the sidebar visibility
    const toggleSidebar = () => {
        console.log('sidebar', isSidebarOpen)
        setIsSidebarOpen((prevState) => !prevState); // Toggle between open and closed
        console.log('sidebar1', isSidebarOpen)

    };

    // Handle menu item click and close sidebar if necessary
    function onClick(slug, parameters = {}) {
        push(convertSlugToUrl(slug, parameters));
        closeSidebar();  // Close the sidebar on any menu item click
    }

    // Handle logout and redirect
    async function logout() {
        push(SLUGS.login);
    }

    return (
        <div>
            {/* Toggle button for opening/closing sidebar */}
            {/* {isMobile && (
                <button
                    className={classes.toggleButton}
                    onClick={toggleSidebar}
                >
                    <IconBurger />
                </button>
            )} */}

            {/* Sidebar container */}
            {/* <div className={`${classes.sidebar} ${!isSidebarOpen ? classes.sidebarClosed : classes.sidebarOpen}`}> */}
                <Menu isMobile={isMobile}>
                    <div style={{ paddingTop: 30, paddingBottom: 30 }}>
                        <LogoComponent />
                    </div>

                    {/* Dashboard Menu Item */}
                    <MenuItem
                        id={SLUGS.dashboard}
                        title="Dashboard"
                        icon={IconSubscription}
                        onClick={() => onClick(SLUGS.dashboard)} // Close sidebar on click
                    />

                    {/* Overview Menu Item with Sub-items */}
                    <MenuItem
                        id={SLUGS.overview}
                        items={[SLUGS.overviewTwo, SLUGS.overview]}
                        title="Overview"
                        icon={IconOverview}
                    >
                        <MenuItem
                            id={SLUGS.overview}
                            title="Area Chart"
                            level={2}
                            icon={IconAgents}
                            onClick={() => onClick(SLUGS.overview)}
                        />
                        <MenuItem
                            id={SLUGS.overviewTwo}
                            title="Pie Chart"
                            level={2}
                            icon={IconContacts}
                            onClick={() => onClick(SLUGS.overviewTwo)}
                        />
                        <MenuItem
                            id={SLUGS.overviewThree}
                            title="Bar Chart"
                            level={2}
                            icon={IconArticles}
                            onClick={() => onClick(SLUGS.overviewThree)}
                        />
                    </MenuItem>

                    <MenuItem id="logout" title="Logout" icon={IconLogout} onClick={logout} />
                </Menu>
            </div>
        // </div>
    );
}

export default SidebarComponent;
