import React, { useState } from 'react';

import { Box } from '../atoms/layout';
import { TextInput, Button, TextareaInput } from '../atoms/input';
import { Heading, Paragraph } from '../atoms/typography';
import { Modal } from '../atoms/modals';
import { FileItem } from '../molecules/file';

export default () => {
	const [modalIsOpen, setModalIsOpen] = useState(true);

	return (
		<Box m="0 auto" width="500px">
			<TextInput defaultValue="This is an input." />
			<TextInput placeholder="This is an input with placeholder." />
			<TextInput
				defaultValue="This is an input with an error."
				error="This is the error"
			/>
			<TextInput
				defaultValue="This is an input with a label."
				label="This is the label"
			/>
			<TextInput
				defaultValue="This is an input with a label and an error."
				label="This is the label"
				error="This is the error"
			/>
			<TextareaInput
				defaultValue="This is a textarea."
			/>
			<Heading>This is a heading 1.</Heading>
			<Heading variant="2">This is a heading 2.</Heading>
			<Heading variant="3">This is a heading 3.</Heading>
			<Paragraph>This is a paragraph. </Paragraph>
			<Paragraph>This is the second paragraph.</Paragraph>
			<Box>
				<Button>This is a button</Button>
				<Button variant="text">This is a text button</Button>
			</Box>
			<Button onClick={() => setModalIsOpen(true)}>Open modal</Button>
			{modalIsOpen && (
				<Modal
					title={<Heading>This is a modal</Heading>}
					onClose={() => setModalIsOpen(false)}
				>
					<Paragraph>This is some modal content</Paragraph>
				</Modal>
			)}
			<FileItem
				filename="This is a file"
			/>
		</Box>
	);
};