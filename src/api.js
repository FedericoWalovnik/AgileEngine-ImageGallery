import axios from "axios";
const baseUrl = "http://interview.agileengine.com";

//intercept all the requests and add the authorization
axios.interceptors.request.use(
  function(config) {
    const token = localStorage.getItem("token");
    config.headers.Authorization = token;
    return config;
  },
  function(error) {
    // Do something with request error
    return Promise.reject(error);
  },
);

const getBearerToken = async () => {
  try {
    let response = await axios({
      method: "post",
      url: `${baseUrl}/auth`,
      data: {
        apiKey: "23567b218376f79d9415",
      },
    });
    localStorage.setItem("token", response.data.token);
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

export default {
  getBearerToken,
  getImages,
  getImageDetails,
};
