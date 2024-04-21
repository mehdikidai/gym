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
} from "./components";

import { useTranslation } from "react-i18next";

function App() {
    const { t, i18n } = useTranslation();

    return (
        <div className={i18n.language === "ar" ? "App rtl" : "App"}>
            <Cover />
            <Spacing />
            <AboutUs />
            <Spacing />
            <Title info={t("services.title", { returnObjects: true })} />
            <Service />
            <Spacing />
            <Video />
            <Spacing />
            <Title info={t("services.title", { returnObjects: true })} />
            <Pricing />
            <Spacing />
            <Title info={t("services.title", { returnObjects: true })} />
            <WorkingTimings />
            <Spacing />
            <Title info={t("services.title", { returnObjects: true })} />
            <Comments />
            <Spacing />
            <Contact />
            <Footer />
        </div>
    );
}

export default App;
