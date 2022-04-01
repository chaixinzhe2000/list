import { ApolloProvider, useMutation } from '@apollo/client';
import { ChakraProvider } from '@chakra-ui/react';
import { Global } from '@emotion/react';
import React, { useEffect, useState } from 'react';
import { useChromeStorageLocal } from 'use-chrome-storage';
import { LoginScreen, OverviewScreen } from './components';
import { client } from './graphql';
import { CREATE_USER } from './components/LoginScreen/query';
import * as styles from './styles';

function App() {

	const [accessToken] = useChromeStorageLocal('listAccessToken', '');
	const [name] = useChromeStorageLocal('listDisplayName', '');

	const [isLoggedIn, setIsLoggedIn] = useState(false)

	return (
		<ApolloProvider client={client}>
			<ChakraProvider>
				<Global styles={styles.global} />
				<div css={styles.wrapper}>
					{isLoggedIn ? <OverviewScreen /> :
						<LoginScreen accessToken={accessToken} name={name} setIsLoggedIn={setIsLoggedIn} />}
				</div>
			</ChakraProvider>
		</ApolloProvider>
	);
}

export default App;
