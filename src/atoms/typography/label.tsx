import styled from 'styled-components';
import {
	typography,
	TypographyProps,
	color,
	ColorStyleProps,
	space,
	SpaceProps,
} from 'styled-system';
import { css } from '@styled-system/css';

const labelStyle = css({
	mt: 2,
	mb: 3,
	fontFamily: 'label',
	fontSize: 'label',
	lineHeight: 'label',
	color: 'grays.300',
});

export const Label = styled.label<
	TypographyProps &
	ColorStyleProps &
	SpaceProps
>(
	labelStyle,
	typography,
	color,
	space,
);