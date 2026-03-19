import { render, screen } from '@testing-library/react';
import { Drawer } from '..';
import { DrawerHeader } from '../../DrawerHeader/DrawerHeader';
import { DrawerBody } from '../../DrawerBody/DrawerBody';
import { DrawerFooter } from '../../DrawerFooter/DrawerFooter';

describe('Drawer', () => {
  const renderDrawer = (isOpen: boolean = true) => {
    const handleClose = vi.fn();
    const { container } = render(
      <Drawer isOpen={isOpen} onClose={handleClose}>
        <DrawerHeader>Drawer Title</DrawerHeader>
        <DrawerBody>Drawer Content</DrawerBody>
        <DrawerFooter>Drawer Footer</DrawerFooter>
      </Drawer>,
    );
    return { container, handleClose };
  };

  describe('Rendering', () => {
    it('should render drawer correctly when closed', () => {
      const { container } = renderDrawer(false);
      expect(container).toMatchSnapshot();
    });

    it('should render drawer correctly when open', () => {
      const { container } = renderDrawer(true);
      expect(container).toMatchSnapshot();
    });
  });

  describe('States', () => {
    it('should render drawer content when open', () => {
      renderDrawer(true);
      expect(screen.getByText('Drawer Title')).toBeInTheDocument();
      expect(screen.getByText('Drawer Content')).toBeInTheDocument();
      expect(screen.getByText('Drawer Footer')).toBeInTheDocument();
    });
  });
});
