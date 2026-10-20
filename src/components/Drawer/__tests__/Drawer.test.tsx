import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Drawer } from '..';
import { DrawerHeader } from '../../DrawerHeader/DrawerHeader';
import { DrawerBody } from '../../DrawerBody/DrawerBody';
import { DrawerFooter } from '../../DrawerFooter/DrawerFooter';

describe('Drawer', () => {
  const renderDrawer = (isOpen: boolean = true) => {
    const handleClose = vi.fn();
    return render(
      <Drawer isOpen={isOpen} onClose={handleClose}>
        <DrawerHeader>Drawer Title</DrawerHeader>
        <DrawerBody>Drawer Content</DrawerBody>
        <DrawerFooter>Drawer Footer</DrawerFooter>
      </Drawer>,
    );
  };

  it('should render correctly', () => {
    const { container } = renderDrawer(true);
    expect(container).toMatchSnapshot();
  });

  it('should render drawer content', () => {
    renderDrawer(true);
    expect(screen.getByText('Drawer Title')).toBeInTheDocument();
  });

  it('should call onClose when the close button is clicked', async () => {
    const user = userEvent.setup();
    const handleClose = vi.fn();

    render(
      <Drawer isOpen={true} onClose={handleClose}>
        <DrawerHeader>Drawer Title</DrawerHeader>
      </Drawer>,
    );

    await user.click(screen.getByRole('button', { name: /fechar/i }));

    expect(handleClose).toHaveBeenCalledTimes(1);
  });
});
