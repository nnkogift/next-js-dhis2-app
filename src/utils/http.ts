export class HTTPClient {
		constructor(private readonly baseURL: string, private readonly pat: string) {
		};

		async get<T>(path: string, options?: { params: URLSearchParams }) {
				const {params} = options ?? {}
				const url = new URL(path, this.baseURL);

				if (params) {
						Object.entries(params).forEach(([key, value]) => {
								url.searchParams.append(key, value);
						});
				}

				const response = await fetch(url, {
						headers: {
								Authorization: `ApiToken ${this.pat}`,
						},
				});

				const status = response.status;

				if (status >= 400) {
						throw `Request failed with status code ${status}`;
				}
				return (await response.json()) as T;

		}

		async post<T>(path: string, body: Object, options?: { params: URLSearchParams }) {
				const {params} = options ?? {}
				const url = new URL(path, this.baseURL);

				if (params) {
						Object.entries(params).forEach(([key, value]) => {
								url.searchParams.append(key, value);
						});
				}

				const response = await fetch(url, {
						method: 'POST',
						body: JSON.stringify(body),
						headers: {
								Authorization: `ApiToken ${this.pat}`,
								'Content-Type': 'application/json',
						},

				});

				const status = response.status;

				if (status >= 400) {
						console.error(await response.json());
						throw `Request failed with status code ${status}`;
				}

				return (await response.json()) as T;

		}
}
