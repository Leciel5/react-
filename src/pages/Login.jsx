import React from "react";
import {Card, Form, Input, Button, message} from "antd";
import {reqLogin} from "../api/user";
import {setToken} from "../utils/auth";
import "./Login.css";

function Login(props) {
	const onFinish = async (values) => {
		console.log("Success:", values);
		const result = await reqLogin(values);
		console.log(result);
		message.success("登陆成功");
		setToken(result.data.token);
		props.history.push("/admin/pc");
	};

	const onFinishFailed = (errorInfo) => {
		console.log("Faile1d:", errorInfo);
	};
	return (
		<Form
			style={{marginTop: "200px"}}
			className="loginForm"
			name="basic"
			labelCol={{
				span: 4,
			}}
			wrapperCol={{
				span: 8,
			}}
			initialValues={{
				remember: true,
			}}
			onFinish={onFinish}
			onFinishFailed={onFinishFailed}
			autoComplete="off"
		>
			<Form.Item
				align="center"
				label="用户名"
				name="userName"
				rules={[
					{
						required: true,
						message: "用户名必须",
					},
				]}
			>
				<Input />
			</Form.Item>

			<Form.Item
				align="center"
				label="密码"
				name="password"
				rules={[
					{
						required: true,
						message: "密码必须",
					},
				]}
			>
				<Input.Password />
			</Form.Item>

			<Form.Item
				align="center"
				wrapperCol={{
					offset: 4,
					span: 8,
				}}
			>
				<Button type="primary" htmlType="submit">
					点俺登录
				</Button>
			</Form.Item>
		</Form>
	);
}

export default Login;
