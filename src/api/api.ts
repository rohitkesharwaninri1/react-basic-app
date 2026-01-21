export interface Comment {
  id: number;
  name: string;
  email: string;
  body: string;
}

const PAGE_SIZE = 100;
export async function fetchComments(page: number): Promise<Comment[]> {
  const start = page * PAGE_SIZE;
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/comments?_start=${start}&_limit=${PAGE_SIZE}`
  );
  if (!response.ok) {
    throw new Error("Failed to fetch comments");
  }
  const data = await response.json();

  if (!Array.isArray(data)) {
    throw new Error("Fetched data is not an array");
  }

  return data as Comment[];
}
