import React from "react";
import ReactDOM from "react-dom";
import {IntlProvider} from 'react-intl';
import localeEsMessages from "./locales/es";
import localeEnMessages from "./locales/en";
import JobsList from "./components/jobslist";

const lang = navigator.language
let messages;
let locale;
if (lang.includes("es")) {
    messages = localeEsMessages;
    locale = "es-ES";
}
else {
    messages = localeEnMessages;
    locale = "en-US";
}

ReactDOM.render(
    <IntlProvider locale="es" messages= {messages}>
            <JobsList/>
    </IntlProvider>, document.getElementById("root")
);