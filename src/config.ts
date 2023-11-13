import { Metadata } from "next";

type Config = {
	metadata: Metadata;
	socials: Social[];
	skills: Skill[];
};

type Social = {
	name: string;
	url: string;
	color: string;
	hoverColor: string;
};

type Skill = {
	name: string;
	content: string;
};

export const Config: Config = {
	metadata: {
		title: "okNick.club",
		description:
			"Software Development, System Administration, Videography, Tricaster Operation",
	},

	socials: [
		{
			name: "GitHub",
			url: "https://www.github.com/okNick36",
			color: "bg-slate-600",
			hoverColor: "bg-slate-700",
		},
		{
			name: "Discord",
			url: "https://www.discord.com/users/937088486450794537",
			color: "bg-[#5865F2]",
			hoverColor: "bg-[#39419e]",
		},
		{
			name: "Twitch",
			url: "https://www.twitch.tv/okNickTTV",
			color: "bg-purple-600",
			hoverColor: "bg-purple-700",
		},
		{
			name: "X (Formerly Twitter)",
			url: "https://www.x.com/okNick36",
			color: "bg-slate-700",
			hoverColor: "bg-slate-800",
		},
	],

	skills: [
		{
			name: "Software Development",
			content:
				"I am interested in going further into software development. I have worked with languages such as Java, C#, JavaScript, and TypeScript with frameworks such as React, Next.js, and Node.js. I have also worked with databases such as MySQL, Redis and MongoDB.",
		},
		{
			name: "System Administration",
			content:
				"Along with software development, I am also interested in furthering my skills in system administration. At home (specifically in my basement), I have a homelab consisting of a server, switch, and a machine running OPNSense.",
		},
		{
			name: "Videography",
			content:
				"I am interested in videography, especially when it comes to sports. I have worked with high school football games as well as cross country and track events.",
		},
		{
			name: "Tricaster Operation",
			content:
				"Currently, operating a NewTek Tricaster is easily one of my favorite things to do every chance I get. I would like to take on broadcast / technical directing as a career in the future, and I plan to attend college for Communication and Media entering Fall 2025.",
		},
	],
};
