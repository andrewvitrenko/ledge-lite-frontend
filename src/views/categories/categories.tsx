import { Filter, Plus, Search } from 'lucide-react';
import { FC } from 'react';

import { Button } from '@/shared/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/shared/ui/card';
import { Input } from '@/shared/ui/input';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/shared/ui/select';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/shared/ui/tabs';
import { Header } from '@/widgets/header';

import { CategoryDialog } from './ui/category-dialog';

export const CategoriesPage: FC = () => {
  return (
    <div className="bg-background min-h-dvh">
      <Header />
      <div className="container mx-auto space-y-6 p-6">
        {/* Header */}
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h1 className="text-2xl font-bold">Categories</h1>
            <p className="text-muted-foreground">
              Organize your transactions with custom categories
            </p>
          </div>
          <Button onClick={openCreateDialog}>
            <Plus className="mr-2 h-4 w-4" />
            New Category
          </Button>
        </div>

        {/* Filters */}
        <Card>
          <CardContent className="pt-6">
            <div className="flex flex-col gap-4 sm:flex-row">
              <div className="relative flex-1">
                <Search className="text-muted-foreground absolute top-1/2 left-3 h-4 w-4 -translate-y-1/2 transform" />
                <Input
                  placeholder="Search categories..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10"
                />
              </div>
              <Select
                value={sortBy}
                onValueChange={(value: any) => setSortBy(value)}
              >
                <SelectTrigger className="w-full sm:w-[180px]">
                  <Filter className="mr-2 h-4 w-4" />
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="name">Sort by Name</SelectItem>
                  <SelectItem value="usage">Sort by Usage</SelectItem>
                  <SelectItem value="created">Sort by Created</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </CardContent>
        </Card>

        {/* Content */}
        <Tabs defaultValue="list" className="space-y-4">
          <TabsList>
            <TabsTrigger value="list">List View</TabsTrigger>
            <TabsTrigger value="stats">Statistics</TabsTrigger>
          </TabsList>

          <TabsContent value="list" className="space-y-4">
            {filteredCategories.length === 0 ? (
              <Card>
                <CardContent className="pt-6">
                  <div className="py-8 text-center">
                    <div className="bg-muted mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full">
                      <Plus className="text-muted-foreground h-6 w-6" />
                    </div>
                    <h3 className="mb-2 text-lg font-medium">
                      No categories found
                    </h3>
                    <p className="text-muted-foreground mb-4">
                      {searchQuery
                        ? 'No categories match your search criteria.'
                        : 'Get started by creating your first category.'}
                    </p>
                    {!searchQuery && (
                      <Button onClick={openCreateDialog}>
                        <Plus className="mr-2 h-4 w-4" />
                        Create Category
                      </Button>
                    )}
                  </div>
                </CardContent>
              </Card>
            ) : (
              <div className="space-y-2">
                {filteredCategories.map((category) => {
                  const stats = mockCategoryStats.find(
                    (s) => s.categoryId === category.id,
                  );
                  return (
                    <CategoryListItem
                      key={category.id}
                      category={category}
                      transactionCount={stats?.transactionCount || 0}
                      onEdit={openEditDialog}
                      onDelete={handleDeleteCategory}
                    />
                  );
                })}
              </div>
            )}
          </TabsContent>

          <TabsContent value="stats" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Category Statistics</CardTitle>
                <CardDescription>
                  Transaction totals for the current active period
                </CardDescription>
              </CardHeader>
            </Card>

            {mockCategoryStats.length === 0 ? (
              <Card>
                <CardContent className="pt-6">
                  <div className="py-8 text-center">
                    <div className="bg-muted mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full">
                      <Filter className="text-muted-foreground h-6 w-6" />
                    </div>
                    <h3 className="mb-2 text-lg font-medium">
                      No statistics available
                    </h3>
                    <p className="text-muted-foreground">
                      Statistics will appear here once you have transactions in
                      your active period.
                    </p>
                  </div>
                </CardContent>
              </Card>
            ) : (
              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                {mockCategoryStats.map((stats) => (
                  <CategoryStatsCard key={stats.categoryId} stats={stats} />
                ))}
              </div>
            )}
          </TabsContent>
        </Tabs>

        {/* Dialog */}
        <CategoryDialog
          open={showDialog}
          onOpenChange={setShowDialog}
          category={editingCategory}
          onSubmit={editingCategory ? handleEditCategory : handleCreateCategory}
        />
      </div>
    </div>
  );
};
