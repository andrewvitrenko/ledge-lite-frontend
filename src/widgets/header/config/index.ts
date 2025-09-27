import { Calendar, CreditCard, Tag } from 'lucide-react';

export const navigation = [
  {
    name: 'Transactions',
    href: '/transactions',
    icon: CreditCard,
  },
  {
    name: 'Categories',
    href: '/categories',
    icon: Tag,
  },
  {
    name: 'Periods',
    href: '/periods',
    icon: Calendar,
  },
];
