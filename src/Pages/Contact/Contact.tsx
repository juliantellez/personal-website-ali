import * as React from 'react';

import Body from '../../Components/Body/Body';
import Footer from '../../Components/Footer/Footer';
import Header from '../../Components/Header/Header';
import Socials from '../../Components/Socials';

import * as styles from './contact.scss';

const ContactPage = () => {
    return (
        <Body>
            <Header />
            <main className={styles.contact}>
                <div className={styles.contactText}>
                    I'm always looking for exciting projects to work on, feel
                    free to drop me an inbox at anytime!
                </div>

                <div className={styles.contactTitle}>Follow my work</div>
                <Socials
                    linkedin="https://www.linkedin.com/in/jelena-gubina-b0628824/"
                    dribble="https://dribbble.com/vilvity/"
                    pinterest="https://www.pinterest.co.uk/alionagubina/"
                    instagram="https://www.facebook.com/aliona.gubina/"
                    mail="mailto:jgubina@gmail.com?Subject=Hi%20Ali"
                />
            </main>
            <Footer />
        </Body>
    );
};

export default ContactPage;
