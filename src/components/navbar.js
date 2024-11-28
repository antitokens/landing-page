const template = `
    <nav class="fixed top-0 left-0 right-0 backdrop-blur-xl bg-dark-card/50 border-b border-gray-800/50 z-50">
        <div class="max-w-7xl mx-auto px-4 py-3 grid grid-cols-3 items-center">
            <!-- Left side: Mobile Menu Button / Logo on Desktop -->
            <div class="justify-self-start">
                <button class="md:hidden text-gray-300 hover:text-accent-primary" id="mobile-menu-button">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                </button>
                <div class="hidden md:block logo">
                    <a href="/" class="text-3xl font-semibold font-ocr bg-gradient-to-r from-accent-primary from-0% to-accent-secondary to-100% bg-clip-text text-transparent">Antitoken</a>
                </div>
            </div>

            <!-- Center: Logo on Mobile / Navigation on Desktop -->
            <div class="justify-self-center w-full">
                <!-- Mobile Logo -->
                <div class="md:hidden logo flex justify-center">
                    <a href="/" class="text-3xl font-semibold font-ocr bg-gradient-to-r from-accent-primary from-0% to-accent-secondary to-100% bg-clip-text text-transparent">Antitoken</a>
                </div>
                <!-- Desktop Navigation -->
                <div class="nav-links hidden md:flex justify-center space-x-8">
                    <a href="/#benefits" class="text-gray-300 hover:text-accent-primary transition-colors">Features</a>
                    <a href="/whitepaper/" class="text-gray-300 hover:text-accent-primary transition-colors">Whitepaper</a>
                    <a href="/#faq" class="text-gray-300 hover:text-accent-primary transition-colors">FAQ</a>
                </div>
            </div>

            <!-- Right side: Buy Button -->
            <div class="justify-self-end relative">
                <!-- Buy Tokens Button (Desktop) -->
                <div class="hidden md:block relative">
                    <button class="buy-tokens-button bg-accent-primary hover:opacity-90 text-gray-300 px-6 py-2 rounded-lg" id="desktop-buy-button">
                        Buy Tokens
                    </button>
                </div>
                <!-- Buy Tokens Button (Mobile) -->
                <div class="md:hidden relative">
                    <button class="buy-tokens-button bg-accent-primary hover:opacity-90 text-white px-4 py-2 rounded-lg text-sm" id="mobile-buy-button">
                        Buy
                    </button>
                </div>
            </div>
        </div>

        <!-- Mobile Menu -->
        <div class="md:hidden hidden" id="mobile-menu">
            <div class="px-4 py-3 space-y-4 bg-dark-card/90 border-b border-gray-800/50">
                <a href="/#benefits" class="block text-gray-300 hover:text-accent-primary transition-colors">Features</a>
                <a href="/whitepaper/" class="block text-gray-300 hover:text-accent-primary transition-colors">Whitepaper</a>
                <a href="/#faq" class="block text-gray-300 hover:text-accent-primary transition-colors">FAQ</a>
            </div>
        </div>
    </nav>
`;

export class Navbar extends HTMLElement {
    constructor() {
        super();
    }

    async connectedCallback() {
        this.innerHTML = template;
    }
}

customElements.define('antitoken-navbar', Navbar);
