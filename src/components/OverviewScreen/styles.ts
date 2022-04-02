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

export const input = css`
	width: 93%;
	display: flex;
	align-items: center;
	margin-top: 12px;
`

export const listWrapper = css`
	width: 93%;
	margin-top: 12px;
	padding-bottom: 12px;
	max-height: 349px;
	overflow-y: scroll;
`

export const createButton = css`
	padding: 7px;
	cursor: pointer;
	border-radius: 90px;
	margin-left: 10px;
	background-color: #5644f4;

	&:hover {
		background-color: #7769f6;
	}

`

export const spinner = css`
	padding-top: 80px;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
`

export const loadingText = css`
	color: #5644f4;
	font-size: 15px;
	margin-top: 10px;
`