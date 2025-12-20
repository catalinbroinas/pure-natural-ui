import '../scss/main.scss';

import { Ripple, Collapse, Input, initMDB } from 'mdb-ui-kit/js/mdb.es.min.js';

function MainDomManager() {
    const initApp = () => {
        initMDB({ Ripple, Collapse, Input });
    };

    return { initApp };
}

document.addEventListener('DOMContentLoaded', () => {
    const domManager = MainDomManager();
    domManager.initApp();
});
