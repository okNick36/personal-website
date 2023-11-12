"use client";
import {
	Tooltip,
	TooltipContent,
	TooltipProvider,
	TooltipTrigger,
} from "@/components/ui/tooltip";
import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "../components/ui/button";
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "../components/ui/card";

export default function Page() {
	return (
		<motion.div
			className="flex justify-center"
			initial="hidden"
			animate="visible"
			variants={{
				hidden: {
					scale: 0.8,
					opacity: 0,
				},
				visible: {
					scale: 1,
					opacity: 1,
					transition: {
						delay: 0.2,
					},
				},
			}}
		>
			<div className="mt-28 text-center">
				<p className="text-6xl font-semibold">Hey, I&apos;m Nick!</p>
				<p className="mt-6 text-2xl text-gray-500">
					17 year old working with{" "}
					<TooltipProvider>
						<Tooltip>
							<TooltipTrigger asChild>
								<Link href="/what-i-do" className="font-semibold">
									a few things...
								</Link>
							</TooltipTrigger>
							<TooltipContent>
								<span className="text-3xl">
									Software Development, System Administration, Videography,
									Tricaster Operation
								</span>
							</TooltipContent>
						</Tooltip>
					</TooltipProvider>
				</p>
				<Card className="mt-5 ">
					<CardHeader>
						<CardTitle>Where to find me</CardTitle>
						<CardDescription>
							I&apos;m just kind of everywhere ¯\_(ツ)_/¯
						</CardDescription>
					</CardHeader>
					<CardContent>
						<Link href="https://www.github.com/okNick36" target="_blank">
							<Button className="bg-slate-600 w-full hover:bg-slate-700 mb-4">
								GitHub
							</Button>
						</Link>
						<Link
							href="https://www.discord.com/users/937088486450794537"
							target="_blank"
						>
							<Button className="bg-[#5865F2] hover:bg-[#39419e] w-full mb-4">
								Discord
							</Button>
						</Link>
						<Link href="https://www.twitch.tv/okNickTTV" target="_blank">
							<Button className="bg-purple-600 hover:bg-purple-700 w-full mb-4">
								Twitch
							</Button>
						</Link>
						<Link href="https://www.x.com/okNick36" target="_blank">
							<Button className="bg-slate-800 hover:bg-slate-900 w-full mb-4">
								X (Formerly Twitter)
							</Button>
						</Link>
					</CardContent>
				</Card>
			</div>
		</motion.div>
	);
}