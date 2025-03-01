import './Input.css';

export const Input = ({
    className,
    type,
    placeholder,
    onChange,
    value,
    label,
    disabled, 
    ref
}) => {
    return <input 
        className={`input ${className}`}
        value={value}
        placeholder={placeholder}
        type={type}
        onChange={onChange}
        aria-label={label}
        data-testid="input"
        disabled={disabled}
        ref={ref}
    />
}

Input.defaultProps = {
    type: "text",
    className: "",
    ref: null,
    disabled: "false"
}