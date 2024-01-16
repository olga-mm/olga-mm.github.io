export class ApiErrorModel {
	data: any;
	status: number | null;

	get detail(): string {
		return this.data && this.data.detail ? this.data.detail : '';
	}

	constructor(data: any, status: number | null = null) {
		this.data = data;
		this.status = status;
	}
}
