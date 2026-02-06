export const initializeDemoData = () => {
  const existingUsers = localStorage.getItem('codiko_users');
  
  if (!existingUsers) {
    const demoUsers = [
      {
        id: '1',
        username: 'Demo User',
        email: 'demo@codiko.com',
        password: 'demo123',
        completedChapters: [],
        enrollmentDate: new Date().toISOString()
      }
    ];
    
    localStorage.setItem('codiko_users', JSON.stringify(demoUsers));
  }
};
