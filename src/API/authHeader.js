export function authHeader(user) {
  
    if (user && user.token) {
      return { Authorization: "Basic " + user.token };
    } else {
      return {};
    }
    
  }