export function setLocalStorage(name, email, token, id) {
  if (typeof window !== 'undefined') {
    window.localStorage.setItem('admin-user-token', token);
    window.localStorage.setItem('admin-user-email', email);
    window.localStorage.setItem('admin-user-name', name);
    window.localStorage.setItem('admin-user-id', id);

    return true;
  } else return false;
}

// Städa upp i local storage
export function removeLocalStorage(name, email, token, id) {
  window.localStorage.removeItem(name);
  window.localStorage.removeItem(email);
  window.localStorage.removeItem(token);
  window.localStorage.removeItem(id);

  return true;
}
