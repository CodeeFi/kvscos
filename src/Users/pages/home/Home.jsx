import React from 'react'

import Header from "../../components/Header/Header";
import Courses from "../../components/Courses/Courses";
import Campus from "../../components/campus/Campus";
import Facility from "../../components/Facility/Facility";
import Testmonail from "../../components/Testmonail/Testmonial";
import Contect from "../../components/ContectUS/Contectus";
import Footer from "../../components/Footer/Footer";
import Faculty from "../../components/Faculty/Faculty";
import Notice from "../../components/Notice/Notice"
function Home() {

    return (
        <>
            <Header />
            <Courses />
            <Campus />
            <Facility />
            <Faculty />
            <Notice />
            <Testmonail />
            <Contect />
            <Footer />
        </>
    )
}

export default Home