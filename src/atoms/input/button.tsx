import styled from 'styled-components';
import {
	variant,
	color,
	ColorProps,
	typography,
	TypographyProps,
	layout,
	LayoutProps,
	background,
	BackgroundProps,
	border,
	BorderProps,
	shadow,
	ShadowProps,
	position,
	PositionProps,
} from 'styled-system';
import { css } from '@styled-system/css';

const headingStyle = css({
	fontFamily: 'button',
	fontSize: 'button',
	lineHeight: 'button',
	color: 'white',
	bg: 'blues.300',
	border: 'none',
	borderRadius: 2,
	p: 2,
	cursor: 'pointer',
});

const headingVariants = variant({
	variants: {
		text: {
			color: 'grays.300',
			bg: 'transparent',
			p: 0,
			textDecoration: 'underline',
		}
	},
});

export const Button = styled.button<
	ColorProps &
	TypographyProps &
	LayoutProps &
	BackgroundProps &
	BorderProps &
	ShadowProps	&
	PositionProps &
	{ variant?: string }
>(
	headingStyle,
	headingVariants,
	color,
	typography,
	layout,
	background,
	border,
	shadow,
	position,
);