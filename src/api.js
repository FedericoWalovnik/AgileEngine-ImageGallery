import axios from "axios";
const baseUrl = "http://interview.agileengine.com";

//intercept all the requests and add the authorization
axios.interceptors.request.use(
  async function(config) {
    config.headers.Authorization = localStorage.getItem("token");
    return config;
  },
  function(error) {
    // Do something with request error
    return Promise.reject(error);
  },
);

const ensureBearerToken = async () => {
  try {
    if (!localStorage.getItem("token")) {
      let response = await axios({
        method: "post",
        url: `${baseUrl}/auth`,
        data: {
          apiKey: process.env.VUE_APP_API_TOKEN,
        },
      });
      localStorage.setItem("token", response.data.token);
    }
  } catch (error) {
    console.log(error);
  }
};

const getImages = async (page) => {
  let response = await axios({
    method: "get",
    url: `${baseUrl}/images?page=${page}`,
  });
  return response;
};

const getImageDetails = async (imageId) => {
  let response = await axios({
    method: "get",
    url: `${baseUrl}/images/${imageId}`,
  });
  return response;
};

/*const hasToken = async () => {
  if (localStorage.getItem("token")) {
    return localStorage.getItem("token");
  } else {
    await hasToken
  }
};*/

export default {
  ensureBearerToken,
  getImages,
  getImageDetails,
};
