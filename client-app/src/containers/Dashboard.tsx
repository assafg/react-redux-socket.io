import * as React from 'react';
import { useSelector } from 'react-redux';

interface IDashboardProps {}

const Dashboard: React.FunctionComponent<IDashboardProps> = props => {
    const value = useSelector((state: any) => state.simpleValues.value);
    return <div>{value}</div>;
};

export default Dashboard;
