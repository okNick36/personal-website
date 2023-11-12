"use client";
import { Accordion } from "@/components/ui/accordion";
import { motion } from "framer-motion";
import AccordionSection from "../../components/accordion-section";

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
			<div className="mt-28 min-w-full px-[25%] text-center">
				<p className="text-6xl font-semibold">What I Do</p>
				<p className="mt-6 text-2xl text-gray-500">
					Software Development, System, Administration, Videography, Tricaster
					Operation
				</p>
				<Accordion type="single" collapsible className="mt-6 text-2xl">
					<AccordionSection
						name="Software Development"
						content="I am interested in going further into software development. I have worked with languages such as Java, C#, JavaScript, and TypeScript with frameworks such as React, Next.js, and Node.js. I have also worked with databases such as MySQL, Redis and MongoDB."
					/>
					<AccordionSection
						name="System Administration"
						content="Along with software development, I am also interested in furthering my skills in system administration. At home (specifically in my basement), I have a homelab consisting of a server, switch, and a machine running OPNSense."
					/>
					<AccordionSection
						name="Videography"
						content="I am interested in videography, especially when it comes to sports. I have worked with high school football games as well as cross country and track events."
					/>
					<AccordionSection
						name="Tricaster Operation"
						content="Currently, operating a NewTek Tricaster is easily one of my favorite things to do every chance I get. I would like to take on broadcast / technical directing as a career in the future, and I plan to attend college for Communication and Media entering Fall 2025."
					/>
				</Accordion>
			</div>
		</motion.div>
	);
}