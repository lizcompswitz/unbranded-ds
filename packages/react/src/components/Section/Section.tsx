import React from "react"
import { cn } from "../../lib/cn"

type SectionTag = "section" | "div" | "article"

interface SectionProps extends React.HTMLAttributes<HTMLElement> {
	as?: SectionTag
}

function Section({
	as: Tag = "section",
	className,
	style,
	children,
	...props
}: SectionProps) {
	return (
		<Tag
			className={cn(className)}
			style={{
				paddingBlock: "var(--layout-section-py)",
				...style,
			}}
			{...props}
		>
			{children}
		</Tag>
	)
}

export { Section }
export type { SectionProps, SectionTag }
