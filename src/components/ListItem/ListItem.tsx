/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from '@emotion/react'
import { useState } from "react"
import * as styles from './styles'

export function ListItem() {

	const [isCompleted, setIsCompleted] = useState(false)

	const onCompleted = () => {
		setIsCompleted(true)
	}

	return (
		<div onClick={onCompleted} css={isCompleted ? styles.completedListItem : styles.listItem}>
			Submit cs1951v homework tmr
		</div>
	)
}