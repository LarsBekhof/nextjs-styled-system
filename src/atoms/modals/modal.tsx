import React from 'react';

import { useWindowDimensions } from '../hooks';
import { Box } from '../layout';
import { Button } from '../input';

export const Modal: React.FC = ({ children }) => {
	const { width } = useWindowDimensions();

	return (
		<Box position="absolute" top={0} right={0} bottom={0} left={0} bg="modalBackground">
			<Box
				width={getModalWidth(width)}
				margin="0 auto"
				bg="grays.100"
				borderRadius={3}
				marginTop="10vh"
				p={4}
			>
				<Button
					variant="text"
					position="relative"
					right={16}
				>x</Button>
				{children}
			</Box>
		</Box>
	);
};

const getModalWidth = (width: number) => {
	if (width < 500) return 'modal.width.tiny';
	if (width < 600) return 'modal.width.small';
	if (width < 700) return 'modal.width.medium';
	return 'modal.width.large';
};