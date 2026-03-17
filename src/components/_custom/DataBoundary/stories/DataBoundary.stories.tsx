import type { Meta, StoryObj } from "@storybook/react-vite";

import { DataBoundary } from "../DataBoundary";
import type { DataBoundaryProps } from "../data-boundary.types";
import {
  testLoading,
  testError,
  testWithDataFunction,
  testWithDataChildren,
  testCustomLoadingFallback,
  testCustomErrorFallback,
} from "./DataBoundary.play";

interface User {
  id: number;
  name: string;
  email: string;
}

const mockUser: User = {
  id: 1,
  name: "John Doe",
  email: "john.doe@example.com",
};

const mockUsers: User[] = [
  { id: 1, name: "John Doe", email: "john.doe@example.com" },
  { id: 2, name: "Jane Smith", email: "jane.smith@example.com" },
  { id: 3, name: "Bob Johnson", email: "bob.johnson@example.com" },
];

const meta: Meta<DataBoundaryProps> = {
  title: "Components/Customizados/DataBoundary",
  component: DataBoundary,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    loadingProps: { control: "object" },
    errorProps: { control: "object" },
    data: { control: "object" },
  },
};

export default meta;
type Story = StoryObj<DataBoundaryProps>;

export const Default: Story = {
  name: "Default",
  parameters: {
    docs: {
      description: {
        story: "Estado inicial sem dados. Não renderiza nada pois não há loadingProps, errorProps ou data definidos.",
      },
    },
  },
};

export const Loading: Story = {
  args: {
    loadingProps: { isLoading: true },
  },
  name: "Loading State",
  play: testLoading,
};

export const Error: Story = {
  args: {
    errorProps: { isError: true },
  },
  name: "Error State",
  play: testError,
};

export const WithDataFunction: Story = {
  args: {
    data: mockUser,
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    children: ({ data }: any) => (
      <div>
        <h3>{data.name}</h3>
        <p>{data.email}</p>
      </div>
    ),
  },
  name: "With Data (Render Function)",
  play: testWithDataFunction,
};

export const WithDataChildren: Story = {
  args: {
    data: mockUsers,
  },
  name: "With Data (ReactNode Children)",
  render: (args) => (
    <DataBoundary {...args}>
      <ul>
        {mockUsers.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </DataBoundary>
  ),
  play: testWithDataChildren,
};

export const CustomLoadingFallback: Story = {
  args: {
    loadingProps: {
      isLoading: true,
      fallback: <div data-testid="custom-loading">Carregando dados...</div>,
    },
  },
  name: "Custom Loading Fallback",
  play: testCustomLoadingFallback,
};

export const CustomErrorFallback: Story = {
  args: {
    errorProps: {
      isError: true,
      fallback: <div data-testid="custom-error">Algo deu errado!</div>,
    },
  },
  name: "Custom Error Fallback",
  play: testCustomErrorFallback,
};

export const ErrorAfterLoading: Story = {
  args: {
    loadingProps: { isLoading: false },
    errorProps: { isError: true },
  },
  name: "Error (after loading passed)",
};

export const EmptyData: Story = {
  args: {
    loadingProps: { isLoading: false },
    errorProps: { isError: false },
    data: undefined,
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    children: ({ data }: any) => <div>{data.name}</div>,
  },
  name: "Empty Data (no fallback)",
  parameters: {
    docs: {
      description: {
        story: "Sem dados (data undefined). Retorna null pois não há dados para renderizar.",
      },
    },
  },
};
