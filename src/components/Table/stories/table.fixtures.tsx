import { TableBody } from '../../TableBody';
import { TableCell } from '../../TableCell';
import { TableRow } from '../../TableRow';
import type { TableColumn, TableKeyExtractor } from '../table.types';

export const mockUsers = [
  { id: 1, name: 'John Doe', email: 'john.doe@example.com', role: 'Admin' },
  {
    id: 2,
    name: 'Jane Smith',
    email: 'jane.smith@example.com',
    role: 'Editor',
  },
  {
    id: 3,
    name: 'Bob Johnson',
    email: 'bob.johnson@example.com',
    role: 'Viewer',
  },
  {
    id: 4,
    name: 'Alice Brown',
    email: 'alice.brown@example.com',
    role: 'Editor',
  },
  {
    id: 5,
    name: 'Charlie Davis',
    email: 'charlie.davis@example.com',
    role: 'Viewer',
  },
  {
    id: 6,
    name: 'Diana Evans',
    email: 'diana.evans@example.com',
    role: 'Admin',
  },
  {
    id: 7,
    name: 'Ethan Foster',
    email: 'ethan.foster@example.com',
    role: 'Viewer',
  },
  {
    id: 8,
    name: 'Fiona Green',
    email: 'fiona.green@example.com',
    role: 'Editor',
  },
  {
    id: 9,
    name: 'George Harris',
    email: 'george.harris@example.com',
    role: 'Viewer',
  },
  {
    id: 10,
    name: 'Hannah King',
    email: 'hannah.king@example.com',
    role: 'Admin',
  },
];

export type User = (typeof mockUsers)[number];

export const userColumns: TableColumn[] = [
  { id: 'name', label: 'Nome' },
  { id: 'email', label: 'E-mail' },
  { id: 'role', label: 'Perfil', align: 'center' },
];

export const userKeyExtractor: TableKeyExtractor<User> = (user) => user.id;

export const renderUserRows = (user: User) => (
  <TableRow>
    <TableCell>{user.name}</TableCell>
    <TableCell>{user.email}</TableCell>
    <TableCell align="center">{user.role}</TableCell>
  </TableRow>
);

export const userRows = (
  <TableBody<User>>{(user) => renderUserRows(user)}</TableBody>
);
