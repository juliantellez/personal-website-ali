import * as React from 'react';

import Anchor from '../Anchor';
import Dribble from '../Icons/Dribble';
import Instagram from '../Icons/Instagram';
import LinkedIn from '../Icons/LinkedIn';
import Mail from '../Icons/Mail';
import Pinterest from '../Icons/Pinterest';

import * as styles from './socials.scss'

interface IProps {
    linkedin: string;
    dribble: string;
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
                <Anchor href={props.dribble}>
                    <Dribble />
                </Anchor>
            </li>
            <li>
                <Anchor href={props.pinterest}>
                    <Pinterest />
                </Anchor>
            </li>
            <li>
                <Anchor href={props.instagram}>
                    <Instagram />
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
