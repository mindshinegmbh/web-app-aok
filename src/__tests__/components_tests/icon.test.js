import React from 'react';
import { render, screen } from '@testing-library/react';
import Icon from '../../components/icon';
import {back_dark} from '../../images';

describe('Icon', () => {
  it('renders Icon component', () => {
    render(<Icon alt="back button" link={back_dark} />);
    expect(screen.getByAltText('back button')).toBeInTheDocument();
  });
});