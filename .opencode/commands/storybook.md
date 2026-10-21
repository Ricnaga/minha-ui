---
description: Start Storybook dev server.
---

Run `pnpm storybook` in the background. Once it's ready, open the browser
to `http://localhost:6006` and confirm it loaded correctly.

Available stories:
- Components: `http://localhost:6006/?path=/story/components-*`
- Hooks: `http://localhost:6006/?path=/story/hooks-*`
- Icons: `http://localhost:6006/?path=/story/icons-*`

Wait for the server to respond on `http://localhost:6006` and for the
Storybook sidebar to render before reporting it is ready. Do not rely on
`networkidle`: the dev server keeps a websocket open, so that state is never
reached.
