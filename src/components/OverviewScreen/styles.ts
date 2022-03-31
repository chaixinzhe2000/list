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
	margin-top: 12px;
`

export const listWrapper = css`

	width: 93%;
	margin-top: 12px;
`