import { render, screen } from '@testing-library/react';
import { StepperProvider } from '..';
import { Stepper } from '../../Stepper/Stepper';

const mockSteps = [
  { id: '1', title: 'Step 1', description: 'First step' },
  { id: '2', title: 'Step 2', description: 'Second step' },
];

describe('StepperProvider', () => {
  it('should render correctly', () => {
    const { container } = render(
      <StepperProvider steps={mockSteps}>
        <Stepper />
      </StepperProvider>,
    );
    expect(container).toMatchSnapshot();
  });

  it('should render stepper content', () => {
    render(
      <StepperProvider steps={mockSteps}>
        <Stepper />
      </StepperProvider>,
    );
    expect(screen.getByText('Step 1')).toBeInTheDocument();
  });
});
