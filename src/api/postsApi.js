const API_BASE_URL = (import.meta.env.VITE_API_BASE_URL || '').replace(/\/$/, '');

/**
 * Fetches published posts for a given category_type_id from the Laravel backend
 * (`GET /api/posts?category_type_id=X`), returning only the fields the frontend needs.
 */
export async function fetchPostsByCategoryTypeId(categoryTypeId) {
  const url = `${API_BASE_URL}/api/posts?category_type_id=${encodeURIComponent(categoryTypeId)}`;

  const response = await fetch(url);
  if (!response.ok) {
    throw new Error(`Failed to fetch posts for category_type_id=${categoryTypeId} (status ${response.status})`);
  }

  const posts = await response.json();

  return posts.map((post) => ({
    id: post.post_id,
    title: post.title,
    photo: post.photo || post.image || null,
    pdf: post.pdf || null,
  }));
}
