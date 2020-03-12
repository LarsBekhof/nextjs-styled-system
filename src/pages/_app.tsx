import { ThemeProvider } from 'styled-components';

import '../providers/style.css';
import theme from '../providers/theme';
import { FontProvider } from '../providers/font';

export default ({ Component, pageProps }) => (
	<ThemeProvider theme={theme}>
		<FontProvider/>
		<Component {...pageProps} />
	</ThemeProvider>
);