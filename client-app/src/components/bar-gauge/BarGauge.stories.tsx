import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, number } from '@storybook/addon-knobs';
import BarGauge from './BarGauge';

const stories = storiesOf('BarGauge', module).add('default', () => (
    <div style={{ width: 600 }}>
        <BarGauge value={number('value', 20)} maxValue={30} minValue={0} />
    </div>
));

stories.addDecorator(withKnobs);
