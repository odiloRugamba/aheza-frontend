import axios from "axios";

const URL = "http://aheza.org.rw/api";
const IMAGEURL = "http://aheza.org.rw/uploads";

const request = async (method, url, data, headers) => {
  try {
    console.log(URL + url);
    const userToken = localStorage.getItem("token");
    return await axios({
      method,
      url: URL + url,
      data,
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${userToken}`,
        ...headers,
      },
    });
  } catch (err) {
    console.log(err);
  }
};

const get = async (url, data, headers) => {
  console.log(data);
  return await request("GET", url, data, headers);
};

const post = async (url, data, headers) => {
  return await request("POST", url, data, headers);
};

const put = async (url, data, headers) => {
  return await request("PUT", url, data, headers);
};
const patch = async (url, data, headers) => {
  return await request("PATCH", url, data, headers);
};
const destroy = async (url, data, headers) => {
  return await request("DELETE", url, data, headers);
};

export const Dcore = {
  request,
  get,
  post,
  put,
  destroy,
  patch,
  URL,
  IMAGEURL,
};
