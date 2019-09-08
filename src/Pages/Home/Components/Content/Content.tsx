// tslint:disable:max-line-length

import * as React from 'react';

import {Link} from 'react-router-dom';

import * as styles from './Content.scss';
import Logo from '../../../../Components/Icons/Logo';

const Content = () => {
    const getWork = (link, img) => (
        <Link className={styles.contentWorksWork} to={link}>
            <img className={styles.contentWorksWorkImg} src={img} />
        </Link>
    )

    return (
        <div className={styles.content}>
            <section className={styles.contentSection}>
                <Logo />
                <div className={styles.contentSectionText}>
                    Hi I’m Ali, welcome to my online portfolio.
                    <br/>
                </div>
            </section>

            <section className={styles.contentSection}>
                <div className={styles.contentWorksTitle}>Beatiful & functional web designs.</div>
                <div className={styles.contentWorksBody}>
                    {getWork(
                    '/projects/amigos',
                    '/assets/images/projects/amigos.png')}
                    {getWork(
                    '/projects/santa-murs-website',
                    '/assets/images/projects/santa_murs_webiste.png')}
                    {getWork(
                    '/projects/latinos-in-london',
                    '/assets/images/projects/drills_guru_section.png')}
                    {getWork(
                    '/projects/laviston',
                    '/assets/images/projects/laviston.png')}
                </div>
            </section>

            <section className={`${styles.contentSection} ${styles.contentContact}`}>
                <div>Let's Talk,</div>
                <div>I'm always looking for new and exciting projects!</div>
                <Link to='/contact'>Contact Me Here</Link>
            </section>
        </div>
    );
};

export default Content;
