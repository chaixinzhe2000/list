/** @jsxRuntime classic */
/** @jsx jsx */
import { useMutation } from '@apollo/client';
import { jsx } from '@emotion/react';
import { useEffect } from 'react';
import { CREATE_USER } from '../../query';

interface LoginScreenProps {
	accessToken: string
	name: string
	setIsLoggedIn: any
}

export function LoginScreen({ accessToken, name, setIsLoggedIn }: LoginScreenProps) {

	const [createUser, { data, loading, error }] = useMutation(CREATE_USER);

	useEffect(() => {
		console.log(accessToken)
		if (accessToken.length == 0) {
			return
		}
		console.log("PROCEED TO REGISTER")
		createUser({
			variables: {
				user: {
					name: name,
					accessToken: accessToken
				}
			}
		}).then(() => {
			setIsLoggedIn(true)
		}).catch((err) => {
			console.log(err)
		})
	}, [accessToken])

	return (
		<div>
			NOT LOGGED IN YET
		</div>
	);
}