import React from "react"
import { render } from "react-dom"
import css from './popup.css'
import { UserSvg, SettingsSvg } from './images/icons.js'

// chrome-extension://okfilpobppkdoghdbkbabeamlicmddgf/popup.html

function Popup() {
	return (
		<div className="wrapper">
			<div className="topbar">
				<div className="title">List</div>
				<div className="buttons">
					<div className="icon-svg"><UserSvg /></div>
					<div className="icon-svg"><SettingsSvg/></div>
				</div>
			</div>
		</div>
	)
}

render(<Popup />, document.getElementById("react-target"))