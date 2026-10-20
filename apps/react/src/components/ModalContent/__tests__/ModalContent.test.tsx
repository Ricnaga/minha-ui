import { render, screen } from '@testing-library/react';
import { ModalContent } from '..';

describe('ModalContent', () => {
  it('should render correctly', () => {
    const { container } = render(<ModalContent />);
    expect(container).toMatchSnapshot();
  });

  it('should render modal content', () => {
    render(
      <ModalContent>
        <div>Content</div>
      </ModalContent>,
    );
    expect(screen.getByText('Content')).toBeInTheDocument();
  });
});
