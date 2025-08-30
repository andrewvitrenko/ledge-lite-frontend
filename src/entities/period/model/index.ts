import { ValueOf } from '@/shared/model/utils';

export const EPeriodStatus = {
  ACTIVE: 'ACTIVE',
  CLOSED: 'CLOSED',
  ARCHIVED: 'ARCHIVED',
} as const;

export type EPeriodStatus = ValueOf<typeof EPeriodStatus>;

export type TAccountPeriodSnapshot = {
  id: string;
  periodId: string;
  accountId: string;
  startingBalance: number;
  endingBalance: number;
  createdAt: string;
  updatedAt: string;
};

export type TPeriod = {
  id: string;
  userId: string;
  name: string;
  startDate: string;
  endDate: string;
  status: EPeriodStatus;
  createdAt: string;
  updatedAt: string;
  accountSnapshots: TAccountPeriodSnapshot[];
};
