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

const paragraphStyle = css({
	mt: 2,
	mb: 3,
	fontFamily: 'paragraph',
	fontSize: 'paragraph',
	lineHeight: 'paragraph',
	color: 'grays.300',
});

export const Paragraph = styled.p<
	TypographyProps &
	ColorStyleProps &
	SpaceProps
>(
	paragraphStyle,
	typography,
	color,
	space,
);