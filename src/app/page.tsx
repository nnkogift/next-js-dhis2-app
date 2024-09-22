"use client";

import {useDataQuery} from "@dhis2/app-runtime";
import {CircularLoader} from "@dhis2/ui"

const query = {
		me: {
				resource: "me"
		}
}


type Response = {
		me: {
				id: string;
				username: string;
				displayName: string;
		}
}

export default function Home() {
		const {data, loading, error} = useDataQuery<Response>(query);


		if (loading) {
				return (
						<div className="flex min-h-screen flex-col items-center justify-center p-24">
								<CircularLoader/>
						</div>
				)
		}

		if (error) {
				return (
						<div className="flex min-h-screen flex-col items-center justify-center p-24">
								<p>Error: {error.message}</p>
						</div>
				)
		}

		return (
				<main className="flex min-h-screen flex-col items-center justify-center p-24">
						<h1 className="text-2xl font-bold text-gray-900">Welcome to DHIS2 + Next JS </h1>
						Hello, {data.me?.displayName}!
				</main>
		);
}
