export function loadUsers() {
    return JSON.parse(localStorage.getItem("users") || "[]");
}
export function saveUsers(users) {
    localStorage.setItem("users", JSON.stringify(users));
}
