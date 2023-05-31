import { Route, Redirect } from "react-router-dom";
import React, {Suspense, lazy, Fragment} from 'react';

import {
    ToastContainer,
} from 'react-toastify';

const Dashboards = lazy(() => import('../../Pages/Dashboards'));
const Fibonacci  = lazy(() => import('../../Pages/Fibonacci'));

const AppMain = () => {

    return (
        <Fragment>

            {/* Dashboards */}
            <Suspense fallback={
                <div className="loader-container">
                    <div className="loader-container-inner">
                        <h6 className="mt-3">
                            Please wait while we load all the Dashboards examples
                            <small>Because this is a demonstration, we load at once all the Dashboards examples. This wouldn't happen in a real live app!</small>
                        </h6>
                    </div>
                </div>
            }>
                <Route path="/apresentacao" component={Dashboards}/>
            </Suspense>

            {/* Fibonacci */}
            <Suspense fallback={
                <div className="loader-container">
                    <div className="loader-container-inner">
                        <h6 className="mt-3">
                            Please wait while we load all the Dashboards examples
                            <small>Because this is a demonstration, we load at once all the Dashboards examples. This wouldn't happen in a real live app!</small>
                        </h6>
                    </div>
                </div>
            }>
                <Route path="/fibonacci" component={Fibonacci}/>
            </Suspense>

            <Route exact path="/" render={() => (
                <Redirect to="/apresentacao"/>
            )}/>
            <ToastContainer/>
        </Fragment>
    )
};

export default AppMain;