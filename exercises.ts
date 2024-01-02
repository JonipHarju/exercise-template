export function multiply(a, b) {
  return a * b;
}

interface User {
  id: number;
  first_name: string;
  last_name: string;
  email: string;
  city: string;
  date_of_birth: string;
}

// get the youngest user from the users array
export function getYoungestUser(users: User[]): User | void {
  // your code here
  let youngestUser: User | null = null;

  for (let user of users) {
    if (
      !youngestUser ||
      new Date(user.date_of_birth) > new Date(youngestUser.date_of_birth)
    ) {
      youngestUser = user;
    }
  }
  return youngestUser;
}
// get the oldest user from the users array
export function getOldestUser(users: User[]): User | void {
  // your code here

  let oldestUser: User | null = null;

  for (let user of users) {
    if (
      !oldestUser ||
      new Date(user.date_of_birth) < new Date(oldestUser.date_of_birth)
    ) {
      oldestUser = user;
    }
  }
  return oldestUser;
}

// get the users who's name starts with J. If no users found return an empty array
export function getNamesStartingWithJ(users: User[]): User[] {
  // your code here
  const filteredUsers = users.filter((user) => user.first_name.startsWith("J"));

  return filteredUsers;
}
