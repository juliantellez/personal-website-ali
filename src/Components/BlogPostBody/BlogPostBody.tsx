import 'prismjs/themes/prism-tomorrow.css?raw';
import * as React from 'react';

import * as styles from './BlogPostBody.scss';

interface IBlogPostBody {
    body: string;
}

const BlogPostBody = (props: IBlogPostBody) => {
    const createMarkup = () => {
        return {__html: props.body};
    };

    return (
        <div
            className={styles.blogPostBody}
            dangerouslySetInnerHTML={createMarkup()}
        />
    );
};

export default BlogPostBody;
