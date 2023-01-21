function getApiUrl(route) {
  const url = `https://shortly-backend-67wc.onrender.com/${route}`;
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