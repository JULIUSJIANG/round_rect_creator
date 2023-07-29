import React from 'react';
import {Button, Input, InputNumber, ColorPicker, Slider} from 'antd';
import { createRoot } from 'react-dom/client';

const NodeModules = {
    react: React,
    antd: {Button, Input, InputNumber, ColorPicker, Slider},
    createRoot: createRoot
};

export default NodeModules;