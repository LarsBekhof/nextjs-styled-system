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


export const TextareaInput: React.FC<TextareaInputProps> = props => (
	<Box mb={4}>
		{!!props.label && <Label>{props.label}</Label>}
		<StyledTextareaInput
			{...props}
			bg="grays.100"
			borderColor={props.error && props.error.length ? 'reds.300' : 'grays.300'}
		/>
		{!!props.error && <Label color="reds.300">{props.error}</Label>}
	</Box>
);

interface TextareaInputProps extends
	ColorStyleProps,
	BorderProps,
	TypographyProps,
	React.InputHTMLAttributes<HTMLTextAreaElement> {
	error?: string;
	label?: string;
}

const textareaInputStyle = css({
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
	minHeight: 'input',
	resize: 'vertical',
	pl: 2,
	pr: 2,
});

const StyledTextareaInput = styled.textarea<
	ColorProps &
	BorderProps &
	TypographyProps
>(
	textareaInputStyle,
	color,
	border,
	typography,
);