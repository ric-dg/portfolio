export interface Project {
	title: string;
	summary: string;
	role: string;
	stack: string[];
	/** Paths under /static. Omitted entirely (no placeholder shown) when there's nothing to show yet. */
	images?: string[];
	link?: string;
	/** Same underlying product deployed for multiple organizations - named here instead of as separate cards. */
	variants?: string[];
}
