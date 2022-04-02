/** @jsxRuntime classic */
/** @jsx jsx */
import { useMutation } from '@apollo/client';
import { jsx } from '@emotion/react';
import { useEffect } from 'react';
import { useChromeStorageLocal } from 'use-chrome-storage';
import { LogInSvg, SettingsSvg, UserSvg } from '../../images';
import { CREATE_USER } from './query';
import * as styles from './styles'
interface LoginScreenProps {
	accessToken: string
	name: string
	setIsLoggedIn: any
}

export function LoginScreen({ accessToken, name, setIsLoggedIn }: LoginScreenProps) {

	const [createUser, { data, loading, error, reset }] = useMutation(CREATE_USER);
	const [loggedInAccount, setLoggedInAccount, isPersistent] = useChromeStorageLocal('listLoggedInAccount', '');

	const handleRegister = (name: string, accessToken: string) => {
		createUser({
			variables: {
				user: {
					name: name,
					accessToken: accessToken
				}
			}
		}).then(() => {
			setIsLoggedIn(true)
			setLoggedInAccount(accessToken)
		})
			.catch(console.log)
	}

	useEffect(() => {
		// if logged in user haven't changed
		if (accessToken == loggedInAccount && loggedInAccount.length != 0) {
			setIsLoggedIn(true)
			return
		}
		// unregistered. if both info are ready, register
		if (accessToken.length == 0 || name.length == 0) return
		handleRegister(name, accessToken)
	}, [accessToken, name])

	return (
		<div css={styles.wrapper}>
			<div css={styles.topbar}>
				<div css={styles.title}>List</div>
				<div css={styles.buttons}>
					<div css={styles.iconSvg}><UserSvg /></div>
					<div css={styles.iconSvg}><SettingsSvg /></div>
				</div>
			</div>
			<div css={styles.authBody}>
				<div css={styles.authSvg}>
					<LogInSvg />
				</div>
				<div css={styles.tagline}>
					Log in Once<br />Sync Everywhere
				</div>
				<div css={styles.fineprint}>
					Authenticate your Google account in an external tab
				</div>
			</div>
		</div>
	);
}