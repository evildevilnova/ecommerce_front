import React from 'react';
import Header from '../Header';
import ManuHeader from '../ManuHeader';

const Layout = (props) => {
    return (
        <div>
            <Header />
            <ManuHeader />
            {props.children}
        </div>
    )
};

export default Layout;
