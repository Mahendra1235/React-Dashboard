import React, { Suspense, lazy } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import SLUGS from 'resources/slugs';
import LoadingComponent from 'components/loading';
import { BarChart } from './dashboard/BarChart';
import { PieChart } from './dashboard/PieChart';
import { AreaChart } from './dashboard/AreaChart';
import { ColumnChart} from './dashboard/Telivision';
import { GeoChart } from './dashboard/Liveevents';
import { LineChart } from './dashboard/Print';
import Login from './dashboard/Login';

const DashboardComponent = lazy(() => import('./dashboard'));

function PrivateRoutes() {
    return (
        <Suspense fallback={<LoadingComponent loading />}>
            <Switch>
            <Route exact path={SLUGS.dashboard} component={DashboardComponent} />
                <Route exact path={SLUGS.overview} render={() => <div style={{padding: '20px', backgroundColor: '#f4f4f4', border: '1px solid #ccc', borderRadius: '8px'}} ><h2>AreaChart</h2>
            <AreaChart/> </div>} />
                <Route exact path={SLUGS.overviewTwo} render={() => <div style={{padding: '20px', backgroundColor: '#f4f4f4', border: '1px solid #ccc', borderRadius: '8px'}} ><h2>PieChart</h2><PieChart /></div>} />
                <Route exact path={SLUGS.overviewThree} render={() => <div style={{padding: '20px', backgroundColor: '#f4f4f4', border: '1px solid #ccc', borderRadius: '8px'}} ><h2>BarChart</h2> <BarChart/> </div>} />
                <Route exact path={SLUGS.business} render={() => <div><center><h2> Total bussiness Collections</h2></center> <AreaChart/></div>} />
                <Route exact path={SLUGS.telivision} render={() => <div><center> <h2> Television </h2> </center><ColumnChart/></div>} />
                <Route exact path={SLUGS.liveevents} render={() => <div><center><h2> Live events </h2> </center><GeoChart/></div>} />
                <Route exact path={SLUGS.print} render={() => <div><center><h2> Print </h2> </center><LineChart/></div>} />
                {/* <Route exact path={SLUGS.Login} render={() => <div> <Login/> </div>} /> */}
                <Redirect to={SLUGS.dashboard} />
            </Switch>
        </Suspense>
    );
}

export default PrivateRoutes;
