import { render, screen } from '@testing-library/react';
import { ModalHeader } from '..';

describe('ModalHeader', () => {
  it('should render correctly', () => {
    const { container } = render(<ModalHeader>Title</ModalHeader>);
    expect(container).toMatchSnapshot();
  });

  it('should render header', () => {
    render(<ModalHeader>Title</ModalHeader>);
    expect(screen.getByRole('banner')).toBeInTheDocument();
  });
});
