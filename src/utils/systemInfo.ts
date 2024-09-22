import {dhis2HttpClient} from "@/utils/dhis2";

export async function getSystemInfo() {
		const url = `system/info`;
		return dhis2HttpClient.get<Record<string, unknown>>(url);
}
