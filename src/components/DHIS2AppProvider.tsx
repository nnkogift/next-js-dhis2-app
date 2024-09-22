"use client";

import {ComponentType, ReactNode} from "react";
import dynamic from "next/dynamic";
import {CircularLoader} from "@dhis2/ui";

const NoSsrAppProvider: ComponentType<any> = dynamic(
		async () => {
				// @ts-ignore
				return import("@dhis2/app-runtime").then(({Provider}) => ({
						default: Provider
				}));
		},
		{
				ssr: false,
				loading: () => {
						return (
								<div className="min-h-screen w-full flex items-center justify-center">
										<CircularLoader/>
								</div>
						);
				}
		}
);

export function DHIS2AppProvider({
																		 children,
																		 systemInfo,
																		 baseUrl
																 }: {
		children: ReactNode;
		baseUrl: string;
		systemInfo: Record<string, unknown>
}) {
		const version = systemInfo.version as string;
		const apiVersion = parseInt(version.split(".")[1]);
		return (
				<NoSsrAppProvider
						config={{
								baseUrl,
								apiVersion,
								systemInfo
						}}
						plugin={{}}
						parentAlertsAdd={{}}
						showAlertsInPlugin={false}
				>
						{children}
				</NoSsrAppProvider>
		);
}
