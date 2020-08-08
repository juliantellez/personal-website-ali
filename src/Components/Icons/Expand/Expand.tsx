// tslint:disable:max-line-length

import * as React from 'react';

interface IExpandProps {
    className: string;
}

const Expand: React.FC<IExpandProps> = (props) => (
  <svg {...props} viewBox="0 0 298.667 298.667">
    <path d="M42.667 192H0v106.667h106.667V256h-64zM0 106.667h42.667v-64h64V0H0zM192 0v42.667h64v64h42.667V0zM256 256h-64v42.667h106.667V192H256z" />
  </svg>
);

export default Expand;
