// @flow

import * as React from 'react';
import { Form as AntDForm } from 'antd';
import type { FormType } from '../types';

const Form = ({ layout = "vertical" }: FormType) => (<AntDForm layout={ layout } />);

export default Form;
