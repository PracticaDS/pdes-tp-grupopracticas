import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import { Button, Welcome } from '@storybook/react/demo';
import Celda from '../components/Celda';
import { Provider } from 'react-redux';
import store from '../store';


const withProvider = (story) => (
  <Provider store={store}>
    { story() }
  </Provider>
)


storiesOf('Celda', module)
.addDecorator(withProvider)

.add('vacia', () => (
  <Celda onClick={action('clicked')}>Hello Button</Celda>
))

.add('con maquina', () => (
  <Celda onClick={action('clicked')}>Hello Button</Celda>
))
