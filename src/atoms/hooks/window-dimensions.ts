import { useState, useEffect } from 'react';

const getWindowDimensions = () => {
	const { innerWidth: width, innerHeight: height } = window;
	return { width, height };
}

export const useWindowDimensions = () => {
	const [windowDimensions, setWindowDimensions] = useState<{ width: number; height: number }>();

	useEffect(() => {
		if (typeof window !== 'undefined') {
			setWindowDimensions(getWindowDimensions());

			const handleResize = () => setWindowDimensions(getWindowDimensions());
			window.addEventListener('resize', handleResize);
			return () => window.removeEventListener('resize', handleResize);
		}
	}, [window]);

	return windowDimensions || { width: 0, height: 0 };
};