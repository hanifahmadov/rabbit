/* eslint-disable */
let apiUrl

const apiUrls = {
  //: production server url
  production:  process.env.REACT_APP_SERVER_PRO,

  //: local server 
  development: process.env.REACT_APP_SERVER_DEV
}

if (window.location.hostname === process.env.REACT_APP_LOCALHOST) {
  apiUrl = apiUrls.development
} else {
  apiUrl = apiUrls.production
}

export default apiUrl
