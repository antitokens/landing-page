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
                    <a href="/whitepaper/" class="text-gray-300 hover:text-accent-primary transition-colors">Whitepaper</a>
                    <a href="/#benefits" class="text-gray-300 hover:text-accent-primary transition-colors">Features</a>
                    <a href="/#faq" class="text-gray-300 hover:text-accent-primary transition-colors">FAQs</a>
                    <div class="relative">
                        <button class="text-gray-300 hover:text-accent-primary transition-colors flex items-center" id="desktop-community-button">
                            Community
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 ml-1 transition-transform" id="desktop-community-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                            </svg>
                        </button>
                        <div class="absolute hidden w-48 bg-dark-card/90 border border-gray-800/50 rounded-lg mt-2" id="desktop-community-content">
                            <a href="https://twitter.com/antitoken" target="_blank" class="block px-4 py-2 text-gray-300 hover:text-accent-primary hover:bg-gray-800/30">X/Twitter</a>
                            <a href="https://t.me/antitoken" target="_blank" class="block px-4 py-2 text-gray-300 hover:text-accent-primary hover:bg-gray-800/30">Telegram</a>
                            <a href="https://forum.antitoken.pro" target="_blank" class="block px-4 py-2 text-gray-300 hover:text-accent-primary hover:bg-gray-800/30">Forum</a>
                        </div>
                    </div>
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
                <a href="/whitepaper/" class="block text-gray-300 hover:text-accent-primary transition-colors">Whitepaper</a>
                <a href="/#benefits" class="block text-gray-300 hover:text-accent-primary transition-colors">Features</a>
                <a href="/#faq" class="block text-gray-300 hover:text-accent-primary transition-colors">FAQ</a>
                <div class="space-y-2">
                    <button class="text-gray-300 w-full flex justify-between items-center" id="mobile-community-button">
                        <span>Community</span>
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 transition-transform" id="mobile-community-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                        </svg>
                    </button>
                    <div class="space-y-2 pl-4 border-l border-gray-700 hidden" id="mobile-community-content">
                        <a href="https://twitter.com/antitoken" target="_blank" class="block text-gray-300 hover:text-accent-primary transition-colors">X/Twitter</a>
                        <a href="https://t.me/antitoken" target="_blank" class="block text-gray-300 hover:text-accent-primary transition-colors">Telegram</a>
                        <a href="https://forum.antitoken.pro" target="_blank" class="block text-gray-300 hover:text-accent-primary transition-colors">Forum</a>
                    </div>
                </div>
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

        const mobileMenuButton = this.querySelector('#mobile-menu-button');
        const mobileMenu = this.querySelector('#mobile-menu');
        const mobileCommunityButton = this.querySelector('#mobile-community-button');
        const mobileCommunityContent = this.querySelector('#mobile-community-content');
        const mobileCommunityIcon = this.querySelector('#mobile-community-icon');
        const desktopCommunityButton = this.querySelector('#desktop-community-button');
        const desktopCommunityContent = this.querySelector('#desktop-community-content');
        const desktopCommunityIcon = this.querySelector('#desktop-community-icon');

        mobileMenuButton.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
        });

        mobileCommunityButton.addEventListener('click', () => {
            mobileCommunityContent.classList.toggle('hidden');
            mobileCommunityIcon.style.transform = mobileCommunityContent.classList.contains('hidden') ? 'rotate(0deg)' : 'rotate(180deg)';
        });

        // Close menu when clicking a link (excluding community dropdown)
        mobileMenu.querySelectorAll('a:not(#mobile-community-content a)').forEach(link => {
            link.addEventListener('click', () => {
                mobileMenu.classList.add('hidden');
            });
        });

        // For community links, only close the main menu
        mobileCommunityContent.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                mobileMenu.classList.add('hidden');
            });
        });

        // Desktop community dropdown
        desktopCommunityButton.addEventListener('click', (e) => {
            e.stopPropagation();
            desktopCommunityContent.classList.toggle('hidden');
            desktopCommunityIcon.style.transform = desktopCommunityContent.classList.contains('hidden') ? 'rotate(0deg)' : 'rotate(180deg)';
        });

        // Close dropdown when clicking outside
        document.addEventListener('click', (e) => {
            if (!desktopCommunityContent.contains(e.target) && !desktopCommunityButton.contains(e.target)) {
                desktopCommunityContent.classList.add('hidden');
                desktopCommunityIcon.style.transform = 'rotate(0deg)';
            }
        });
    }
}

customElements.define('antitoken-navbar', Navbar);
