import { gql } from "@apollo/client";

export const GET_ALL_TASKS_WITH_ID = gql`
  query Query($getAllTasksId: String) {
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