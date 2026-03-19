import { render, screen } from '@testing-library/react';
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
});
