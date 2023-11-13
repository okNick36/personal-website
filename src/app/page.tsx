"use client";

import FadeAnimation from "@/components/fade-animation";
import { Button } from "@/components/ui/button";
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import {
	Tooltip,
	TooltipContent,
	TooltipProvider,
	TooltipTrigger,
} from "@/components/ui/tooltip";
import { Config } from "@/config";
import Link from "next/link";

export default function Page() {
	return (
		<FadeAnimation className="flex justify-center">
			<div className="mt-28 text-center">
				<p className="text-6xl font-semibold">Hey, I&apos;m Nick!</p>
				<p className="mt-6 text-2xl text-gray-500">
					17 year old working with{" "}
					<TooltipProvider>
						<Tooltip>
							<TooltipTrigger asChild>
								<Link href="/skills" className="font-semibold">
									a few things...
								</Link>
							</TooltipTrigger>
							<TooltipContent>
								<span className="text-xl">
									Software Development, System Administration, Videography,
									Tricaster Operation
								</span>
							</TooltipContent>
						</Tooltip>
					</TooltipProvider>
				</p>
				<Card className="mt-5">
					<CardHeader>
						<CardTitle>Where to find me</CardTitle>
						<CardDescription>
							I&apos;m just kind of everywhere ¯\_(ツ)_/¯
						</CardDescription>
					</CardHeader>
					<CardContent>
						{Config.socials.map((social) => {
							return (
								<Link href={social.url} key={social.name} target="_blank">
									<Button
										className={
											"w-full mb-4 " +
											social.color +
											" hover:" +
											social.hoverColor
										}
									>
										{social.name}
									</Button>
								</Link>
							);
						})}
					</CardContent>
				</Card>
			</div>
		</FadeAnimation>
	);
}
