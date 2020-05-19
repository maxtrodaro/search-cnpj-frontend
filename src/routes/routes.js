import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Login from "../pages/Login";
import Profile from "../pages/RegisterProfile";
import HomeMaster from "../pages/HomeMaster";
import HomeProject from "../pages/HomeProject";
import HomeSearch from "../pages/HomeSearch";
import RegisterStore from "../pages/RegisterStore";
import SearchStore from "../pages/SearchStore";
import EditStore from "../pages/EditStore";
import DeleteStore from "../pages/DeleteStore";
import NotFound from "../pages/NotFound";
import PrivateRoute from "./PrivateRoute";

export default function Routes() {
	return (
		<BrowserRouter>
			<Switch>
				<Route path="/" exact component={Login} />
				<Route path="/profile" component={Profile} />
				<PrivateRoute path="/homemaster" component={HomeMaster} />
				<PrivateRoute path="/homeproject" component={HomeProject} />
				<PrivateRoute path="/homesearch" component={HomeSearch} />
				<PrivateRoute path="/register-store" component={RegisterStore} />
				<PrivateRoute path="/search-store" component={SearchStore} />
				<PrivateRoute path="/edit-store" component={EditStore} />
				<PrivateRoute path="/delete-store" component={DeleteStore} />
				<Route component={NotFound} />
			</Switch>
		</BrowserRouter>
	);
}
