import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import "antd/dist/antd.css";
import "./index.css";

//component
import App from "./App";

// apollo client
const client = new ApolloClient({
	uri: "https://cors-anywhere.herokuapp.com/https://rickandmortyapi.com/graphql",
	cache: new InMemoryCache(),
});

ReactDOM.render(
	<BrowserRouter>
		<ApolloProvider client={client}>
			<App />
		</ApolloProvider>
	</BrowserRouter>,
	document.getElementById("root")
);
