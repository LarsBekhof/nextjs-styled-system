import styled from 'styled-components';
import {
	variant,
	typography,
	TypographyProps,
	color,
	ColorStyleProps,
	space,
	SpaceProps,
} from 'styled-system';
import { css } from '@styled-system/css';

const headingStyle = css({
	mt: 0,
	mb: 0,
	pb: 3,
	fontFamily: 'heading',
	fontSize: 'heading.1',
	lineHeight: 'heading.1',
	color: 'grays.300',
});

const headingVariants = variant({
	variants: {
		2: {
			fontSize: 'heading.2',
			lineHeight: 'heading.2',
		},
		3: {
			fontSize: 'heading.3',
			lineHeight: 'heading.3',
		},
	},
});

export const Heading = styled.h1<
	TypographyProps &
	ColorStyleProps &
	SpaceProps &
	{ variant?: number|string }
>(
	headingStyle,
	headingVariants,
	typography,
	color,
	space,
)