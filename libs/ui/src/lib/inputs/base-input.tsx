export type BaseInputProps = {
	className?: string;
	onChange?: () => void;
	onBlur?: () => void;
	onFocus?: () => void;
	value?: string | number;
	type?: string;
	placeholder?: string;
	disabled?: boolean;
	readOnly?: boolean;
	required?: boolean;
}

export default function BaseInput({className, onChange, onBlur, onFocus, value, type, placeholder, disabled, readOnly, required}: BaseInputProps) {
	return (
		<input
			className={className}
			onChange={onChange}
			onBlur={onBlur}
			onFocus={onFocus}
			value={value}
			type={type}
			placeholder={placeholder}
			disabled={disabled}
			readOnly={readOnly}
			required={required}
		/>
	)
}
