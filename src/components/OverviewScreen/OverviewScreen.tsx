/** @jsxRuntime classic */
/** @jsx jsx */
import { useQuery } from '@apollo/client';
import { Input } from '@chakra-ui/react';
import { jsx } from '@emotion/react';
import { SettingsSvg, UserSvg } from '../../images';
import { ListItem } from '../ListItem';
import { GET_ALL_TASKS_WITH_ID } from './query';
import * as styles from './styles';

export function OverviewScreen() {

	const { loading, error, data } = useQuery(GET_ALL_TASKS_WITH_ID, {
		variables: {
			getAllTasksId: "hello"
		}
	});

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
				<ListItem />
			</div>
		</div>
	);
}