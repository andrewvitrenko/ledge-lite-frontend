import type { NextPage } from 'next';

import { CategoriesPage } from '@/views/categories';
import { Header } from '@/widgets/header';

const Categories: NextPage = () => {
  return (
    <div className="bg-background min-h-dvh">
      <Header />
      <CategoriesPage />
    </div>
  );
};

export default Categories;
