import Footer from '@/components/footer';
import Header from '@/components/header';
import StyledComponentsRegistry from '@/lib/styledComponentsRegistry';

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang='en'>
			<body>
				<StyledComponentsRegistry>
					<Header />
					{children}
					<Footer />
				</StyledComponentsRegistry>
			</body>
		</html>
	);
}
