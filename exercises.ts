export function multiply(a, b) {
  return a * b;
}

/**
 * Get the youngest user from the given array of users.
 * @param users - An array of User objects.
 * @returns The youngest user or null if the array is empty.
 */

interface User {
  id: number;
  first_name: string;
  last_name: string;
  email: string;
  city: string;
  date_of_birth: string;
}

export function getYoungestUser(users: User[]): User | void {
  let youngestUser: User | null = null;

  for (let user of users) {
    if (
      !youngestUser ||
      new Date(user.date_of_birth) > new Date(youngestUser.date_of_birth)
    ) {
      youngestUser = user;
    }
  }
  console.log(youngestUser);
  return youngestUser;
}

export function getOldestUser(users: User[]): User | void {
  let oldestUser: User | null = null;

  for (let user of users) {
    if (
      !oldestUser ||
      new Date(user.date_of_birth) < new Date(oldestUser.date_of_birth)
    ) {
      oldestUser = user;
    }
  }
  console.log(oldestUser);
  return oldestUser;
}
