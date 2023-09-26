import React from "react";
import ReactDOM from "react-dom";
import {IntlProvider} from 'react-intl';
import localeEsMessages from "./locales/es";
import localeEnMessages from "./locales/en";


import JobsList from "./components/jobsList";

const navegatorLang = navigator.language;
const messages = navegatorLang.includes("es") ? localeEsMessages : localeEnMessages;

ReactDOM.render(
    <IntlProvider locale={navegatorLang} messages= {messages}>
            <JobsList/>
    </IntlProvider>, document.getElementById("root")
);