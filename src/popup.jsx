import React from "react"
import { render } from "react-dom"
import css from './popup.css'
import { UserSvg, SettingsSvg } from './images/icons.js'
import { ChakraProvider, Input } from '@chakra-ui/react'

// chrome-extension://okfilpobppkdoghdbkbabeamlicmddgf/popup.html

function Popup() {
	return (
		<ChakraProvider>
			<div className="wrapper">
				<div className="topbar">
					<div className="title">List</div>
					<div className="buttons">
						<div className="icon-svg"><UserSvg /></div>
						<div className="icon-svg"><SettingsSvg/></div>
					</div>
				</div>
				<div className="input">
					<Input
						focusBorderColor='#5644f4'
						placeholder='What is on your mind?'
						size='sm'
  				/>
				</div>	
			</div>
		</ChakraProvider>
	)
}

render(<Popup />, document.getElementById("react-target"))