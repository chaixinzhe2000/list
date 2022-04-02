/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from '@emotion/react'
import { useState } from "react"
import * as styles from './styles'

interface ListItemProps {
	taskName: string
}

export function ListItem({ taskName }: ListItemProps) {

	const [isCompleted, setIsCompleted] = useState(false)

	const onCompleted = () => {
		setIsCompleted(true)
	}

	return (
		<div onClick={onCompleted} css={isCompleted ? styles.completedListItem : styles.listItem}>
			{taskName}
		</div>
	)
}