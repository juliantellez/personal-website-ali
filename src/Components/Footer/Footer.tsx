import * as React from 'react';

import {Link} from 'react-router-dom';

import * as styles from './footer.scss';
import RoutePath from '../../Routes/Constants/RoutePath';

const Footer = () => {
    const getYear = () => new Date().getFullYear();

    return (
        <footer className={styles.footer}>
            <Link className={styles.footerLink} to={RoutePath.HOME}>
                www.aliway.co © {getYear()}
            </Link>
        </footer>
    );
};

export default Footer;
