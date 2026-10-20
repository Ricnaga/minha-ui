import { render, screen } from '@testing-library/react';
import { Stepper } from '..';
import { StepperProvider } from '../../StepperProvider';

const mockSteps = [
  { id: '1', title: 'Step 1', description: 'First step' },
  { id: '2', title: 'Step 2', description: 'Second step' },
];

describe('Stepper', () => {
  it('should render correctly', () => {
    const { container } = render(
      <StepperProvider steps={mockSteps}>
        <Stepper />
      </StepperProvider>,
    );
    expect(container).toMatchSnapshot();
  });

  it('should render step content', () => {
    render(
      <StepperProvider steps={mockSteps}>
        <Stepper />
      </StepperProvider>,
    );
    expect(screen.getByText('Step 1')).toBeInTheDocument();
  });
});
