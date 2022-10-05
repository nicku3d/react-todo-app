
export default function Nav(props) {
    return (
        <nav className="navbar navbar-light bg-light p-3">
            {props.children}
        </nav>
    );
}