import React from 'react';
import PageNotFound from "@/components/404";

function Home(props) {
    console.log('首页=>', props);
    return <PageNotFound />
}

export default Home;