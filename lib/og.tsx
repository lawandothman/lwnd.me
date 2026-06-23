import { ImageResponse } from "next/og";

export const ogSize = { width: 1200, height: 630 };
export const ogContentType = "image/png";

interface OgCardProps {
	title: string;
	subtitle?: string;
}

const palette = {
	background: "#0a0a0a",
	foreground: "#fafafa",
	muted: "#8a8a8a",
	line: "rgba(255, 255, 255, 0.1)",
	mark: "rgba(255, 255, 255, 0.22)",
};

async function loadGoogleFont(
	family: string,
	weight: number,
): Promise<ArrayBuffer | null> {
	try {
		const url = `https://fonts.googleapis.com/css2?family=${encodeURIComponent(family)}:wght@${weight}`;
		const css = await fetch(url).then((res) => res.text());
		const src = css.match(
			/src: url\((.+?)\) format\('(?:opentype|truetype)'\)/,
		)?.[1];
		if (!src) return null;
		return await fetch(src).then((res) => res.arrayBuffer());
	} catch {
		return null;
	}
}

async function loadFonts() {
	const [lora, inter] = await Promise.all([
		loadGoogleFont("Lora", 600),
		loadGoogleFont("Inter", 500),
	]);
	const fonts = [];
	if (lora)
		fonts.push({
			name: "Lora",
			data: lora,
			weight: 600 as const,
			style: "normal" as const,
		});
	if (inter)
		fonts.push({
			name: "Inter",
			data: inter,
			weight: 500 as const,
			style: "normal" as const,
		});
	return fonts;
}

function CornerMark({
	color,
	position,
}: {
	color: string;
	position: "tl" | "br";
}) {
	const edge =
		position === "tl" ? { top: -13, left: -13 } : { bottom: -13, right: -13 };
	return (
		<div
			style={{
				position: "absolute",
				display: "flex",
				width: 26,
				height: 26,
				...edge,
			}}
		>
			<div
				style={{
					position: "absolute",
					top: 13,
					left: 0,
					width: 26,
					height: 1,
					backgroundColor: color,
				}}
			/>
			<div
				style={{
					position: "absolute",
					left: 13,
					top: 0,
					width: 1,
					height: 26,
					backgroundColor: color,
				}}
			/>
		</div>
	);
}

export async function renderOgCard({ title, subtitle }: OgCardProps) {
	const fonts = await loadFonts();
	const titleSize = title.length > 44 ? 58 : title.length > 28 ? 70 : 84;

	return new ImageResponse(
		<div
			style={{
				height: "100%",
				width: "100%",
				display: "flex",
				backgroundColor: palette.background,
				color: palette.foreground,
				padding: 56,
				fontFamily: "Inter",
			}}
		>
			<div
				style={{
					position: "relative",
					flex: 1,
					display: "flex",
					flexDirection: "column",
					justifyContent: "space-between",
					border: `1px solid ${palette.line}`,
					borderRadius: 28,
					padding: "64px 72px",
				}}
			>
				<CornerMark color={palette.mark} position="tl" />
				<CornerMark color={palette.mark} position="br" />

				<div style={{ display: "flex" }}>
					<div style={{ fontFamily: "Lora", fontSize: 34 }}>lwnd</div>
				</div>

				<div style={{ display: "flex", flexDirection: "column" }}>
					<div
						style={{
							display: "flex",
							width: 44,
							height: 3,
							backgroundColor: palette.foreground,
							marginBottom: 32,
						}}
					/>
					<div
						style={{
							fontFamily: "Lora",
							fontSize: titleSize,
							lineHeight: 1.05,
							letterSpacing: "-0.02em",
						}}
					>
						{title}
					</div>
					{subtitle ? (
						<div style={{ fontSize: 28, color: palette.muted, marginTop: 28 }}>
							{subtitle}
						</div>
					) : null}
				</div>
			</div>
		</div>,
		{ ...ogSize, fonts },
	);
}
