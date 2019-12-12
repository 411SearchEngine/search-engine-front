// use localStorage to store the authority info, which might be sent from server in actual project.
export function getAuthority() {
  // return localStorage.getItem('antd-pro-authority') || ['admin', 'user'];
  let authority = localStorage.getItem('antd-pro-authority');
  if (authority) {
    if (authority.includes('[')) {
      authority = JSON.parse(authority);
    } else {
      authority = [JSON.parse(authority)];
    }
  } else {
    authority = ['admin'];
  }
  return authority;
}

export function setAuthority(authority) {
  return localStorage.setItem('antd-pro-authority', JSON.stringify(authority));
}

export function setLoginIngo(loginInfo) {
  return localStorage.setItem('mip-assistant-loginInfo',JSON.stringify(loginInfo))
}

export function getLoginInfo() {
  const loginInfo = localStorage.getItem('mip-assistant-loginInfo');
  if(loginInfo){
    return JSON.parse(loginInfo);
  }
  return {};
}
