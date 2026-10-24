import { describe, expect, it, vi } from 'vitest';
import { useRipple } from '../';
function createButton() {
    const button = document.createElement('button');
    vi.spyOn(button, 'getBoundingClientRect').mockReturnValue({
        width: 100,
        height: 40,
        x: 0,
        y: 0,
        bottom: 40,
        left: 0,
        right: 100,
        top: 0,
        toJSON: () => ({}),
    });
    return button;
}
function dispatchClick(button, handleRipple) {
    button.addEventListener('click', handleRipple);
    button.dispatchEvent(new MouseEvent('click', { clientX: 50, clientY: 20, bubbles: true }));
}
describe('useRipple', () => {
    it('should return handleRipple function', () => {
        const { handleRipple } = useRipple();
        expect(typeof handleRipple).toBe('function');
    });
    it('should create ripple element when called', () => {
        const { handleRipple } = useRipple();
        const button = createButton();
        dispatchClick(button, handleRipple);
        const ripple = button.querySelector('span');
        expect(ripple).not.toBeNull();
        expect(ripple?.className).toContain('absolute');
    });
});
