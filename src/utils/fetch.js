
function parseJSON(response) {
  return response.json();
}


function generateRequest(url, options) {
  return fetch(url, options)
    .then(parseJSON)
    .catch(err => ({
      err
    }));
}


function generateGetRequest(method) {
  const header = {
    method,
    headers: {
      'Content-Type': 'application/json',
    },
  };
  return header;
}

function generateRequestHeader(method) {
  const header = {
    method,
    headers: {
      'Content-Type': 'application/json',
    },
    attached: 'application/json',
  };
  return header;

}

function generateFormRequestHeader(method) {
  const header = {
    method,
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    attached: 'application/x-www-form-urlencoded',
  };
  try {
    Object.assign(header.headers, {
      'X-CU-AccessToken-OAuthAdmin': sessionStorage.getItem('access_token'),
    });
  } catch (e) {
    return header;
  }
  return header;

}


const Request = {
  post(url, data) {
    return generateRequest(`${url}`, {
      ...generateRequestHeader('POST'), body: JSON.stringify(data),
    });
  },
  patch(url, data) {
    const body = JSON.stringify(data);
    return generateRequest(`${BASE_URL}${url}`, {...generateRequestHeader('PATCH'), body});
  },
  put(url, data) {
    const body = JSON.stringify(data);
    return generateRequest(`${BASE_URL}${url}`, {...generateRequestHeader('PUT'), body});
  },
  get(url) {
    return generateRequest(`${BASE_URL}${url}`, {...generateRequestHeader('GET')});
  },
  delete(url) {
    return generateRequest(`${BASE_URL}${url}`, {...generateRequestHeader('DELETE')});
  },
};

export default Request;

