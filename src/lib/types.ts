export interface Project {
	title: string;
	summary: string;
	role: string;
	stack: string[];
	/** Paths under /static. Omitted while there's nothing to show yet - ProjectCard renders a labeled placeholder instead, never a blank slot. */
	images?: string[];
	link?: string;
	/** Same underlying product deployed for multiple organizations - named here instead of as separate cards. */
	variants?: string[];
	/**
	 * Overrides ProjectCard's auto-derived no-image label (confidential /
	 * no screenshot yet / see link below) for a case that doesn't fit any of
	 * those - e.g. a real client project whose live site has since gone
	 * offline, which isn't a confidentiality gap.
	 */
	noImageLabel?: string;
}
