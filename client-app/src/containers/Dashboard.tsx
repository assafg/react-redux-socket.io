import * as React from 'react';
import { useSelector } from 'react-redux';
import BarGauge from 'src/components/bar-gauge/BarGauge';

interface IDashboardProps {}

const Dashboard: React.FunctionComponent<IDashboardProps> = props => {
    const value = useSelector((state: any) => state.simpleValues.value);
    return (
        <div style={{ width: 600 }}>
            <BarGauge value={value} maxValue={2} minValue={0} />
        </div>
    );
};

export default Dashboard;
