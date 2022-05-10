import React from 'react';
import {render,} from '@testing-library/react';
import GemSearch from './GemSearch';

it('renders without crashing', () => {
    const div = document.createElement('div');
    render(<GemSearch />, div);
});