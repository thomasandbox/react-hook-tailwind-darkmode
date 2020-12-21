import {useLayoutEffect, useState} from "react";

export type ThemeName = "light" | "dark";

export function useTheme(): {
	changeTheme: () => void;
} {
	const [theme, setTheme] = useState<ThemeName>("light");

	function changeTheme() {
		if (theme === "light") {
			(document.querySelector("html")?.classList)?.add?.("dark");
			setTheme("dark");
		} else {
			(document.querySelector("html")?.classList)?.remove?.("dark");
			setTheme("light");
		}
	}

	useLayoutEffect(
		() => {
			const darkOS = window.matchMedia("(prefers-color-scheme: dark)").matches;
			if (darkOS) {
				changeTheme();
			}
		},
		[],
	);

	return {changeTheme};
}
