import * as React from 'react';
import {Route, Switch} from 'react-router';

import PagesPath from '../Constants/PagesPath';
import lazyImport from '../lazyImport';
import RoutePath from './Constants/RoutePath';

const Routes = () => {
    const Home = lazyImport(PagesPath.HOME, PagesPath.HOME, () =>
        Promise.resolve(true)
    );

    const Contact = lazyImport(PagesPath.CONTACT, PagesPath.CONTACT, () =>
        Promise.resolve(true)
    );

    return (
        <React.Suspense fallback={<div>loading...</div>}>
            <Switch>
                <Route component={Contact} path={RoutePath.CONTACT} />
                <Route component={Home} />
            </Switch>
        </React.Suspense>
    );
};

export default Routes;
