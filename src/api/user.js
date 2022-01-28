import {post} from "../utils/request";
export const reqLogin = (data) => post("/api/v1/auth/manager_login", data);
