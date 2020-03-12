import styled from 'styled-components';
import {
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

export const Box = styled.div<
	LayoutProps &
	ColorProps &
	BackgroundProps &
	BorderProps &
	PositionProps &
	ShadowProps &
	SpaceProps
>(
	layout,
	color,
	background,
	border,
	position,
	shadow,
	space,
);