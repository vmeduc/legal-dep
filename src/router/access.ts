import store from '@/store';

export function permissionCheck(to: any, from: any, next: any) {
  
  const x = store.getters.isAuthenticated;
  // const x = true;
  
  if (x) {
    next();
  } else {
    alert("Access denied.");
    next("/login");
  }
}