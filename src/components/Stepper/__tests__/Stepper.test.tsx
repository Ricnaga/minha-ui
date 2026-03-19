import { render } from '@testing-library/react';
import { Stepper } from '..';
import { StepperProvider } from '../../StepperProvider';

const mockSteps = [
  { id: '1', title: 'Step 1', description: 'First step' },
  { id: '2', title: 'Step 2', description: 'Second step' },
  { id: '3', title: 'Step 3', description: 'Third step' },
];

const TestStepper = () => {
  return (
    <StepperProvider steps={mockSteps}>
      <Stepper />
    </StepperProvider>
  );
};

describe('Stepper', () => {
  describe('Rendering', () => {
    it('should render stepper correctly', () => {
      const { container } = render(<TestStepper />);
      expect(container).toMatchSnapshot();
    });

    it('should render with steps', () => {
      const { container } = render(<TestStepper />);
      expect(container).toMatchSnapshot();
    });
  });

  describe('Orientation', () => {
    it('should render with horizontal orientation', () => {
      const { container } = render(
        <StepperProvider steps={mockSteps} orientation="horizontal">
          <Stepper />
        </StepperProvider>,
      );
      expect(container).toMatchSnapshot();
    });

    it('should render with vertical orientation', () => {
      const { container } = render(
        <StepperProvider steps={mockSteps} orientation="vertical">
          <Stepper />
        </StepperProvider>,
      );
      expect(container).toMatchSnapshot();
    });
  });

  describe('Active Step', () => {
    it('should render with custom active step', () => {
      const { container } = render(
        <StepperProvider steps={mockSteps} activeStep={1}>
          <Stepper />
        </StepperProvider>,
      );
      expect(container).toMatchSnapshot();
    });
  });

  describe('Step Content', () => {
    it('should render step titles', () => {
      render(<TestStepper />);
      expect(document.body.textContent).toContain('Step 1');
      expect(document.body.textContent).toContain('Step 2');
      expect(document.body.textContent).toContain('Step 3');
    });

    it('should render step descriptions', () => {
      render(<TestStepper />);
      expect(document.body.textContent).toContain('First step');
      expect(document.body.textContent).toContain('Second step');
      expect(document.body.textContent).toContain('Third step');
    });
  });
});
