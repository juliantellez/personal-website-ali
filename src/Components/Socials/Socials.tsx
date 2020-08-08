import * as React from 'react';

import Anchor from '../Anchor';
import LinkedIn from '../Icons/LinkedIn';
import Mail from '../Icons/Mail';
import Pinterest from '../Icons/Pinterest';

import * as styles from './socials.scss';

interface IProps {
    linkedin: string;
    pinterest: string;
    instagram: string;
    mail: string;
}

const Socials = (props: IProps) => {
    return (
        <ul className={styles.list}>
            <li>
                <Anchor href={props.linkedin}>
                    <LinkedIn />
                </Anchor>
            </li>
            <li>
                <Anchor href={props.pinterest}>
                    <Pinterest />
                </Anchor>
            </li>
            <li>
                <Anchor href={props.mail}>
                    <Mail />
                </Anchor>
            </li>
        </ul>
    );
};

export default Socials;
