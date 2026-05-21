import { Fragment } from 'react';

//import LetsTalk from 'components/LetsTalk';

export default function Layout(props) {
    return (
        <Fragment>
            {/* header component will be here */}

            <main>{props.children}</main>
        </Fragment>
    );
}
