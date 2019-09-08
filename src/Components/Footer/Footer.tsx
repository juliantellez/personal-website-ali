import * as React from 'react';
import {Link} from 'react-router-dom';

import RoutePath from '../../Routes/Constants/RoutePath';

import * as styles from './footer.scss';

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
