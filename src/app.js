import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "normalize.css";
import "./styles/styles.scss";

const ExpenseDashboardPage = () => <div>Some Text from dashboard</div>;

const AddExpensePage = () => <div>This is my add expense page</div>;

const EditExpensePage = () => <div>This is my EDIT expense page</div>;

const HelpPage = () => <div>This is the HELP page</div>;

const NotFoundPage = () => <div>404! Not Found!</div>;

const routes = (
	<BrowserRouter>
		<Switch>
			<Route path='/' exact component={ExpenseDashboardPage} />
			<Route path='/create' component={AddExpensePage} />
			<Route path='/edit' component={EditExpensePage} />
			<Route path='/help' component={HelpPage} />
			<Route component={NotFoundPage} />
		</Switch>
	</BrowserRouter>
);

ReactDOM.render(routes, document.getElementById("app"));
