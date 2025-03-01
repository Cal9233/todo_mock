import './Button.css';

export const Button = ({
    variant = 'primary',
    size = 'medium',
    fullWidth = false,
    disabled = false,
    isLoading = false,
    startIcon,
    endIcon,
    type = 'button',
    onClick,
    className = '',
    children,
    ...rest
}) => {
    
    // Construct class names based on props
    const buttonClasses = [
        'btn',
        `btn-${variant}`,
        `btn-${size}`,
        fullWidth ? 'btn-full-width' : '',
        isLoading ? 'btn-loading' : '',
        className
    ].filter(Boolean).join(' ');

    const buttonDataTesIdClasses = [
        'btn',
        `btn-${variant}`,
        `btn-${size}`,
        fullWidth ? 'btn-full-width' : '',
        isLoading ? 'btn-loading' : '',
        className
    ].filter(Boolean).join(' ');
    
    return (
        <button
        type={type}
        className={buttonClasses}
        data-testid={buttonDataTesIdClasses}
        onClick={onClick}
        disabled={disabled || isLoading}
        {...rest}
        >
        {isLoading && <span className="btn-spinner" aria-hidden="true"></span>}
        
        {!isLoading && startIcon && (
            <span className="btn-start-icon">{startIcon}</span>
        )}
        
        <span className="btn-text">{children}</span>
        
        {!isLoading && endIcon && (
            <span className="btn-end-icon">{endIcon}</span>
        )}
        </button>
    );
};

Button.defaultProps = {
    onClick: () => {},
    className: '',
    label: '',
    variant: 'primary',
    size: 'medium',
    disabled: false,
    type: 'button'
};