import React from 'react';
import styled from 'styled-components';
import {
	color,
	ColorProps,
	ColorStyleProps,
	border,
	BorderProps,
	typography,
	TypographyProps,
} from 'styled-system';
import { css } from '@styled-system/css';

import { Box } from '../layout';
import { Label } from '../typography';

export const TextInput: React.FC<TextInputProps> = props => (
	<Box mb={4}>
		{!!props.label && <Label>{props.label}</Label>}
		<StyledTextInput
			{...props}
			bg="grays.100"
			borderColor={props.error && props.error.length ? 'reds.300' : 'grays.300'}
		/>
		{!!props.error && <Label color="reds.300">{props.error}</Label>}
	</Box>
);

interface TextInputProps extends
	ColorStyleProps,
	BorderProps,
	TypographyProps,
	React.InputHTMLAttributes<HTMLInputElement> {
	error?: string;
	label?: string;
}

const textInputStyle = css({
	fontFamily: 'input',
	fontSize: 'input',
	lineHeight: 'input',
	color: 'grays.300',
	width: 'full',
	borderTopWidth: 0,
	borderLeftWidth: 0,
	borderRightWidth: 0,
	borderTopLeftRadius: 2,
	borderTopRightRadius: 2,
	borderColor: 'reds.300',
	pl: 2,
	pr: 2,
});

const StyledTextInput = styled.input<
	ColorProps &
	BorderProps &
	TypographyProps
>(
	textInputStyle,
	color,
	border,
	typography,
);

const StyledTextareaInput = styled.textarea<
	ColorProps &
	BorderProps &
	TypographyProps
>(
	textInputStyle,
	color,
	border,
	typography,
);