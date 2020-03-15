import React from 'react';

import { Box } from '../atoms/layout';
import { Clock } from '../molecules/clock';

export default () => (
	<Box
		m="100px auto 0 auto"
		width="min-content"
	>
		<Clock/>
	</Box>
);