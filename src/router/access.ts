import store from '@/store';

export function permissionCheck(to: any, from: any, next: any) {
  
  const x = store.getters.isAuthenticated;
  
  console.log("in permissionCheck - \nx = ", x);

  if (x) {
    console.log("in permissionCheck - success");
    next();
  } else {
    console.log("in permissionCheck - error");
    next("/login");
  }
}