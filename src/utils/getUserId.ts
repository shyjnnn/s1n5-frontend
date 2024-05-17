export default function getUserId(): string | null {
  return localStorage.getItem('userId');
}
