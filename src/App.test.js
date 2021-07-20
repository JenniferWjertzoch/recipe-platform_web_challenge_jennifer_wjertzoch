import { render } from '@testing-library/react';
import App from './App';

test('shows proper heading when rendered', () => {
  const { getByText } = render(<App />, { name: 'Marley Spoon' })

  expect(getByText('Marley Spoon Recipes')).toBeInTheDocument()
})
