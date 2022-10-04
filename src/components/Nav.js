export default function Nav(props) {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light p-3">
            {props.children}
        </nav>
    );
}