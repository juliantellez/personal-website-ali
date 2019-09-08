import * as React from 'react';
import {Link} from 'react-router-dom';

import RoutePath from '../../Routes/Constants/RoutePath';
import Logo from '../Icons/Logo';

import * as styles from './header.scss';

const Header = () => {
    return (
        <header className={styles.header}>
            <nav className={styles.headerNav}>
                <Link to={RoutePath.HOME}>
                    <Logo className={styles.headerLogo} />
                </Link>

                {/* {<ul className={styles.headerLinks}>
                    <li>
                        <Link>
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link>
                            About
                        </Link>
                    </li>
                    <li>
                        <Link>
                            Projects
                        </Link>
                    </li>
                    <li>
                        <Link>
                            Contact
                        </Link>
                    </li>
                </ul>} */}
            </nav>
        </header>
    );
};

export default Header;
