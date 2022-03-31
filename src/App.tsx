import { ChakraProvider } from '@chakra-ui/react';
import { Global } from '@emotion/react';
import React from 'react';
import { useChromeStorageLocal } from 'use-chrome-storage';
import { OverviewScreen } from './components';
import * as styles from './styles';

function App() {

	const [value, setValue, isPersistent, error] = useChromeStorageLocal('listAccessToken', '');

	return (
		<ChakraProvider>
			<Global styles={styles.global} />
			<div css={styles.wrapper}>
				<OverviewScreen />
				{/* {value} */}
			</div>
		</ChakraProvider>
	);
}

export default App;
