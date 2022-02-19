import React from "react"
import { render } from "react-dom"

function Popup() {
	return (
		<div>
			Hello World! My name is Chai!
		</div>
	)
}

render(<Popup />, document.getElementById("react-target"))