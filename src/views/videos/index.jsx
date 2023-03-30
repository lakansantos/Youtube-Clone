import React from 'react';
import {
    PagesSideBar, 
    PagesHeader, 
    PagesHeaderLinks,
    PageFooter,
} from 'components/pages'
import VideoCollections from './VideoCollections';


function Index() {
    return (
        <>
            <PagesHeader />
            <PagesSideBar />
            <PagesHeaderLinks />
            <VideoCollections />
            <PageFooter />
        </>
    )
}


export default Index;

