/** @jsxRuntime classic */
/** @jsx jsx */
import { useMutation, useQuery } from '@apollo/client';
import { Input, Spinner } from '@chakra-ui/react';
import { jsx } from '@emotion/react';
import { useState } from 'react';
import { Bars } from 'react-loader-spinner';
import { SendSvg, SettingsSvg, UserSvg } from '../../images';
import { ListItem } from '../ListItem';
import { CREATE_TASK, GET_ALL_TASKS_WITH_ID } from './query';
import * as styles from './styles';

interface OverviewScreenProps {
	accessToken: string
}

export function OverviewScreen({ accessToken }: OverviewScreenProps) {

	const {
		data: taskList = { getAllTasks: [] },
		error: taskQueryError,
		loading: loadingTasks
	} = useQuery(GET_ALL_TASKS_WITH_ID, {
		variables: {
			getAllTasksId: accessToken
		}
	});

	// TODO: can be optimized with https://www.apollographql.com/blog/apollo-client/caching/when-to-use-refetch-queries/
	const [createTask, { data, loading, error, reset }] = useMutation(
		CREATE_TASK,
		{
			refetchQueries: [
				GET_ALL_TASKS_WITH_ID,
				"AllTaskQuery"
			]
		});

	const [task, setTask] = useState("")

	// TODO: add empty error checking
	const handleCreateNewTask = () => {
		createTask({
			variables: {
				task: {
					taskName: task,
					authorToken: accessToken
				}
			}
		}).then(() => setTask(""))
			.catch(console.log)
	}

	const sortTaskByTime = (array: any[]) => {
		const arrayToSort = [...array]
		arrayToSort.sort(function (a, b) {
			// Turn your strings into dates, and then subtract them
			// to get a value that is either negative, positive, or zero.
			return new Date(b.updateTime).valueOf() - new Date(a.updateTime).valueOf();
		});
		return arrayToSort
	}

	const handleEnterDown = e => {
		if (e.key === 'Enter') {
			e.preventDefault();
			handleCreateNewTask()
		}
	}

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
					onChange={(e) => { setTask(e.target.value) }}
					onKeyPress={handleEnterDown}
					value={task}
				/>
				<div css={styles.createButton} onClick={handleCreateNewTask}>
					{loading ?
						<Bars
							height="18"
							width="18"
							color="white"
							ariaLabel="loading-indicator"
						/> :
						<SendSvg />}
				</div>
			</div>
			{loadingTasks ?
				<div css={styles.spinner}>
					<Spinner color='#5644f4' size='lg' thickness='3px' />
					<div css={styles.loadingText}>Loading</div>
				</div> : (
					<div css={styles.listWrapper}>
						{taskList.getAllTasks &&
							sortTaskByTime(taskList.getAllTasks).map((task, i) => {
								return <ListItem taskName={task.taskName} key={i} />
							})}
					</div>
				)}
		</div>
	);
}
