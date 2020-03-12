import styled from 'styled-components';
import {
	flexbox,
	FlexboxProps,
	layout,
	LayoutProps,
	color,
	ColorProps,
	background,
	BackgroundProps,
	border,
	BorderProps,
	position,
	PositionProps,
	shadow,
	ShadowProps,
	space,
	SpaceProps,
} from 'styled-system';
import { css } from '@styled-system/css';

const flexStyle = css({
	display: 'flex',
});

export const Flex = styled.div<
	FlexboxProps &
	LayoutProps &
	ColorProps &
	BackgroundProps &
	BorderProps &
	PositionProps &
	ShadowProps &
	SpaceProps
>(
	flexStyle,
	flexbox,
	layout,
	color,
	background,
	border,
	position,
	shadow,
	space,
);