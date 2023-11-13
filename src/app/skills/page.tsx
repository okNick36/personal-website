"use client";

import AccordionSection from "@/components/accordion-section";
import FadeAnimation from "@/components/fade-animation";
import { Accordion } from "@/components/ui/accordion";
import { Config } from "@/config";

export default function Page() {
	return (
		<FadeAnimation className="flex justify-center">
			<div className="mt-28 min-w-full px-[25%] text-center">
				<p className="text-6xl font-semibold">Skills</p>
				<p className="mt-6 text-2xl text-gray-500">
					Software Development, System, Administration, Videography, Tricaster
					Operation
				</p>
				<Accordion type="single" collapsible className="mt-6 text-2xl">
					{Config.skills.map((skill) => {
						return (
							<AccordionSection
								key={skill.name}
								name={skill.name}
								content={skill.content}
							/>
						);
					})}
				</Accordion>
			</div>
		</FadeAnimation>
	);
}
