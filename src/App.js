import { useEffect, useState } from "react";
import "./App.scss";

//import { useSelector } from 'react-redux';

import {
    AboutUs,
    Comments,
    Contact,
    Cover,
    Pricing,
    Service,
    Spacing,
    Title,
    Video,
    WorkingTimings,
    Footer,
    LoadingComponent,
} from "./components";

import { useTranslation } from "react-i18next";

function App() {

    const { t, i18n } = useTranslation();

    const [load, setLoad] = useState(true);
    const [dir, setDir] = useState(i18n.language);

    useEffect(() => {

        
        
        setLoad(true);
        setTimeout(() => {
            setTimeout(() => {
                setLoad(false);
            }, 600);

            setDir(i18n.language);
        }, 600);
    }, [i18n.language]);


    return (
        <div className={dir === "ar" ? "App rtl" : "App"}>
            {load && <LoadingComponent />}
            <Cover />
            <Spacing h={100} />
            <AboutUs />
            <Spacing />
            <Title info={t("services.title", { returnObjects: true })} />
            <Service />
            <Spacing />
            <Video />
            <Spacing />
            <Title info={t("prices.title", { returnObjects: true })} />
            <Pricing />
            <Spacing />
            <Title info={t("days.title", { returnObjects: true })} />
            <WorkingTimings />
            <Spacing />
            <Title info={t("comments.title", { returnObjects: true })} />
            <Comments />
            <Spacing />
            <Contact />
            <Footer />
        </div>
    );
}

export default App;
