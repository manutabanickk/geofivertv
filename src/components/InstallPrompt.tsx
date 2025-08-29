"use client";
import { useEffect, useState } from "react";

type BeforeInstallPromptEvent = Event & {
	prompt: () => Promise<void>;
	userChoice: Promise<{ outcome: "accepted" | "dismissed" }>;
};

export default function InstallPrompt() {
	const [deferredPrompt, setDeferredPrompt] = useState<BeforeInstallPromptEvent | null>(null);
	const [visible, setVisible] = useState(false);

	useEffect(() => {
		const handler = (e: Event) => {
			const promptEvent = e as BeforeInstallPromptEvent;
			e.preventDefault();
			setDeferredPrompt(promptEvent);
			setVisible(true);
		};
		window.addEventListener("beforeinstallprompt", handler);
		return () => window.removeEventListener("beforeinstallprompt", handler);
	}, []);

	const handleInstall = async () => {
		if (!deferredPrompt) return;
		deferredPrompt.prompt();
		const { outcome } = await deferredPrompt.userChoice;
		if (outcome === "accepted") {
			setVisible(false);
			setDeferredPrompt(null);
		}
	};

	if (!visible) return null;

	return (
		<div className="fixed bottom-6 left-0 w-full flex justify-center z-50">
			<button
				onClick={handleInstall}
				className="px-6 py-3 rounded-full bg-emerald-500 text-white font-bold shadow-lg hover:bg-emerald-600 transition"
			>
				Instalar GeoFiber TV
			</button>
		</div>
	);
}
