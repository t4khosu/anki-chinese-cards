declare const PACKAGE_VERSION: string;

abstract class Card {
    public renderFront() {
        try {
            this.renderFrontCore();
        } catch (e) {
            const errorElement = document.getElementById('error');
            errorElement.innerText = `ERROR: ${e}`;
        }
    }

    public renderBack() {
        try {
            this.renderBackCore();
        } catch (e) {
            const errorElement = document.getElementById('error');
            errorElement.innerText = `ERROR: ${e}`;
        }
    }

    protected showVersion() {
        const versionElement = document.getElementById("version");
        versionElement.innerHTML = `v${PACKAGE_VERSION}`;
    }

    protected abstract renderFrontCore(): void;

    protected abstract renderBackCore(): void;
}

export default Card;
