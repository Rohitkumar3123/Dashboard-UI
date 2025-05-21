
export type Status = 'Published' | 'Draft' | 'Archived';

export type Article = {
  id: string;
  title: string;
  keyword: string;
  status: Status;
  year: number;
  author: string;
};

export const articlesData: Article[] = [
  {
    id: '1',
    title: 'How computers are being used in modern education',
    keyword: 'Education technology',
    status: 'Published',
    year: 2023,
    author: 'Michael Lee'
  },
  {
    id: '2',
    title: 'The evolution of AI in healthcare diagnostics',
    keyword: 'Healthcare AI',
    status: 'Published',
    year: 2022,
    author: 'Sarah Johnson'
  },
  {
    id: '3',
    title: 'Future-proofing business strategies through digital transformation',
    keyword: 'Digital transformation',
    status: 'Draft',
    year: 2023,
    author: 'Alex Chen'
  },
  {
    id: '4',
    title: 'The rise of smart homes and Internet of Things (IoT)',
    keyword: 'Smart home technology',
    status: 'Archived',
    year: 2021,
    author: 'Emma Wilson'
  },
  {
    id: '5',
    title: 'Cybersecurity best practices for remote work environments',
    keyword: 'Remote work security',
    status: 'Published',
    year: 2022,
    author: 'Daniel Brown'
  },
  {
    id: '6',
    title: 'Blockchain technology: Beyond cryptocurrency applications',
    keyword: 'Blockchain innovation',
    status: 'Draft',
    year: 2023,
    author: 'Olivia Taylor'
  },
  {
    id: '7',
    title: 'The impact of machine learning on customer experience',
    keyword: 'Customer experience',
    status: 'Published',
    year: 2021,
    author: 'James Roberts'
  },
  {
    id: '8',
    title: 'Sustainable technology: Reducing carbon footprints in tech',
    keyword: 'Green technology',
    status: 'Draft',
    year: 2022,
    author: 'Sophia Martinez'
  }
];
