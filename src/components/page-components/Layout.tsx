import {useState} from "react";

const L = () => {
    return <p>Hello</p>;
}

const Layout = (): JSX.Element => {
    const [mainComponent, setMainComponent] = useState<JSX.Element>(L)
    return (
        <>
            Layout
            {mainComponent}
        </>
    );
}

export default Layout