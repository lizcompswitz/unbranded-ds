import React from "react"
import { cn } from "../../lib/cn"

type ContainerTag =
	| "div"
	| "section"
	| "header"
	| "footer"
	| "main"
	| "nav"
	| "article"

interface ContainerProps extends React.HTMLAttributes<HTMLElement> {
	as?: ContainerTag
}

function Container({
	as: Tag = "div",
	className,
	style,
	children,
	...props
}: ContainerProps) {
	return (
		<Tag
			className={cn(className)}
			style={{
				maxWidth: "var(--layout-max-w)",
				marginInline: "auto",
				paddingInline: "var(--layout-gutter)",
				...style,
			}}
			{...props}
		>
			{children}
		</Tag>
	)
}

export { Container }
export type { ContainerProps, ContainerTag }
