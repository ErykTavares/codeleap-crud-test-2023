import { store } from '@/store';
import { GlobalStyle } from '@/assets/styles/globalStyle';
import theme from '@/assets/styles/theme';
import 'bootstrap/dist/css/bootstrap.min.css';
import type { AppProps } from 'next/app';
import { Provider } from 'react-redux';
import { persistStore } from 'redux-persist';
import { PersistGate } from 'redux-persist/integration/react';
import { ThemeProvider } from 'styled-components';
import StyledComponentsRegistry from '@/lib/styledComponentsRegistry';

const persistor = persistStore(store);

export default function App({ Component, pageProps }: AppProps) {
	return (
		<StyledComponentsRegistry>
			<Provider store={store}>
				<PersistGate loading={null} persistor={persistor}>
					<ThemeProvider theme={theme}>
						<GlobalStyle />
						<Component {...pageProps} />
					</ThemeProvider>
				</PersistGate>
			</Provider>
		</StyledComponentsRegistry>
	);
}
