import {useEffect, useState} from "react";

export type ThemeType = "light" | "dark";

export function useTheme(): {
	theme: ThemeType;
	changeTheme: () => void;
} {
	const [theme, setTheme] = useState<ThemeType>("light");

	function changeTheme() {
		if (theme === "light") {
			(document.querySelector("html")?.classList)?.add?.("dark");
			setTheme("dark");
		} else {
			(document.querySelector("html")?.classList)?.remove?.("dark");
			setTheme("light");
		}
	}

	useEffect(
		() => {
			const darkOS = window.matchMedia("(prefers-color-scheme: dark)").matches;
			if (darkOS) {
				changeTheme();
			}
		},
		[],
	);

	return {theme, changeTheme};
}
