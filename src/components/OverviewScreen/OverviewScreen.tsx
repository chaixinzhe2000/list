/** @jsxRuntime classic */
/** @jsx jsx */
import { css, jsx } from '@emotion/react'
import React, { useState } from 'react';
import { UserSvg, SettingsSvg } from '../../images'
import { Input } from '@chakra-ui/react'
import * as styles from './styles'

export function OverviewScreen() {
	return (
		<div css={styles.wrapper}>
			<div css={styles.topbar}>
				<div css={styles.title}>List</div>
				<div css={styles.buttons}>
					<div css={styles.iconSvg}><UserSvg /></div>
					<div css={styles.iconSvg}><SettingsSvg /></div>
				</div>
			</div>
			<div css={styles.input}>
				<Input
					focusBorderColor='#5644f4'
					placeholder='What is on your mind?'
					size='sm'
				/>
			</div>
			<div css={styles.listWrapper}>
				{/* <ListItem /> */}
			</div>
		</div>
	);
}