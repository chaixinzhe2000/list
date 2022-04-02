import { gql } from "@apollo/client";

export const GET_ALL_TASKS_WITH_ID = gql`
  query AllTaskQuery($getAllTasksId: String) {
		getAllTasks(id: $getAllTasksId) {
			taskName
			priority
			deadline
			completed
			authorToken
			updateTime
		}
	}
`

export const CREATE_TASK = gql`
	mutation Mutation($task: TaskInput) {
		createTask(task: $task) {
			taskName
			priority
			deadline
			completed
			authorToken
			updateTime
		}
	}
`