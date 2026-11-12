import type { Stall } from '../types/stall';
import type { User, UserRole } from '../types/auth';

export function canCreateStall(user: User | null): boolean {
  return user?.role === 'admin' || user?.role === 'owner';
}

export function canEditStall(user: User | null, stall: Stall): boolean {
  if (!user) return false;
  if (user.role === 'admin') return true;
  return user.role === 'owner' && stall.ownerId === user.id;
}

export function canDeleteStall(user: User | null): boolean {
  return user?.role === 'admin';
}

export const roleLabels: Record<UserRole, string> = {
  admin: 'Admin',
  owner: 'Owner',
  customer: 'Customer',
};
