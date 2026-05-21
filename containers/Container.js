import React from 'react';
import Header from '@/components/Header/Header';
import Footer from '@/components/Footer/Footer';
import LetsTalk from '@/components/LetsTalk/LetsTalk';

import { useState, useEffect } from 'react';

const Container = (Component) => {
    const wrappedComponent = (props) => {
        const [projectModalOpen, setProjectModalOpen] = useState(false);
        const settingsContent = props.settingsContent;
        // const projectModalOpen = props?.projectModalOpen || false;
        // const projectModalOpen = true;

        return (
            <>
                <Header settings={settingsContent}></Header>
                <Component
                    {...props}
                    onClick={() => {
                        setProjectModalOpen(true);
                    }}
                />
                <Footer settings={settingsContent}></Footer>
                <LetsTalk settings={settingsContent} projectModalOpen={projectModalOpen}></LetsTalk>
            </>
        );
        //   const [initialRenderComplete, setInitialRenderComplete] = useState(false);
        //   useEffect(() => {
        //     setInitialRenderComplete(true);
        //   }, []);
        // if (!initialRenderComplete) {
        //       return null;
        // } else {

        //   }
    };
    return wrappedComponent;
};
export default Container;
