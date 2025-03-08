export const baseUrl = 'http://localhost:4000';
export const placeHolderImage = "https://images.unsplash.com/photo-1541963463532-d68292c34b19?q=80&w=1976&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"


export const status = (currentStatus) => {
  if (currentStatus) return 'Audiobook Ready';

  return 'Audiobook Not Ready';
}
