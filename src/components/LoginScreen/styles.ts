import { css } from '@emotion/react'

export const wrapper = css`
	width: 300px;
	height: 450px;
	display: flex;
	flex-direction: column;
	align-items: center;
`

export const topbar = css`
	height: 45px;
	width: 100%;
	background-color: #5644f4;
	color: white;
	display: flex;
	align-items: center;
	justify-content: space-between;
`

export const title = css`
	font-size: 20px;
	margin-left: 15px;
`

export const buttons = css`
	margin-right: 15px;
	display: flex;
	width: 60px;
	justify-content: space-between;
`

export const iconSvg = css`
	padding: 7px;
	cursor: pointer;
	border-radius: 90px;

	&:hover {
		background-color: #7769f6;
	}
`

export const authBody = css`
	width: 100%;
	height: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
	background-color: #5644f4;
	label: authBody;
`

export const authSvg = css`
	width: 100px;
	margin-top: 50px;
	label: authSvg
`

export const tagline = css`
	margin-top: 30px;
	font-size: 23px;
	text-align: center;
	line-height: 30px;
	color: white;
	label: tagline;
`

export const fineprint = css`
	margin-top: 10px;
	font-size: 14px;
	text-align: center;
	color: white;
	width: 60%;

	label: fineprint;
`