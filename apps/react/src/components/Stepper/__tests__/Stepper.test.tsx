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

  describe('Responsividade', () => {
    it('should allow horizontal scroll on small screens', () => {
      const { container } = render(
        <StepperProvider steps={mockSteps}>
          <Stepper />
        </StepperProvider>,
      );
      const stepper = container.firstElementChild;

      expect(stepper).toHaveClass('gap-2', 'overflow-x-auto', 'sm:gap-4');
      expect(stepper).toHaveClass('sm:overflow-visible');
    });

    it('should stack vertically without horizontal scroll', () => {
      const { container } = render(
        <StepperProvider steps={mockSteps} orientation="vertical">
          <Stepper />
        </StepperProvider>,
      );
      const stepper = container.firstElementChild;

      expect(stepper).toHaveClass('flex-col', 'gap-4');
      expect(stepper).not.toHaveClass('overflow-x-auto');
    });
  });
});
