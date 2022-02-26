import NavigationListItem from "./NavigationListItem";

export default function Navigation() {
    return (
        <div>
            <nav className="main-menu">
                <ul className="menu-area-main">
                    <NavigationListItem textContent="Home"/>
                    <NavigationListItem textContent="Products"/>
                    <NavigationListItem textContent="Testimonials"/>
                    <NavigationListItem textContent="About us"/>
                    <NavigationListItem textContent="Contact us"/>
                    <NavigationListItem textContent="Register"/>
                    <NavigationListItem textContent="Login"/>
                </ul>
            </nav>
        </div>
    );
}