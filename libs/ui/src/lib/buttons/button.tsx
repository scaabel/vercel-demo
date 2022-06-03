import {ReactNode, CSSProperties} from "react";

export type ButtonProps = {
	className?: string;
	onClick?: () => void;
	disabled?: boolean;
	type?: 'button' | 'submit' | 'reset';
	children?: ReactNode;
	style?: CSSProperties;
}

export default function Button({className, onClick, disabled, type, style, children}: ButtonProps) {
	return (
		<button
			className={className}
			onClick={onClick}
			disabled={disabled}
			type={type}
			style={style}
		>
			{children}
		</button>
	);
}
