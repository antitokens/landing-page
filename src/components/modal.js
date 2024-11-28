const template = `
    <!-- Modal for Buying Tokens -->
    <div id="buy-tokens-modal" class="fixed inset-0 bg-black bg-opacity-50 hidden flex justify-center items-center z-50">
        <div class="relative bg-dark-card/60 backdrop-blur-xl p-8 rounded-lg border border-gray-800/50 max-w-md w-full mx-4 sm:mx-6 md:mx-8">
            <!-- Close Icon -->
            <button id="close-modal" class="absolute top-3 right-3 text-gray-300 hover:text-accent-primary">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
            </button>
            
            <h3 class="text-2xl font-bold text-gray-300 mb-4">Buy Tokens</h3>
            <p class="text-gray-400 mb-6">Choose a token to purchase:</p>
            <div class="space-y-4">
                <a target="_blank" href="https://raydium.io/swap/?inputMint=sol&outputMint=HB8KrN7Bb3iLWUPsozp67kS4gxtbA4W5QJX4wKPvpump" class="block text-center bg-accent-primary/80 hover:bg-accent-primary/90 text-white px-6 py-3 rounded-lg">
                    Buy <span class="font-bold text-lg">$ANTI</span> Token
                </a>
                <a target="_blank" href="https://raydium.io/swap/?inputMint=sol&outputMint=CWFa2nxUMf5d1WwKtG9FS9kjUKGwKXWSjH8hFdWspump" class="block text-center bg-accent-secondary/70 hover:bg-accent-secondary/80 text-white px-6 py-3 rounded-lg">
                    Buy <span class="font-bold text-lg">$PRO</span> Token
                </a>
            </div>
        </div>
    </div>
`;

export class Modal extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML = template;
    }
}

customElements.define('antitoken-modal', Modal);