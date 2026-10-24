import type { Meta, StoryObj } from '@storybook/vue3-vite';
import { h } from 'vue';

import { PhHouse } from '@phosphor-icons/vue';

import BreadcrumbItem from '../../BreadcrumbItem/BreadcrumbItem.vue';
import BreadcrumbLink from '../../BreadcrumbLink/BreadcrumbLink.vue';
import BreadcrumbList from '../../BreadcrumbList/BreadcrumbList.vue';
import BreadcrumbPage from '../../BreadcrumbPage/BreadcrumbPage.vue';
import BreadcrumbSeparator from '../../BreadcrumbSeparator/BreadcrumbSeparator.vue';
import Breadcrumb from '../Breadcrumb.vue';
import { testDefaultBreadcrumb } from './Breadcrumb.play';

const meta = {
  title: 'Components/Estruturas/Breadcrumb',
  component: Breadcrumb,
  parameters: { layout: 'centered' },
  argTypes: {
    size: {
      control: { type: 'radio' },
      options: ['sm', 'md', 'lg'],
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Breadcrumb>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args: Record<string, unknown>) =>
    h('div', { class: 'w-96' }, [
      h(Breadcrumb, args, {
        default: () => [
          h(
            BreadcrumbList,
            {},
            {
              default: () => [
                h(
                  BreadcrumbItem,
                  {},
                  {
                    default: () => [
                      h(
                        BreadcrumbLink,
                        { href: '/' },
                        { default: () => 'Home' },
                      ),
                    ],
                  },
                ),
                h(BreadcrumbSeparator),
                h(
                  BreadcrumbItem,
                  {},
                  {
                    default: () => [
                      h(
                        BreadcrumbLink,
                        { href: '/produtos' },
                        { default: () => 'Produtos' },
                      ),
                    ],
                  },
                ),
                h(BreadcrumbSeparator),
                h(
                  BreadcrumbItem,
                  {},
                  {
                    default: () => [
                      h(BreadcrumbPage, {}, { default: () => 'Detalhes' }),
                    ],
                  },
                ),
              ],
            },
          ),
        ],
      }),
    ]),
  play: testDefaultBreadcrumb,
};

export const CustomSeparator: Story = {
  args: { separator: '/' },
  render: (args: Record<string, unknown>) =>
    h('div', { class: 'w-96' }, [
      h(Breadcrumb, args, {
        default: () => [
          h(
            BreadcrumbList,
            {},
            {
              default: () => [
                h(
                  BreadcrumbItem,
                  {},
                  {
                    default: () => [
                      h(
                        BreadcrumbLink,
                        { href: '/' },
                        { default: () => 'Home' },
                      ),
                    ],
                  },
                ),
                h(BreadcrumbSeparator),
                h(
                  BreadcrumbItem,
                  {},
                  {
                    default: () => [
                      h(
                        BreadcrumbLink,
                        { href: '/produtos' },
                        { default: () => 'Produtos' },
                      ),
                    ],
                  },
                ),
                h(BreadcrumbSeparator),
                h(
                  BreadcrumbItem,
                  {},
                  {
                    default: () => [
                      h(BreadcrumbPage, {}, { default: () => 'Detalhes' }),
                    ],
                  },
                ),
              ],
            },
          ),
        ],
      }),
    ]),
};

export const WithIcons: Story = {
  render: (args: Record<string, unknown>) =>
    h('div', { class: 'w-96' }, [
      h(Breadcrumb, args, {
        default: () => [
          h(
            BreadcrumbList,
            {},
            {
              default: () => [
                h(
                  BreadcrumbItem,
                  {},
                  {
                    default: () => [
                      h(
                        BreadcrumbLink,
                        {
                          href: '/',
                          class: 'inline-flex items-center gap-1.5',
                        },
                        {
                          default: () => [
                            h(PhHouse, { 'aria-hidden': true }),
                            'Home',
                          ],
                        },
                      ),
                    ],
                  },
                ),
                h(BreadcrumbSeparator),
                h(
                  BreadcrumbItem,
                  {},
                  {
                    default: () => [
                      h(
                        BreadcrumbLink,
                        { href: '/produtos' },
                        { default: () => 'Produtos' },
                      ),
                    ],
                  },
                ),
                h(BreadcrumbSeparator),
                h(
                  BreadcrumbItem,
                  {},
                  {
                    default: () => [
                      h(BreadcrumbPage, {}, { default: () => 'Detalhes' }),
                    ],
                  },
                ),
              ],
            },
          ),
        ],
      }),
    ]),
};

export const Sizes: Story = {
  render: (args: Record<string, unknown>) =>
    h('div', { class: 'flex w-96 flex-col gap-6' }, [
      h(
        Breadcrumb,
        { ...args, size: 'sm', 'aria-label': 'Breadcrumb sm' },
        {
          default: () => [
            h(
              BreadcrumbList,
              {},
              {
                default: () => [
                  h(
                    BreadcrumbItem,
                    {},
                    {
                      default: () => [
                        h(
                          BreadcrumbLink,
                          { href: '/' },
                          { default: () => 'Home' },
                        ),
                      ],
                    },
                  ),
                  h(BreadcrumbSeparator),
                  h(
                    BreadcrumbItem,
                    {},
                    {
                      default: () => [
                        h(
                          BreadcrumbPage,
                          {},
                          { default: () => 'Detalhes (sm)' },
                        ),
                      ],
                    },
                  ),
                ],
              },
            ),
          ],
        },
      ),
      h(
        Breadcrumb,
        { ...args, size: 'md', 'aria-label': 'Breadcrumb md' },
        {
          default: () => [
            h(
              BreadcrumbList,
              {},
              {
                default: () => [
                  h(
                    BreadcrumbItem,
                    {},
                    {
                      default: () => [
                        h(
                          BreadcrumbLink,
                          { href: '/' },
                          { default: () => 'Home' },
                        ),
                      ],
                    },
                  ),
                  h(BreadcrumbSeparator),
                  h(
                    BreadcrumbItem,
                    {},
                    {
                      default: () => [
                        h(
                          BreadcrumbPage,
                          {},
                          { default: () => 'Detalhes (md)' },
                        ),
                      ],
                    },
                  ),
                ],
              },
            ),
          ],
        },
      ),
      h(
        Breadcrumb,
        { ...args, size: 'lg', 'aria-label': 'Breadcrumb lg' },
        {
          default: () => [
            h(
              BreadcrumbList,
              {},
              {
                default: () => [
                  h(
                    BreadcrumbItem,
                    {},
                    {
                      default: () => [
                        h(
                          BreadcrumbLink,
                          { href: '/' },
                          { default: () => 'Home' },
                        ),
                      ],
                    },
                  ),
                  h(BreadcrumbSeparator),
                  h(
                    BreadcrumbItem,
                    {},
                    {
                      default: () => [
                        h(
                          BreadcrumbPage,
                          {},
                          { default: () => 'Detalhes (lg)' },
                        ),
                      ],
                    },
                  ),
                ],
              },
            ),
          ],
        },
      ),
    ]),
};

export const Responsive: Story = {
  globals: { viewport: { value: 'mobile', isRotated: false } },
  parameters: { layout: 'padded' },
  render: (args: Record<string, unknown>) =>
    h(Breadcrumb, args, {
      default: () => [
        h(
          BreadcrumbList,
          {},
          {
            default: () => [
              h(
                BreadcrumbItem,
                {},
                {
                  default: () => [
                    h(BreadcrumbLink, { href: '/' }, { default: () => 'Home' }),
                  ],
                },
              ),
              h(BreadcrumbSeparator),
              h(
                BreadcrumbItem,
                {},
                {
                  default: () => [
                    h(
                      BreadcrumbLink,
                      { href: '/categorias' },
                      { default: () => 'Categorias' },
                    ),
                  ],
                },
              ),
              h(BreadcrumbSeparator),
              h(
                BreadcrumbItem,
                {},
                {
                  default: () => [
                    h(
                      BreadcrumbLink,
                      { href: '/categorias/eletronicos' },
                      { default: () => 'Eletrônicos' },
                    ),
                  ],
                },
              ),
              h(BreadcrumbSeparator),
              h(
                BreadcrumbItem,
                {},
                {
                  default: () => [
                    h(BreadcrumbPage, {}, { default: () => 'Detalhes' }),
                  ],
                },
              ),
            ],
          },
        ),
      ],
    }),
};
