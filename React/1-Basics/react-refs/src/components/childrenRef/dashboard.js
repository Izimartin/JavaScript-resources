import React from 'react';

import { withStuffClass } from './withStuff';

export class Dashboard extends React.Component {
    getData = () => [1, 2, 3];

    render() {
        return <div>Dashboard</div>;
    }
}

// export default withStuffFunction(Dashboard);
export default withStuffClass(Dashboard);