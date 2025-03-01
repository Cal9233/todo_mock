import "./Header.css";

export const Header = ({className, children}) => {
    return <h1 data-testid="header" className={className}>{children}</h1>
};

Header.defaultProps = {
    children: "Hello World"
}