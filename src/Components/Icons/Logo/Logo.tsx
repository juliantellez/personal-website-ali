// tslint:disable:max-line-length

import * as React from 'react';

interface IProps {
    className?: string;
}

const Logo = (props: IProps) => (
    <svg {...props} viewBox="0 0 388 330">
        <path
            fill="none"
            fillRule="evenodd"
            stroke="#4C4C4C"
            strokeWidth="35"
            d="M0 85h388H0zM36.073 9l158.923 303.114c.256.49.67.49.925 0L353.688 9"
        />
    </svg>
);

export default Logo;
