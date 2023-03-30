import React from 'react';
import { 
    PagesHeader, 
    PagesSideBar, 
    PagesHeaderLinks 
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

