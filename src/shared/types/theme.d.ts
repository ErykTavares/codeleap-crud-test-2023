import 'styled-components';

declare module 'styled-components' {
	export interface DefaultTheme {
		media: {
			mobileS: string;
			mobileM: string;
			mobileL: string;
			tablet: string;
			laptop: string;
		};
		colors: {
			blue: string;
			red: string;
			green: string;
			lightGray: string;
			violet: string;
			rose: string;
			yellow: string;
			orange: string;
		};
	}
}
