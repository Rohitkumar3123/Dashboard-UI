
import React, { useState } from 'react';
import { 
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow 
} from "@/components/ui/table";
import { cn } from '@/lib/utils';

type Status = 'Published' | 'Draft' | 'Archived';

type Article = {
  id: string;
  title: string;
  keyword: string;
  status: Status;
  year: number;
  author: string;
};

type DataTableProps = {
  data: Article[];
};

export function DataTable({ data }: DataTableProps) {
  const [sortField, setSortField] = useState<keyof Article | null>(null);
  const [sortDirection, setSortDirection] = useState<'asc' | 'desc'>('asc');

  const handleSort = (field: keyof Article) => {
    if (sortField === field) {
      setSortDirection(sortDirection === 'asc' ? 'desc' : 'asc');
    } else {
      setSortField(field);
      setSortDirection('asc');
    }
  };

  const sortedData = [...data].sort((a, b) => {
    if (!sortField) return 0;
    
    if (sortField === 'title' || sortField === 'keyword' || sortField === 'author') {
      return sortDirection === 'asc' 
        ? a[sortField].localeCompare(b[sortField])
        : b[sortField].localeCompare(a[sortField]);
    }
    
    if (sortField === 'year') {
      return sortDirection === 'asc' 
        ? a.year - b.year 
        : b.year - a.year;
    }
    
    return 0;
  });

  const renderSortIcon = (field: keyof Article) => {
    if (sortField !== field) return null;
    
    return (
      <span className="ml-1">
        {sortDirection === 'asc' ? '↑' : '↓'}
      </span>
    );
  };

  const statusStyles = {
    Published: "bg-green-100 text-green-800",
    Draft: "bg-yellow-100 text-yellow-800",
    Archived: "bg-gray-100 text-gray-800"
  };

  return (
    <div className="rounded-md border">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead 
              className="w-[40%] cursor-pointer"
              onClick={() => handleSort('title')}
            >
              Article Title {renderSortIcon('title')}
            </TableHead>
            <TableHead 
              className="w-[20%] cursor-pointer"
              onClick={() => handleSort('keyword')}
            >
              Keyword/Subtitle {renderSortIcon('keyword')}
            </TableHead>
            <TableHead>Status</TableHead>
            <TableHead 
              className="cursor-pointer"
              onClick={() => handleSort('year')}
            >
              Year {renderSortIcon('year')}
            </TableHead>
            <TableHead 
              className="cursor-pointer"
              onClick={() => handleSort('author')}
            >
              Author {renderSortIcon('author')}
            </TableHead>
            <TableHead className="text-right">Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {sortedData.map((article) => (
            <TableRow key={article.id}>
              <TableCell className="font-medium">{article.title}</TableCell>
              <TableCell>{article.keyword}</TableCell>
              <TableCell>
                <span className={cn(
                  "px-2 py-1 rounded-full text-xs font-medium",
                  statusStyles[article.status]
                )}>
                  {article.status}
                </span>
              </TableCell>
              <TableCell>{article.year}</TableCell>
              <TableCell>{article.author}</TableCell>
              <TableCell className="text-right">
                <button className="text-blue-500 hover:text-blue-700">Edit</button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
