import { useRef } from "react";
import { useInView } from "framer-motion";
import { useTheme } from "next-themes";
import { useMediaQuery } from "utils";
export function AvatarProfile() {
	const ref = useRef(null);
	const isInView = useInView(ref, { once: true });
	const { theme, systemTheme } = useTheme();
	const colorMode = theme === "system" ? systemTheme : theme;
	const darkThemeColor = colorMode === "dark";

	return (
		<div
			ref={ref}
			style={{
				transform: isInView ? "none" : "translateX(100px)",
				opacity: isInView ? 1 : 0,
				transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 1s"
			}}
		>
            {/* load avatar */}
            <img
                src="/avatar.png"
                alt="avatar"
                className="rounded-full  mx-auto border-4 border-gray-200 dark:border-gray-800 bg-gray-100 dark:bg-gray-800"
                
                
            />
		</div>
	);
}
