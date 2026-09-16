export interface Project {
	title: string;
	summary: string;
	role: string;
	stack: string[];
	/** Path under /static, or undefined while a real screenshot isn't in yet. */
	image?: string;
	link?: string;
	/** Same underlying product deployed for multiple organizations - named here instead of as separate cards. */
	variants?: string[];
}
