import * as React from 'react';

import Body from '../../Components/Body/Body';
import Footer from '../../Components/Footer/Footer';
import Header from '../../Components/Header/Header';

import Content from './Components/Content';

const Home = () => {
    return (
        <Body>
            <Header />
            <Content />
            <Footer />
        </Body>
    );
};

export default Home;
