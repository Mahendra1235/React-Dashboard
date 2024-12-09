import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import useWindowSize from 'hooks/useWindowSize';
import PrivateSection from 'routes/PrivateSection';
import PublicRoutes from 'routes/PublicRoutes';

function Routes() {
    const { pathname } = useLocation();
    // eslint-disable-next-line no-unused-vars
    const [width, height] = useWindowSize();
    const [isUserLoggedIn, setIsUserLoggedIn] = useState(false);

    useEffect(() => {

        const username = localStorage.getItem('username');
        

    if (username) {
        setIsUserLoggedIn(true);
    } else {
        setIsUserLoggedIn(false);
    }

    window.scrollTo(0,0);
    }, [pathname]);
    
            // let username = localStorage.getItem('username');
            // if (username) {
            //         setIsUserLoggedIn(true);
            //     } else {
            //         setIsUserLoggedIn(false);
            //     }


    // const isUserLoggedIn = true;
    // Implement logic to get username from localstorage/
console.log('user loggedIN', isUserLoggedIn);

    // Username present in loggedIn to be true : false
    return isUserLoggedIn ? <PrivateSection /> : <PublicRoutes />;
}


export default Routes;
