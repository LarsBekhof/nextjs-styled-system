import React from 'react';

import { Heading } from '../atoms/typography';
import { Flex, Box } from '../atoms/layout';

export default () => (
	<Box left={0} right={0} top={0} bottom={0} position="absolute" bg="reds.100">
		<Flex
			height="header"
			alignItems="center"
			justifyContent="center"
			bg="purples.300"
		>
			<Heading color="white">Ea exercitation nisi qui excepteur mollit irure laboris cillum.</Heading>
		</Flex>
	</Box>
);