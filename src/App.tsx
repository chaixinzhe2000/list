/*global chrome*/
import React, { useState } from 'react';
import logo from './logo.svg';
import { useChromeStorageLocal } from 'use-chrome-storage';
import { useEffect } from 'react';
import { OverviewScreen } from './components';
import * as styles from './styles'
import { ChakraProvider, Input } from '@chakra-ui/react'

import { Global, css } from '@emotion/react'


function App() {

	const [value, setValue, isPersistent, error] = useChromeStorageLocal('listAccessToken', '');

	return (
		<ChakraProvider>
			<Global
				styles={css`
					@font-face {
						font-family: "Circular Std Book";
						src: url("./fonts/circular.eot");
						src: url("./fonts/circular.eot") format("embedded-opentype"), url("./fonts/circular.woff2") format("woff2"),
							url("./fonts/circular.woff") format("woff"), url("./fonts/circular.ttf") format("truetype"),
							url("./fonts/circular.svg") format("svg");
					}
						
					body {
						font-family: "Circular Std Book";
					}`
				}
			/>
			<div css={styles.wrapper}>
				<OverviewScreen />
				{/* {value} */}
			</div>
		</ChakraProvider>
	);
}

export default App;
