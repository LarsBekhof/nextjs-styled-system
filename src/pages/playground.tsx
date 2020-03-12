import React from 'react';

import { Box } from '../atoms/layout';
import { TextInput, Button, TextareaInput } from '../atoms/input';
import { Heading, Paragraph } from '../atoms/typography';
import { Modal } from '../atoms/modals';

export default () => (
	<>
		<Box>This is a flex element.</Box>
		<Box width="300px">
			<TextInput defaultValue="This is an input." />
		</Box>
		<Box width="300px">
			<TextInput placeholder="This is an input with placeholder." />
		</Box>
		<Box width="300px">
			<TextInput
				defaultValue="This is an input with an error."
				error="This is the error"
			/>
		</Box>
		<Box width="300px">
			<TextInput
				defaultValue="This is an input with a label."
				label="This is the label"
			/>
		</Box>
		<Box width="300px">
			<TextInput
				defaultValue="This is an input with a label and an error."
				label="This is the label"
				error="This is the error"
			/>
		</Box>
		<Box width="300px">
			<TextareaInput
				defaultValue="This is a textarea."
			/>
		</Box>
		<Heading>This is a heading 1.</Heading>
		<Heading variant="2">This is a heading 2.</Heading>
		<Heading variant="3">This is a heading 3.</Heading>
		<Paragraph> This is a paragraph. </Paragraph>
		<Paragraph>This is the second paragraph.</Paragraph>
		<Box>
			<Button>This is a button</Button>
			<Button variant="text">This is a text button</Button>
		</Box>
		<Modal>
			<Heading>This is a modal</Heading>
		</Modal>
	</>
);