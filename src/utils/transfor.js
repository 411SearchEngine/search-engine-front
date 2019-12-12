import React from 'react';

export function getFormData(formData) {
  let result = "";
  for (let key in formData) {
    result += key + '=' + formData[key] + '&';
  }
  return result.substring(0,result.length-1);
}

export function getHeader(type) {
  let header;
  if(type === 'json'){
    header = {'Content-Type':'application/json'}
  }else if(type === 'x-www-form-urlencoded'){
    header = {'Content-Type':'application/x-www-form-urlencoded'}
  }
  return header;
}


