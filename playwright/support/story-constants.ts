export type StoryId =
  | `components-${string}-${string}`
  | `hooks-${string}-${string}`;

export interface StoryDefinition {
  id: StoryId;
  title: string;
}

export const BUTTON_STORIES = {
  DEFAULT: 'components-interação-button--default',
  VARIANTS: 'components-interação-button--variants',
  COLORS: 'components-interação-button--colors',
  SIZES: 'components-interação-button--sizes',
  LOADING: 'components-interação-button--loading',
  DISABLED: 'components-interação-button--disabled',
} as const;

export const INPUT_STORIES = {
  DEFAULT: 'components-forms-input--default',
  WITH_LABEL: 'components-forms-input--with-label',
  WITH_ICONS: 'components-forms-input--with-icons',
  ERROR_STATE: 'components-forms-input--error-state',
} as const;

export const CHECKBOX_STORIES = {
  DEFAULT: 'components-forms-checkbox--default',
  INDETERMINATE: 'components-forms-checkbox--indeterminate',
  DISABLED: 'components-forms-checkbox--disabled',
} as const;

export const BADGE_STORIES = {
  DEFAULT: 'components-feedback-badge--default',
  VARIANTS: 'components-feedback-badge--variants',
} as const;

export const CHIP_STORIES = {
  DEFAULT: 'components-forms-chip--default',
  SELECTABLE: 'components-forms-chip--selectable',
} as const;

export const TABS_STORIES = {
  DEFAULT: 'components-navigation-tabs--default',
  WITH_PANELS: 'components-navigation-tabs--with-panels',
} as const;

export const MODAL_STORIES = {
  DEFAULT: 'components-overlay-modal--default',
  SIZES: 'components-overlay-modal--sizes',
} as const;

export const SELECT_STORIES = {
  DEFAULT: 'components-forms-select--default',
  MULTI_SELECT: 'components-forms-select--multi-select',
} as const;

export const USE_DISCLOSURE_STORIES = {
  DEFAULT: 'hooks-useinteraction-usedisclosure--default',
  FULL_EXAMPLE: 'hooks-useinteraction-usedisclosure--full-example',
} as const;

export const USE_TOGGLE_STORIES = {
  DEFAULT: 'hooks-useinteraction-usetoggle--default',
} as const;

export const USE_DEBOUNCE_STORIES = {
  DEFAULT: 'hooks-useinteraction-usedebounce--default',
} as const;
