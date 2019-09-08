// tslint:disable:max-line-length

import * as React from 'react';

import * as styles from './Blog.scss';

const Blog = () => (
    <svg
        className={styles.blogIcon}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="-10 0 550 512"
    >
        <text x="135" y="290" className={styles.blogIconText}>
            Blog
        </text>
        <path d="M256.014 64.007c-141.163 0-256 86.144-256 192 0 46.72 22.187 91.008 62.805 125.973L4.003 429.02c-3.541 2.837-4.907 7.595-3.392 11.861 1.515 4.267 5.547 7.125 10.069 7.125h245.333c141.163 0 256-86.144 256-192S397.176 64.007 256.014 64.007zm0 362.666H41.102l45.376-36.309c2.581-2.048 4.053-5.163 4.011-8.448s-1.579-6.379-4.181-8.363c-41.899-32-64.96-73.728-64.96-117.547 0-94.101 105.28-170.667 234.667-170.667S490.68 161.905 490.68 256.007 385.4 426.673 256.014 426.673z" />
    </svg>
);

export default Blog;
