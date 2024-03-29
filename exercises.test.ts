import { describe, expect, test } from "@jest/globals";
import * as fs from "fs";

const mockDataPath = "./MOCK_DATA.json";
const mockData: User[] = JSON.parse(fs.readFileSync(mockDataPath, "utf-8"));

interface User {
  id: number;
  first_name: string;
  last_name: string;
  email: string;
  city: string;
  date_of_birth: string;
}

import { multiply } from "./exercises";
describe("multiply the two numbers", () => {
  test("adds 1 + 2 to equal 3", () => {
    expect(multiply(1, 2)).toBe(2);
  });
});

import { getYoungestUser } from "./exercises";
describe("getYoungestUser", () => {
  test("should return the youngest user", () => {
    // expect(getYoungestUser(mockData)).toEqual(mockData[3]);
    expect(getYoungestUser(mockData)).toEqual({
      id: 4,
      first_name: "Florian",
      last_name: "McGillivrie",
      email: "fmcgillivrie3@dagondesign.com",
      city: "Rabaul",
      date_of_birth: "1/19/2020",
    });
  });
});

import { getOldestUser } from "./exercises";
describe("getOldestUser", () => {
  test("should return the oldest user", () => {
    expect(getOldestUser(mockData)).toEqual({
      id: 21,
      first_name: "Gertrude",
      last_name: "Kohrt",
      email: "gkohrtk@reverbnation.com",
      city: "Sadov",
      date_of_birth: "7/1/1900",
    });
  });
});

import { getNamesStartingWithJ } from "./exercises";

describe("getNamesStartingWithJ", () => {
  test("should return users whose first names start with 'J'", () => {
    const result = getNamesStartingWithJ(mockData);

    // Check if the result contains only users with names starting with 'J'
    expect(result.every((user) => user.first_name.startsWith("J"))).toBe(true);
  });

  test("should return an empty array if no users have names starting with 'J'", () => {
    // Create mock data with no users whose names start with 'J'
    const mockDataWithoutJ = mockData.map((user) => ({
      ...user,
      first_name: "NotJ",
    }));

    const result = getNamesStartingWithJ(mockDataWithoutJ);

    // Check if the result is an empty array
    expect(result).toEqual([]);
  });
});
