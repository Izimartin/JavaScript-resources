let users;
try {
  users = await import('https://example1.com/users');
} 
catch {
  users = await import('https://example2.com/users');
}