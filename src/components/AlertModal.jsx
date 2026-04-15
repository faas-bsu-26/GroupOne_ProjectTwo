import { useEffect, useState } from "react";

const FADE_DURATION_MS = 450;

export default function AlertModal({ isOpen, text }) {
	const [mounted, setMounted] = useState(isOpen);
	const [visible, setVisible] = useState(false);

	useEffect(() => {
		let unmountTimer;

		if (isOpen) {
			setMounted(true);
			requestAnimationFrame(() => setVisible(true));
		} else {
			setVisible(false);
			if (mounted) {
				unmountTimer = setTimeout(() => setMounted(false), FADE_DURATION_MS);
			}
		}

		return () => {
			clearTimeout(unmountTimer);
		};
	}, [isOpen, mounted]);

	if (!mounted) return null;

	return (
		<div className="pointer-events-none fixed inset-x-0 top-16 z-50 flex justify-center px-4">
			<div
				className={`w-full max-w-sm rounded-lg border border-text-light/15 dark:border-text-dark/15 bg-background-light/95 dark:bg-background-dark/95 px-4 py-2.5 shadow-lg backdrop-blur-sm transition-all duration-500 ease-out ${visible ? "translate-y-0 opacity-100" : "-translate-y-6 opacity-0"}`}
				role="status"
				aria-live="polite"
			>
				<p className="text-center text-sm text-text-light dark:text-text-dark">{text}</p>
			</div>
		</div>
	);
}
