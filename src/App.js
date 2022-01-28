import "antd/dist/antd.css";
import {Route, Switch, Redirect} from "react-router-dom";
import Login from "./pages/Login";

function App() {
	return (
		<Switch>
			<Route path="/login" component={Login} />
			<Redirect to="/login" exact from="/" />
		</Switch>
	);
}

export default App;
