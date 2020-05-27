import { createGlobalStyle } from "styled-components";

import variables from "./variables";

export default createGlobalStyle`
	@import url("https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;600;700;800&display=swap");

	* {
		margin: 0;
		padding: 0;
		outline: 0;
		box-sizing: border-box;
	}

	body {
		font: 400 14px 'OpenSans', sans-serif;
		-webkit-font-smoothing: antialiased;
		height: 100vh;
		background: ${variables.colors.primaryColor};
		background: -webkit-linear-gradient(to right, ${variables.colors.primaryColor}, ${variables.colors.linearColor});
		background: linear-gradient(to right, ${variables.colors.primaryColor}, ${variables.colors.linearColor});
		overflow: hidden;
	}

	input,
	button {
		font: 400 18px 'OpenSans', sans-serif;
	}

	button {
		cursor: pointer;
		background: transparent;
		border: none;
		margin-top: 10px;
		text-align: left;
	}

	a {
		text-decoration: none;
	}

	input::-webkit-outer-spin-button,
	input::-webkit-inner-spin-button {
		-webkit-appearance: none;
		margin: 0;
	}

	input[type=number] {
		-moz-appearance: textfield;
	}

	li {
		list-style: none;
	}
`;
