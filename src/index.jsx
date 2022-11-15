import {render} from 'solid-js/web'
import {Router} from '@solidjs/router'

import './index.css'
import App from './App'

import OrchyMicroFrontend from '@orchy-mfe/spa-adapter'

export class SolidMfe extends OrchyMicroFrontend {
    async mount(microFrontendProperties) {
        render(() =>
            <Router base={microFrontendProperties?.basePath}>
                <App />
            </Router>, this.getContainer())
    }

    async unmount() {
        this.getContainer().textContent = ''
    }
}

customElements.define('solid-mfe', SolidMfe)