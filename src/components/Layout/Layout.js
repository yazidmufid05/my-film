import React from 'react';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import Container from './Container';

const Layout = (props) => {
    const children = props.children
    return (
        <div>
            <Navbar />
            <Container></Container>
             {children}
            <Footer />
        </div>
    );
}

export default Layout;
