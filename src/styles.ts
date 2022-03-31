import { css } from '@emotion/react'

export const wrapper = css`
	width: 300px;
	height: 450px;
	padding: 0;
	font-family: "Circular Std Book";
	display: flex;
	flex-direction: column;
	align-items: center;
`

export const global = css`
	@font-face {
		font-family: "Circular Std Book";
		src: url("./fonts/circular.eot");
		src: url("./fonts/circular.eot") format("embedded-opentype"), url("./fonts/circular.woff2") format("woff2"),
			url("./fonts/circular.woff") format("woff"), url("./fonts/circular.ttf") format("truetype"),
			url("./fonts/circular.svg") format("svg");
	}
		
	body {
		font-family: "Circular Std Book";
	}
`