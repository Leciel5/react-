import axios from "axios";
import {} from "antd";
import {getToken} from "./auth";

const instance = axios.create({
	baseURL: "http://localhost:3009",
	timenout: 5000,
});
instance.interceptors.request.use(
	function (config) {
		if (getToken()) {
			config.headers.authorization = `Bearer${getToken()}`;
		}
		return config;
	},
	function (error) {
		return Promise.reject(error);
	}
);
instance.interceptors.response.use(
	function (response) {
		return response.data;
	},
	function (error) {
		if (error.response && error.response.status == 401) {
			MessageChannel.error("没有权限");
			window.location.href = "/#/login";
		}
		return Promise.reject(error);
	}
);
export const get = (url, params) => instance.get(url, {params});
export const post = (url, data) => instance.post(url, data);
export const del = (url) => instance.delete(url);
export default instance;
