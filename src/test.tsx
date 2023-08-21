import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

import { App } from './App';

describe('<App />', () => {
  it('teste', () => {
    render(<App />);

    expect(
      screen.getByRole('heading', { name: /Fan Digital Banks/i })
    ).toBeInTheDocument();
  });
});
