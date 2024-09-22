import {HTTPClient} from "@/utils/http";

export const dhis2HttpClient = new HTTPClient(
		`${process.env.DHIS2_URL}/api/`,
		process.env.DHIS2_PAT!,
);


