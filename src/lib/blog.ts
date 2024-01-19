export interface BlogPost {
  id?: string;
  title: string;
  summary: string;
  createdAt: number;
  coverImageURL: string;
  content: string;
  slug?: string;
}
