export default function getUserId(): string | null {
  return localStorage.getItem('user_id');
}
