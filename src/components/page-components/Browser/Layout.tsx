import BrowserAppBar from "./AppBar";

const Layout = ({children}: {children: JSX.Element}): JSX.Element => {
    return (
        <>
            <BrowserAppBar/>
            {children}
        </>
    );
}

export default Layout;