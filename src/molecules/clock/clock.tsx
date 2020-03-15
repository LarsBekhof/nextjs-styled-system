import React, { useEffect, useState } from 'react';

import { Flex, Box } from '../../atoms/layout';
import { Heading } from '../../atoms/typography';

const size = 700;
const indicatorSize = 10;

const clockNumbers = [12, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];

const getHandSize = (shorten: number) => (size / 2 - shorten);
const getIndicatorOffset = () => ((size - indicatorSize) / 2);
const getNumberOffset = (inset: number) => (size / 4 - inset);

const getDegSec = (d: Date) => (
	(6 * d.getSeconds())
		+ (0.006 * d.getMilliseconds())
);
const getDegMin = (d: Date) => (
	(6 * d.getMinutes())
		+ (0.1 * d.getSeconds())
);
const getDegHou = (d: Date) => (
	30 * (d.getHours() > 11
			? d.getHours() - 12
			: d.getHours())
				+ (0.5 * d.getMinutes())
);

export const Clock: React.FC = () => {
	const [degSec, setDegSec] = useState(getDegSec(new Date()));
	const [degMin, setDegMin] = useState(getDegMin(new Date()));
	const [degHou, setDegHou] = useState(getDegHou(new Date()));

	useEffect(() => {
		const interval = setInterval(() => {
			const d = new Date();

			setDegSec(getDegSec(d));
			setDegMin(getDegMin(d));
			setDegHou(getDegHou(d));
		}, 20);
		return () => clearInterval(interval);
	}, [degSec, degMin, degHou]);

	return (
		<Flex
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

			{[...Array(60).keys()].map(key => (
				<Indicator
					key={key}
					deg={6 * (key + 1)}
					isHour={(key + 1) % 5 === 0}
				/>
			))}

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

const Indicator: React.FC<IndicatorProps> = ({ deg, isHour }) => (
	<Box
		position="absolute"
		bg="grays.300"
		height={indicatorSize}
		width={isHour ? '9px' : '3px'}
		borderBottomLeftRadius="100%"
		borderBottomRightRadius="100%"
		style={{ transform: `rotate(${deg}deg) translateY(-${getIndicatorOffset()}px)` }}
	/>
);

interface IndicatorProps {
	deg: number;
	isHour?: boolean;
}

const ClockNumber: React.FC<ClockNumberProps> = ({ number, deg }) => (
	<Box
		position="absolute"
		height={size / 2}
		style={{ transform: `rotate(${deg}deg) translateY(-${getNumberOffset(20)}px)` }}
	>
		<Heading p={0} style={{ transform: `rotate(-${deg}deg)` }}>{number}</Heading>
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