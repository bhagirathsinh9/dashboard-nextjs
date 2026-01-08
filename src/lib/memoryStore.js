const globalForUsers = globalThis

if (!globalForUsers.users) {
  globalForUsers.users = [
    {
      id: '1',
      name: 'Admin',
      email: 'admin@test.com',
      password: 'admin123',
      role: 'admin',
    },
  ]
}

export const users = globalForUsers.users
