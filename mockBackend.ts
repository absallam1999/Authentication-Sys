import { Register } from "./types.js";

export function loadUsers(): Register[] {
  return JSON.parse(localStorage.getItem("users") || "[]");
}

export function saveUsers(users: Register[]) {
  localStorage.setItem("users", JSON.stringify(users));
}