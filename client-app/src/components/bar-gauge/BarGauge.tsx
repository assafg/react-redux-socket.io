import * as React from 'react';
import styled from 'styled-components';
import { useMemo } from '@storybook/addons';

const Colors = {
    lightgray: 'lightgray',
    good: 'green',
    bad: 'red',
    text: 'white',
};

interface IBarGaugeProps {
    value: number;
    maxValue: number;
    minValue: number;
}
const getStyles: object = (props: IBarGaugeProps): object => ({
    container: {
        width: '100%',
        height: '2rem',
        backgroundColor: Colors.lightgray,
    },
    bar: {
        width: `${(props.value * 100) / (props.maxValue - props.minValue)}%`,
        height: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: Colors.text,
        backgroundColor:
            props.value > props.maxValue / 2 ? Colors.good : Colors.bad,
    },
});

const BarGauge: React.FC<IBarGaugeProps> = props => {
    const s = useMemo(() => getStyles(props), [props.value]);
    return (
        <Container>
            <Bar {...props}>{props.value && props.value}</Bar>
        </Container>
    );
};

export default BarGauge;
