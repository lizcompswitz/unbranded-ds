import type { Meta, StoryObj } from "@storybook/react";
import React from "react";

const TypographyShowcase = () => (
	<div style={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
		<section>
			<h2
				style={{
					fontSize: "0.75rem",
					textTransform: "uppercase",
					letterSpacing: "0.1em",
					marginBottom: "1rem",
					opacity: 0.6,
				}}
			>
				Font Families
			</h2>
			<div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
				<div>
					<p style={{ fontSize: "0.75rem", opacity: 0.5, marginBottom: "0.25rem" }}>
						font-display
					</p>
					<p
						style={{ fontFamily: "var(--typography-font-display)", fontSize: "2.5rem" }}
					>
						The quick brown fox jumps over the lazy dog
					</p>
				</div>
				<div>
					<p style={{ fontSize: "0.75rem", opacity: 0.5, marginBottom: "0.25rem" }}>
						font-body
					</p>
					<p style={{ fontFamily: "var(--typography-font-body)", fontSize: "1.25rem" }}>
						The quick brown fox jumps over the lazy dog
					</p>
				</div>
				<div>
					<p style={{ fontSize: "0.75rem", opacity: 0.5, marginBottom: "0.25rem" }}>
						font-ui
					</p>
					<p style={{ fontFamily: "var(--typography-font-ui)", fontSize: "1rem" }}>
						The quick brown fox jumps over the lazy dog
					</p>
				</div>
				<div>
					<p style={{ fontSize: "0.75rem", opacity: 0.5, marginBottom: "0.25rem" }}>
						font-brush
					</p>
					<p
						style={{ fontFamily: "var(--typography-font-brush)", fontSize: "2.5rem" }}
					>
						The quick brown fox jumps over the lazy dog
					</p>
				</div>
				<div>
					<p style={{ fontSize: "0.75rem", opacity: 0.5, marginBottom: "0.25rem" }}>
						font-sans (system fallback)
					</p>
					<p style={{ fontFamily: "var(--typography-font-sans)", fontSize: "1rem" }}>
						The quick brown fox jumps over the lazy dog
					</p>
				</div>
				<div>
					<p style={{ fontSize: "0.75rem", opacity: 0.5, marginBottom: "0.25rem" }}>
						font-mono
					</p>
					<p style={{ fontFamily: "var(--typography-font-mono)", fontSize: "1rem" }}>
						The quick brown fox jumps over the lazy dog
					</p>
				</div>
			</div>
		</section>

		<hr style={{ border: "none", borderTop: "1px solid var(--color-border)" }} />

		<section>
			<h2
				style={{
					fontSize: "0.75rem",
					textTransform: "uppercase",
					letterSpacing: "0.1em",
					marginBottom: "1rem",
					opacity: 0.6,
				}}
			>
				Type Scale
			</h2>
			<div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
				{[
					{ label: "size-sm (0.875rem)", var: "--typography-size-sm" },
					{ label: "size-base (1rem)", var: "--typography-size-base" },
					{ label: "size-lg (1.125rem)", var: "--typography-size-lg" },
					{ label: "size-xl (1.25rem)", var: "--typography-size-xl" },
				].map(({ label, var: v }) => (
					<div key={v}>
						<p style={{ fontSize: "0.75rem", opacity: 0.5, marginBottom: "0.25rem" }}>
							{label}
						</p>
						<p style={{ fontSize: `var(${v})` }}>
							The quick brown fox jumps over the lazy dog
						</p>
					</div>
				))}
			</div>
		</section>

		<hr style={{ border: "none", borderTop: "1px solid var(--color-border)" }} />

		<section>
			<h2
				style={{
					fontSize: "0.75rem",
					textTransform: "uppercase",
					letterSpacing: "0.1em",
					marginBottom: "1rem",
					opacity: 0.6,
				}}
			>
				Font Weights
			</h2>
			<div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
				{[
					{ label: "weight-normal (400)", var: "--typography-weight-normal" },
					{ label: "weight-medium (500)", var: "--typography-weight-medium" },
					{ label: "weight-semibold (600)", var: "--typography-weight-semibold" },
					{ label: "weight-bold (700)", var: "--typography-weight-bold" },
				].map(({ label, var: v }) => (
					<p key={v} style={{ fontWeight: `var(${v})`, fontSize: "1.125rem" }}>
						{label} — The quick brown fox jumps over the lazy dog
					</p>
				))}
			</div>
		</section>

		<hr style={{ border: "none", borderTop: "1px solid var(--color-border)" }} />

		<section>
			<h2
				style={{
					fontSize: "0.75rem",
					textTransform: "uppercase",
					letterSpacing: "0.1em",
					marginBottom: "1rem",
					opacity: 0.6,
				}}
			>
				Line Heights
			</h2>
			<div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
				{[
					{ label: "leading-tight (1.25)", var: "--typography-leading-tight" },
					{ label: "leading-normal (1.5)", var: "--typography-leading-normal" },
					{ label: "leading-relaxed (1.625)", var: "--typography-leading-relaxed" },
				].map(({ label, var: v }) => (
					<div key={v}>
						<p style={{ fontSize: "0.75rem", opacity: 0.5, marginBottom: "0.25rem" }}>
							{label}
						</p>
						<p
							style={{
								lineHeight: `var(${v})`,
								maxWidth: "40ch",
								fontSize: "1rem",
							}}
						>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod
							tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
							veniam.
						</p>
					</div>
				))}
			</div>
		</section>
	</div>
);

const meta: Meta = {
	title: "Foundations/Typography",
	component: TypographyShowcase,
	parameters: {
		controls: { disable: true },
	},
};

export default meta;

type Story = StoryObj;

export const AllTokens: Story = {};
