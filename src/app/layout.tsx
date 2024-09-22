import type {Metadata} from "next";
import "./globals.css";
import {DHIS2AppProvider} from "@/components/DHIS2AppProvider";
import {getSystemInfo} from "@/utils/systemInfo";
import {ReactNode} from "react";


export const metadata: Metadata = {
		title: "DHIS2 Next App",
		description: "An example of DHIS2 NextJS app",
};


export default async function RootLayout({
																						 children
																				 }: Readonly<{
		children: ReactNode;
}>) {

		const systemInfo = await getSystemInfo();

		return (
				<html lang="en">
				<body>
				<DHIS2AppProvider systemInfo={systemInfo} baseUrl={`../`}>
						{children}
				</DHIS2AppProvider>
				</body>
				</html>
		);
}

