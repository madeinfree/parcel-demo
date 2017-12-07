import React from 'react';
import { render } from 'react-dom';
import { assign } from './deps/assign';
require('./css/main');

/**
 * Dep
 */
const a = { A: 1 };
const b = { B: 2 };
const obj = assign(a, b);
console.log(obj);

/**
 * React
 */
const World = () => <div>World</div>;
render(<World />, document.getElementById('view'));
