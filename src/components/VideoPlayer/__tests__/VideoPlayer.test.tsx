import { render, screen } from '@testing-library/react';
import { VideoPlayer } from '..';

describe('VideoPlayer', () => {
  it('should render correctly', () => {
    const { container } = render(
      <VideoPlayer
        src="https://example.com/video.mp4"
        thumbnailSrc="https://example.com/thumb.jpg"
        isOpen={false}
      />,
    );
    expect(container).toMatchSnapshot();
  });

  it('should render thumbnail button', () => {
    render(
      <VideoPlayer
        src="https://example.com/video.mp4"
        thumbnailSrc="https://example.com/thumb.jpg"
        isOpen={false}
      />,
    );
    expect(screen.getByRole('button')).toBeInTheDocument();
  });
});
