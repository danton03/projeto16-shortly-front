function getApiUrl(route) {
  const url = `https://projeto16-shortly-danton.herokuapp.com/${route}`;
  return url;
}

function getConfig (token='') {
  const config = {
    headers: {
      "Authorization": `Bearer ${token}`
    }
  }
  return config;
}

export { getApiUrl, getConfig };