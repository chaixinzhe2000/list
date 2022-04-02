import { css } from '@emotion/react'

export const listItem = css`
	width: 100%;
	padding: 6px 10px;
	border-radius: 8px;
	border: 1px #ced5dd solid;
	font-size: 14px;
	color: rgb(49, 48, 48);
	margin-bottom: 5px;

	&:hover {
		background-color: #7769f6;
		border: 1px #7769f6 solid;
		color: white;
		cursor: pointer;
	}
`

export const completedListItem = css`
	width: 100%;
	padding: 6px 10px;
	border-radius: 8px;
	border: 1px #ced5dd solid;
	color: #ced5dd;
	font-size: 14px;
	margin-bottom: 5px;
	text-decoration: line-through;
`