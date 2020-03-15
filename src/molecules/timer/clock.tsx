import React, { useEffect, useState } from 'react';

import { Flex, Box } from '../../atoms/layout';
import { Heading } from '../../atoms/typography';

const size = 500;
const indicatorSize = 10;

const clockNumbers = [12, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];

const secInDeg = 360 / 60;
const minInDeg = 360 / 60;
const houInDeg = 360 / 12;

const getHandSize = (shorten: number) => (size / 2 - shorten);
const getIndicatorOffset = () => ((size - indicatorSize) / 2);
const getNumberOffset = (inset: number) => (size / 4 - inset);

const getDegSec = () => (secInDeg * (new Date()).getSeconds());
const getDegMin = () => (minInDeg * (new Date()).getMinutes());
const getDegHou = () => (houInDeg * ((new Date()).getHours() > 11 ? (new Date()).getHours() - 11 : (new Date()).getHours()));

export const Clock: React.FC = () => {
	const [degSec, setDegSec] = useState(getDegSec());
	const [degMin, setDegMin] = useState(getDegMin());
	const [degHou, setDegHou] = useState(getDegHou());

	useEffect(() => {
		const interval = setInterval(() => {
			setDegSec(getDegSec());
			setDegMin(getDegMin());
			setDegHou(getDegHou());
		}, 1000);
		return () => clearInterval(interval);
	}, [degSec, degMin, degHou]);

	return (
		<Flex
			m="100px auto 0 auto"
			height={size}
			width={size}
			bg="white"
			borderRadius="100%"
			borderStyle="solid"
			borderWidth={2}
			justifyContent="center"
			alignItems="center"
		>
			<Box height="15px" width="15px" bg="grays.300" borderRadius="100%" zIndex={10} />

			{[...Array(60).keys()].map(key => <Indicator key={key} deg={minInDeg * (key + 1)} />)}

			{[...Array(clockNumbers.length).keys()].map(key => (
				<ClockNumber
					key={key}
					number={clockNumbers[key]}
					deg={360 / clockNumbers.length * key}
				/>
			))}

			<ClockHand color="reds.300" handSize={getHandSize(30)} deg={degSec} />
			<ClockHand color="grays.300" handSize={getHandSize(30)} deg={degMin} />
			<ClockHand color="grays.300" handSize={getHandSize(100)} deg={degHou} />
		</Flex>
	);
};

const Indicator: React.FC<IndicatorProps> = ({ deg }) => (
	<Box
		position="absolute"
		bg="grays.300"
		height={indicatorSize}
		width="3px"
		borderBottomLeftRadius="100%"
		borderBottomRightRadius="100%"
		style={{ transform: `rotate(${deg}deg) translateY(-${getIndicatorOffset()}px)` }}
	/>
);

interface IndicatorProps {
	deg: number;
}

const ClockNumber: React.FC<ClockNumberProps> = ({ number, deg }) => (
	<Box
		position="absolute"
		height={size / 2}
		style={{ transform: `rotate(${deg}deg) translateY(-${getNumberOffset(20)}px)` }}
	>
		<Heading style={{ transform: `rotate(-${deg}deg)` }}>{number}</Heading>
	</Box>
);

interface ClockNumberProps {
	number: number;
	deg: number
}

const ClockHand: React.FC<ClockHandProps> = ({ color, handSize, deg }) => (
	<Box
		height={handSize}
		width="5px"
		bg={color}
		position="absolute"
		borderTopLeftRadius="100%"
		borderTopRightRadius="100%"
		style={{ transform: `rotate(${deg}deg) translateY(-${handSize / 2}px)` }}
	/>
);

interface ClockHandProps {
	color: string;
	handSize: number;
	deg: number;
}