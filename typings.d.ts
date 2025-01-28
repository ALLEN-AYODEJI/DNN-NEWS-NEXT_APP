type Article = {
  author: string | null;
  category: string;
  country: string;
  description: string;
  image: string | null;
  language: string;
  publishedAt: string;
  title: string;
  source: string;
  url: string;
};

type Pagination = {
  count: int;
  limit: int;
  offset: int;
  total: int;
};

type NewsResponse = {
  pagination: Pagination;
  data: Article[];
};

type Category =
  | "Business"
  | "Entertainment"
  | "General"
  | "Health"
  | "Science"
  | "Sports"
  | "Technology";
