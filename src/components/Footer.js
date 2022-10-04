export default function Footer (props) {
    return (
        <footer className="footer fixed-bottom p-3 bg-light text-muted mt-auto">
            {props.children}
        </footer>
    );
}