import * as React from 'react';
import {Route, Switch} from 'react-router';

import PagesPath from '../Constants/PagesPath';
import lazyImport from '../lazyImport';

import RoutePath from './Constants/RoutePath';

const Routes = () => {
    const HomePage = lazyImport(PagesPath.HOME, PagesPath.HOME, () =>
        Promise.resolve(true)
    );

    const ContactPage = lazyImport(PagesPath.CONTACT, PagesPath.CONTACT, () =>
        Promise.resolve(true)
    );

    return (
        <React.Suspense fallback={<div>loading...</div>}>
            <Switch>
                <Route component={ContactPage} path={RoutePath.CONTACT} />
                <Route component={HomePage} />
            </Switch>
        </React.Suspense>
    );
};

export default Routes;
