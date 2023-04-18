import { store } from '@/store';
import { GlobalStyle } from '@/styles/globalStyle';
import theme from '@/styles/theme';
import 'bootstrap/dist/css/bootstrap.min.css';
import type { AppProps } from 'next/app';
import { Provider } from 'react-redux';
import { persistStore } from 'redux-persist';
import { PersistGate } from 'redux-persist/integration/react';
import { ThemeProvider } from 'styled-components';

const persistor = persistStore(store);

export default function App({ Component, pageProps }: AppProps) {
	return (
		<Provider store={store}>
			<PersistGate loading={null} persistor={persistor}>
				<ThemeProvider theme={theme}>
					<GlobalStyle />
					<Component {...pageProps} />
				</ThemeProvider>
			</PersistGate>
		</Provider>
	);
}
