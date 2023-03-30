import React from 'react';
// import {PagesSideBar, PagesHeader, PagesHeaderLinks, PagesFooter} from 'components/pages'

import {
    PagesSideBar, 
    PagesHeader, 
    PagesHeaderLinks, 
} from 'components/pages';
import VideoCollections from './VideoCollections';


function Index() {
    return (
        <>
            <PagesHeader />
            <PagesSideBar />
            <PagesHeaderLinks />
            <VideoCollections />
        </>
    )
}


export default Index;

