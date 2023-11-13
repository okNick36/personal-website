"use client";

import { motion } from "framer-motion";
import React from "react";

interface FadeAnimationProps {
	className?: string;
	children: React.ReactNode;
}

const FadeAnimation = ({
	className,
	children,
}: FadeAnimationProps): JSX.Element => (
	<motion.div
		className={className}
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
		{children}
	</motion.div>
);

export default FadeAnimation;
