import * as React from 'react';

import '../../Shared/Styles/global.scss';

import * as styles from './body.scss';

interface IBodyProps {
    children?: JSX.Element[];
}

const Body = (props: IBodyProps) => (
    <div className={styles.main}>{props.children}</div>
);

export default Body;
