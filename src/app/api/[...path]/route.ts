import {NextRequest, NextResponse} from "next/server";
import {dhis2HttpClient} from "@/utils/dhis2";

// Opt out of caching for all data requests in the route segment
export const dynamic = 'force-dynamic'


const baseURL = process.env.DHIS2_URL;
const pat = process.env.DHIS2_PAT;

export async function GET(request: NextRequest) {
		const url = request.url as string;
		const urlToForward = url
				.substring(url.lastIndexOf("/api/"))
				.replace("/api/", "");

		const response = await dhis2HttpClient.get(urlToForward)

		return NextResponse.json(response);
}
