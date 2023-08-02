"use client";

import { useRef } from "react";
import { LazyMotion, domAnimation, useInView } from "framer-motion";
import { HeadingDivider } from "components";
import { TimeLine } from "./TimeLine";

export function AboutSection() {
	const ref = useRef(null);
	const isInView = useInView(ref, { once: true });

	return (
		<LazyMotion features={domAnimation}>
			<section id="about" className="section">
				<HeadingDivider title="About me" />
				<div className="pt-10 pb-16 max-w-5xl flex flex-col gap-3">
					<div
						tabIndex="0"
						ref={ref}
						className="text-xl font-light leading-relaxed"
						style={{
							transform: isInView ? "none" : "translateX(-200px)",
							opacity: isInView ? 1 : 0,
							transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
						}}
					>
						<p>
							My name is Novandi. As a passionate third-year computer science student with a solid foundation in software development and data science.
						</p>
						<p className="my-3.5">
							Before entering college, I took a Vocational School with a Software Engineering major. During my time in high school, I created several websites , Desktop, and Android apps in the form of cashiers
						</p>
						<p>So, officially, my programming journey began in 2019 when I took on the role of a Desktop and Mobile developer assistant for teacher projects.</p>
						<p className="my-3.5">
							I enjoy learning technologies that interest me, which is why I dedicated a significant
							amount of time to working with Visual Basic and Java.
						</p>
						<p className="my-3.5">
						During my time in college, I had the invaluable opportunity to intern as an Information Technology Intern at CV ITBrain Indonesia. I had the privilege of working on a challenging project. I successfully implemented a point of sales (POS) application for both desktop and mobile platforms, with a PostgreSQL database connecting them. The desktop application was developed using VB.NET, while the Android application was developed using Java. This experience not only honed my technical skills but also equipped me with valuable practical and communication abilities.
						</p>
						<p>
							Furthermore, I have recently completed my studies at Bangkit Academy, where I focused on implementing object detection in mobile applications. Specifically, I utilized MobileNetV2 Single Shot Detector MultiBox for this project, while developing the Android application using Kotlin.
						</p>
					</div>
				</div>

				<TimeLine />
			</section>
		</LazyMotion>
	);
}
