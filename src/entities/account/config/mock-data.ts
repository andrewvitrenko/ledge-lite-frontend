import { EPaymentType } from '@/entities/transaction/model';

import { EAccountType, TAccount } from '../model';
import { TDeposit } from '../model/deposit';
import { TTransfer } from '../model/transfer';
import { TWithdrawal } from '../model/withdrawal';

export const mockDeposits: TDeposit[] = [
  {
    id: 'dep-1',
    createdAt: '2025-08-20T09:00:00Z',
    updatedAt: '2025-08-20T09:00:00Z',
    accountId: 'acc-1',
    transaction: {
      id: 'trans-dep-1',
      createdAt: '2025-08-20T09:00:00Z',
      updatedAt: '2025-08-20T09:00:00Z',
      amount: 1000,
      date: '2025-08-20',
      note: 'Salary deposit',
      paymentType: EPaymentType.CARD,
      userId: 'user-1',
      currency: 'USD',
      periodId: 'period-1',
    },
  },
];

// Withdrawals
export const mockWithdrawals: TWithdrawal[] = [
  {
    id: 'with-1',
    createdAt: '2025-08-21T14:30:00Z',
    updatedAt: '2025-08-21T14:30:00Z',
    accountId: 'acc-1',
    transaction: {
      id: 'trans-with-1',
      createdAt: '2025-08-21T14:30:00Z',
      updatedAt: '2025-08-21T14:30:00Z',
      amount: 200,
      date: '2025-08-21',
      note: 'ATM withdrawal',
      paymentType: EPaymentType.CASH,
      userId: 'user-1',
      currency: 'USD',
      periodId: 'period-1',
    },
  },
];

// Transfers
export const mockTransfers: TTransfer[] = [
  {
    id: 'transfer-1',
    createdAt: '2025-08-22T11:00:00Z',
    updatedAt: '2025-08-22T11:00:00Z',
    sourceId: 'acc-1',
    destinationId: 'acc-2',
    transaction: {
      id: 'trans-transfer-1',
      createdAt: '2025-08-22T11:00:00Z',
      updatedAt: '2025-08-22T11:00:00Z',
      amount: 500,
      date: '2025-08-22',
      note: 'Transfer to savings',
      paymentType: EPaymentType.CARD,
      userId: 'user-1',
      currency: 'USD',
      periodId: 'period-1',
    },
  },
];

export const mockAccounts: TAccount[] = [
  {
    id: 'acc-1',
    name: 'Main Checking',
    userId: 'user-1',
    balance: 2300.5,
    createdAt: '2025-08-20T08:00:00Z',
    updatedAt: '2025-08-27T20:00:00Z',
    currency: 'USD',
    color: '#FF9800',
    type: EAccountType.ASSET,
    incomingTransfers: [],
    outgoingTransfers: [mockTransfers[0]],
    deposits: [mockDeposits[0]],
    withdrawals: [mockWithdrawals[0]],
  },
  {
    id: 'acc-2',
    name: 'Savings Account',
    userId: 'user-1',
    balance: 5500.0,
    createdAt: '2025-08-20T08:00:00Z',
    updatedAt: '2025-08-27T20:00:00Z',
    currency: 'USD',
    color: '#3F51B5',
    type: EAccountType.SAVINGS,
    incomingTransfers: [mockTransfers[0]],
    outgoingTransfers: [],
    deposits: [],
    withdrawals: [],
  },
  {
    id: 'acc-3',
    name: 'Credit Card',
    userId: 'user-1',
    balance: -450.75,
    createdAt: '2025-08-20T08:00:00Z',
    updatedAt: '2025-08-27T20:00:00Z',
    currency: 'USD',
    color: '#F44336',
    type: EAccountType.CREDIT,
    incomingTransfers: [],
    outgoingTransfers: [],
    deposits: [],
    withdrawals: [],
  },
];
