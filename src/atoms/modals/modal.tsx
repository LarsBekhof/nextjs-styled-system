import React from 'react';

import { useWindowDimensions } from '../hooks';
import { Box, Flex } from '../layout';
import { Button } from '../input';
import { Heading } from '../typography';

export const Modal: React.FC<ModalProps> = ({ onClose, title, children }) => {
	const { width } = useWindowDimensions();

	return (
		<Box
			onClick={onClose}
			position="absolute"
			top={0}
			right={0}
			bottom={0}
			left={0}
			bg="modalBackground"
		>
			<Box
				onClick={event => event.stopPropagation()}
				width={getModalWidth(width)}
				margin="0 auto"
				bg="grays.100"
				borderRadius={3}
				marginTop="10vh"
				p={4}
			>
				<Flex
					justifyContent="space-between"
					width="full"
				>
					{!!title && <Heading>{title}</Heading>}
					<Button variant="round" onClick={onClose}>
						<img src="/assets/close-white.svg" />
					</Button>
				</Flex>
				<Box>{children}</Box>
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

interface ModalProps {
	onClose: () => void;
	title?: React.ReactNode;
}