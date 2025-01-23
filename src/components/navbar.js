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
                    <a href="/" class="text-2xl font-semibold font-ocr bg-gradient-to-r from-accent-primary from-0% to-accent-secondary to-100% bg-clip-text text-transparent">Antitoken</a>
                </div>
                <!-- Desktop Navigation -->
                <div class="nav-links hidden md:flex justify-center space-x-8">
                    <!-- Technology Dropdown -->
                    <div class="relative">
                        <button class="text-gray-300 hover:text-accent-primary transition-colors flex items-center" id="desktop-technology-button">
                            Technology
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 ml-1 transition-transform" id="desktop-technology-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                            </svg>
                        </button>
                        <div class="absolute hidden w-48 bg-dark-card/90 border border-gray-800/50 rounded-lg mt-2" id="desktop-technology-content">
                            <a href="/whitepaper/" class="items-center flex px-4 py-2 text-gray-300 hover:text-accent-primary hover:bg-gray-800/30">
                                <svg
                                    class="mr-2"
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="18"
                                    height="18"
                                    viewBox="0 0 24 24"
                                    fill="white"
                                    stroke="none"
                                    stroke-width="2"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                >
                                    <path
                                        fill-rule="evenodd"
                                        d="M9 2.221V7H4.221a2 2 0 0 1 .365-.5L8.5 2.586A2 2 0 0 1 9 2.22ZM11 2v5a2 2 0 0 1-2 2H4v11a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2h-7Zm-.293 9.293a1 1 0 0 1 0 1.414L9.414 14l1.293 1.293a1 1 0 0 1-1.414 1.414l-2-2a1 1 0 0 1 0-1.414l2-2a1 1 0 0 1 1.414 0Zm2.586 1.414a1 1 0 0 1 1.414-1.414l2 2a1 1 0 0 1 0 1.414l-2 2a1 1 0 0 1-1.414-1.414L14.586 14l-1.293-1.293Z"
                                        clip-rule="evenodd"
                                    />
                                </svg>
                                Whitepaper
                            </a>
                            <a class="items-center flex px-4 py-2 text-gray-300 hover:text-accent-primary hover:bg-gray-800/30 cursor-not-allowed">
                                <svg
                                    class="mr-2"
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="18"
                                    height="18"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="white"
                                    stroke-width="2"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                >
                                    <path
                                        stroke="white"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        stroke-width="2"
                                        d="m8 8-4 4 4 4m8 0 4-4-4-4m-2-3-4 14"
                                    />
                                </svg>
                                Yellowpaper
                            </a>
                            <a class="items-center flex px-4 py-2 text-gray-300 hover:text-accent-primary hover:bg-gray-800/30 cursor-not-allowed">
                                <svg
                                    class="mr-2"
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="18"
                                    height="18"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="white"
                                    stroke-width="2"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                >
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5.35709 16V5.78571c0-.43393.34822-.78571.77777-.78571H18.5793c.4296 0 .7778.35178.7778.78571V16M5.35709 16h-1c-.55229 0-1 .4477-1 1v1c0 .5523.44771 1 1 1H20.3571c.5523 0 1-.4477 1-1v-1c0-.5523-.4477-1-1-1h-1M5.35709 16H19.3571M9.35709 8l2.62501 2.5L9.35709 13m4.00001 0h2"/>
                                </svg>
                                Gitbook
                            </a>
                        </div>
                    </div>
                    <!-- Features Link -->
                    <a href="/#benefits" class="text-gray-300 hover:text-accent-primary transition-colors">Features</a>
                    <!-- FAQs Link -->
                    <a href="/#faq" class="text-gray-300 hover:text-accent-primary transition-colors">FAQs</a>
                    <!-- Community Dropdown -->
                    <div class="relative">
                        <button class="text-gray-300 hover:text-accent-primary transition-colors flex items-center" id="desktop-community-button">
                            Community
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 ml-1 transition-transform" id="desktop-community-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                            </svg>
                        </button>
                        <div class="absolute hidden w-48 bg-dark-card/90 border border-gray-800/50 rounded-lg mt-2" id="desktop-community-content">
                            <a href="https://twitter.com/antitokens" target="_blank" class="items-center flex px-4 py-2 text-gray-300 hover:text-accent-primary hover:bg-gray-800/30">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="18" height="18" fill="rgba(255,255,255,1)"><path d="M17.6874 3.0625L12.6907 8.77425L8.37045 3.0625H2.11328L9.58961 12.8387L2.50378 20.9375H5.53795L11.0068 14.6886L15.7863 20.9375H21.8885L14.095 10.6342L20.7198 3.0625H17.6874ZM16.6232 19.1225L5.65436 4.78217H7.45745L18.3034 19.1225H16.6232Z"></path></svg>&nbsp;
                                X/Twitter
                            </a>
                            <a href="https://t.me/antitokengroup" target="_blank" class="items-center flex px-4 py-2 text-gray-300 hover:text-accent-primary hover:bg-gray-800/30">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="18" height="18" fill="rgba(255,255,255,1)"><path d="M17.0943 7.14643C17.6874 6.93123 17.9818 6.85378 18.1449 6.82608C18.1461 6.87823 18.1449 6.92051 18.1422 6.94825C17.9096 9.39217 16.8906 15.4048 16.3672 18.2026C16.2447 18.8578 16.1507 19.1697 15.5179 18.798C15.1014 18.5532 14.7245 18.2452 14.3207 17.9805C12.9961 17.1121 11.1 15.8189 11.2557 15.8967C9.95162 15.0373 10.4975 14.5111 11.2255 13.8093C11.3434 13.6957 11.466 13.5775 11.5863 13.4525C11.64 13.3967 11.9027 13.1524 12.2731 12.8081C13.4612 11.7035 15.7571 9.56903 15.8151 9.32202C15.8246 9.2815 15.8334 9.13045 15.7436 9.05068C15.6539 8.97092 15.5215 8.9982 15.4259 9.01989C15.2904 9.05064 13.1326 10.4769 8.95243 13.2986C8.33994 13.7192 7.78517 13.9242 7.28811 13.9134L7.29256 13.9156C6.63781 13.6847 5.9849 13.4859 5.32855 13.286C4.89736 13.1546 4.46469 13.0228 4.02904 12.8812C3.92249 12.8466 3.81853 12.8137 3.72083 12.783C8.24781 10.8109 11.263 9.51243 12.7739 8.884C14.9684 7.97124 16.2701 7.44551 17.0943 7.14643ZM19.5169 5.21806C19.2635 5.01244 18.985 4.91807 18.7915 4.87185C18.5917 4.82412 18.4018 4.80876 18.2578 4.8113C17.7814 4.81969 17.2697 4.95518 16.4121 5.26637C15.5373 5.58382 14.193 6.12763 12.0058 7.03736C10.4638 7.67874 7.39388 9.00115 2.80365 11.001C2.40046 11.1622 2.03086 11.3451 1.73884 11.5619C1.46919 11.7622 1.09173 12.1205 1.02268 12.6714C0.970519 13.0874 1.09182 13.4714 1.33782 13.7738C1.55198 14.037 1.82635 14.1969 2.03529 14.2981C2.34545 14.4483 2.76276 14.5791 3.12952 14.6941C3.70264 14.8737 4.27444 15.0572 4.84879 15.233C6.62691 15.7773 8.09066 16.2253 9.7012 17.2866C10.8825 18.0651 12.041 18.8775 13.2243 19.6531C13.6559 19.936 14.0593 20.2607 14.5049 20.5224C14.9916 20.8084 15.6104 21.0692 16.3636 20.9998C17.5019 20.8951 18.0941 19.8479 18.3331 18.5703C18.8552 15.7796 19.8909 9.68351 20.1332 7.13774C20.1648 6.80544 20.1278 6.433 20.097 6.25318C20.0653 6.068 19.9684 5.58448 19.5169 5.21806Z"></path></svg>&nbsp;
                                Telegram
                            </a>
                            <a href="https://forum.antitoken.pro" target="_blank" class="items-center flex px-4 py-2 text-gray-300 hover:text-accent-primary hover:bg-gray-800/30">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="18" height="18" fill="#d6d6d6"><path d="M12.103 0C18.666 0 24 5.485 24 11.997c0 6.51-5.33 11.99-11.9 11.99L0 24V11.79C0 5.28 5.532 0 12.103 0zm.116 4.563a7.395 7.395 0 0 0-6.337 3.57 7.247 7.247 0 0 0-.148 7.22L4.4 19.61l4.794-1.074a7.424 7.424 0 0 0 8.136-1.39 7.256 7.256 0 0 0 1.737-7.997 7.375 7.375 0 0 0-6.84-4.585h-.008z"/></svg>&nbsp;
                                Forum
                            </a>
                        </div>
                    </div>
                    <!-- Apps Dropdown -->
                    <div class="relative">
                        <button class="text-gray-300 hover:text-accent-primary transition-colors flex items-center" id="desktop-apps-button">
                            Apps
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 ml-1 transition-transform" id="desktop-apps-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                            </svg>
                        </button>
                        <div class="absolute hidden w-48 bg-dark-card/90 border border-gray-800/50 rounded-lg mt-2" id="desktop-apps-content">
                            <a href="/poll/" class="items-center flex px-4 py-2 text-gray-300 hover:text-accent-primary hover:bg-gray-800/30">
                                <svg
                                    class="mr-2"
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="18"
                                    height="18"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="white"
                                    stroke-width="2"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                >
                                    <path d="M3 3v18h18" />
                                    <path d="M18 17V9" />
                                    <path d="M13 17V5" />
                                    <path d="M8 17v-3" />
                                </svg>
                                Poll
                            </a>
                            <a href="/lite/" class="items-center flex px-4 py-2 text-gray-300 hover:text-accent-primary hover:bg-gray-800/30">
                                <svg
                                    class="mr-2"
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="18"
                                    height="18"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="white"
                                    stroke-width="2"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                >
                                    <path d="M6 16.326A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 0 9h-.79" />
                                </svg>
                                Lite
                            </a>
                            <a href="/pro/" class="items-center flex px-4 py-2 text-gray-300 hover:text-accent-primary hover:bg-gray-800/30">
                                <svg
                                    class="mr-2"
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="18"
                                    height="18"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="white"
                                    stroke-width="2"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                >
                                    <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
                                    <polyline points="7.5 4.21 12 6.81 16.5 4.21" />
                                    <polyline points="7.5 19.79 7.5 14.6 3 12" />
                                    <polyline points="21 12 16.5 14.6 16.5 19.79" />
                                    <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
                                    <line x1="12" y1="22.08" x2="12" y2="12" />
                                </svg>
                                Pro
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Right side: Buy Button -->
            <div class="justify-self-end relative">
                <!-- Launch App Button (Desktop) -->
                <div class="hidden md:block relative">
                    <a class="bg-accent-primary border border-accent-primary hover:bg-opacity-90 hover:border-opacity-90 hover:text-white text-gray-200 px-6 py-3 rounded-lg" href="https://lite.antitoken.pro" target="_blank">
                        Launch App &nbsp; &rarr;
                    </a>
                </div>
            </div>
        </div>

        <!-- Mobile Menu -->
        <div class="lg:hidden hidden" id="mobile-menu">
            <div class="px-4 py-3 space-y-4 bg-dark-card/90 border-b border-gray-800/50">
                <div class="space-y-2">
                    <button class="text-gray-300 w-full flex justify-between items-center" id="mobile-technology-button">
                        <span>Technology</span>
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 transition-transform" id="mobile-technology-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                        </svg>
                    </button>
                    <div class="space-y-2 pl-4 border-l border-gray-700 hidden" id="mobile-technology-content">
                        <a href="https://antitoken.pro/whitepaper/" target="_blank" class="flex text-gray-300 hover:text-accent-primary transition-colors">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="18" height="18" fill="white" stroke="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                            <path
                                fill-rule="evenodd"
                                d="M9 2.221V7H4.221a2 2 0 0 1 .365-.5L8.5 2.586A2 2 0 0 1 9 2.22ZM11 2v5a2 2 0 0 1-2 2H4v11a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2h-7Zm-.293 9.293a1 1 0 0 1 0 1.414L9.414 14l1.293 1.293a1 1 0 0 1-1.414 1.414l-2-2a1 1 0 0 1 0-1.414l2-2a1 1 0 0 1 1.414 0Zm2.586 1.414a1 1 0 0 1 1.414-1.414l2 2a1 1 0 0 1 0 1.414l-2 2a1 1 0 0 1-1.414-1.414L14.586 14l-1.293-1.293Z"
                                clip-rule="evenodd"
                            />
                        </svg>&nbsp;
                        Whitepaper</a>
                        <a class="flex text-gray-300 hover:text-accent-primary transition-colors cursor-not-allowed">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                            <path
                                stroke="white"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                d="m8 8-4 4 4 4m8 0 4-4-4-4m-2-3-4 14"
                            />
                        </svg>&nbsp;
                        Yellowpaper</a>
                        <a class="flex text-gray-300 hover:text-accent-primary transition-colors cursor-not-allowed">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5.35709 16V5.78571c0-.43393.34822-.78571.77777-.78571H18.5793c.4296 0 .7778.35178.7778.78571V16M5.35709 16h-1c-.55229 0-1 .4477-1 1v1c0 .5523.44771 1 1 1H20.3571c.5523 0 1-.4477 1-1v-1c0-.5523-.4477-1-1-1h-1M5.35709 16H19.3571M9.35709 8l2.62501 2.5L9.35709 13m4.00001 0h2"/>
                        </svg>&nbsp;
                        Gitbook</a>
                    </div>
                </div>
                <div class="space-y-2">
                    <button class="text-gray-300 w-full flex justify-between items-center" id="mobile-apps-button">
                        <span>Apps</span>
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 transition-transform" id="mobile-apps-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                        </svg>
                    </button>
                    <div class="space-y-2 pl-4 border-l border-gray-700 hidden" id="mobile-apps-content">
                        <a href="https://poll.antitoken.pro/" target="_blank" class="flex text-gray-300 hover:text-accent-primary transition-colors">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                            <path d="M3 3v18h18" />
                            <path d="M18 17V9" />
                            <path d="M13 17V5" />
                            <path d="M8 17v-3" />
                        </svg>&nbsp;
                        Poll</a>
                        <a href="https://lite.antitoken.pro/" target="_blank" class="flex text-gray-300 hover:text-accent-primary transition-colors">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                            <path d="M6 16.326A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 0 9h-.79" />
                        </svg>&nbsp;
                        Lite</a>
                        <a href="https://app.antitoken.pro/" target="_blank" class="flex text-gray-300 hover:text-accent-primary transition-colors">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                            <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
                            <polyline points="7.5 4.21 12 6.81 16.5 4.21" />
                            <polyline points="7.5 19.79 7.5 14.6 3 12" />
                            <polyline points="21 12 16.5 14.6 16.5 19.79" />
                            <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
                            <line x1="12" y1="22.08" x2="12" y2="12" />
                        </svg>&nbsp;
                        Pro</a>
                    </div>
                </div>
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
                        <a href="https://twitter.com/antitokens" target="_blank" class="flex text-gray-300 hover:text-accent-primary transition-colors">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="18" height="18" fill="rgba(255,255,255,1)"><path d="M17.6874 3.0625L12.6907 8.77425L8.37045 3.0625H2.11328L9.58961 12.8387L2.50378 20.9375H5.53795L11.0068 14.6886L15.7863 20.9375H21.8885L14.095 10.6342L20.7198 3.0625H17.6874ZM16.6232 19.1225L5.65436 4.78217H7.45745L18.3034 19.1225H16.6232Z"></path></svg>&nbsp;
                        X/Twitter</a>
                        <a href="https://t.me/antitokengroup" target="_blank" class="flex text-gray-300 hover:text-accent-primary transition-colors">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="18" height="18" fill="rgba(255,255,255,1)"><path d="M17.0943 7.14643C17.6874 6.93123 17.9818 6.85378 18.1449 6.82608C18.1461 6.87823 18.1449 6.92051 18.1422 6.94825C17.9096 9.39217 16.8906 15.4048 16.3672 18.2026C16.2447 18.8578 16.1507 19.1697 15.5179 18.798C15.1014 18.5532 14.7245 18.2452 14.3207 17.9805C12.9961 17.1121 11.1 15.8189 11.2557 15.8967C9.95162 15.0373 10.4975 14.5111 11.2255 13.8093C11.3434 13.6957 11.466 13.5775 11.5863 13.4525C11.64 13.3967 11.9027 13.1524 12.2731 12.8081C13.4612 11.7035 15.7571 9.56903 15.8151 9.32202C15.8246 9.2815 15.8334 9.13045 15.7436 9.05068C15.6539 8.97092 15.5215 8.9982 15.4259 9.01989C15.2904 9.05064 13.1326 10.4769 8.95243 13.2986C8.33994 13.7192 7.78517 13.9242 7.28811 13.9134L7.29256 13.9156C6.63781 13.6847 5.9849 13.4859 5.32855 13.286C4.89736 13.1546 4.46469 13.0228 4.02904 12.8812C3.92249 12.8466 3.81853 12.8137 3.72083 12.783C8.24781 10.8109 11.263 9.51243 12.7739 8.884C14.9684 7.97124 16.2701 7.44551 17.0943 7.14643ZM19.5169 5.21806C19.2635 5.01244 18.985 4.91807 18.7915 4.87185C18.5917 4.82412 18.4018 4.80876 18.2578 4.8113C17.7814 4.81969 17.2697 4.95518 16.4121 5.26637C15.5373 5.58382 14.193 6.12763 12.0058 7.03736C10.4638 7.67874 7.39388 9.00115 2.80365 11.001C2.40046 11.1622 2.03086 11.3451 1.73884 11.5619C1.46919 11.7622 1.09173 12.1205 1.02268 12.6714C0.970519 13.0874 1.09182 13.4714 1.33782 13.7738C1.55198 14.037 1.82635 14.1969 2.03529 14.2981C2.34545 14.4483 2.76276 14.5791 3.12952 14.6941C3.70264 14.8737 4.27444 15.0572 4.84879 15.233C6.62691 15.7773 8.09066 16.2253 9.7012 17.2866C10.8825 18.0651 12.041 18.8775 13.2243 19.6531C13.6559 19.936 14.0593 20.2607 14.5049 20.5224C14.9916 20.8084 15.6104 21.0692 16.3636 20.9998C17.5019 20.8951 18.0941 19.8479 18.3331 18.5703C18.8552 15.7796 19.8909 9.68351 20.1332 7.13774C20.1648 6.80544 20.1278 6.433 20.097 6.25318C20.0653 6.068 19.9684 5.58448 19.5169 5.21806Z"></path></svg>&nbsp;
                        Telegram</a>
                        <a href="https://forum.antitoken.pro" target="_blank" class="flex text-gray-300 hover:text-accent-primary transition-colors">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="18" height="18" fill="#d6d6d6"><path d="M12.103 0C18.666 0 24 5.485 24 11.997c0 6.51-5.33 11.99-11.9 11.99L0 24V11.79C0 5.28 5.532 0 12.103 0zm.116 4.563a7.395 7.395 0 0 0-6.337 3.57 7.247 7.247 0 0 0-.148 7.22L4.4 19.61l4.794-1.074a7.424 7.424 0 0 0 8.136-1.39 7.256 7.256 0 0 0 1.737-7.997 7.375 7.375 0 0 0-6.84-4.585h-.008z"/></svg>&nbsp;
                        Forum</a>
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

    // Mobile Menu Toggle
    const mobileMenuButton = this.querySelector("#mobile-menu-button");
    const mobileMenu = document.querySelector("#mobile-menu");

    mobileMenuButton.addEventListener("click", () => {
      if (mobileMenu) {
        mobileMenu.classList.toggle("hidden");
      }
    });

    // Dropdown Buttons and Content
    const dropdowns = [
      {
        button: "#desktop-technology-button",
        content: "#desktop-technology-content",
        icon: "#desktop-technology-icon",
      },
      {
        button: "#desktop-community-button",
        content: "#desktop-community-content",
        icon: "#desktop-community-icon",
      },
      {
        button: "#desktop-apps-button",
        content: "#desktop-apps-content",
        icon: "#desktop-apps-icon",
      },
      {
        button: "#mobile-technology-button",
        content: "#mobile-technology-content",
        icon: "#mobile-technology-icon",
      },
      {
        button: "#mobile-community-button",
        content: "#mobile-community-content",
        icon: "#mobile-community-icon",
      },
      {
        button: "#mobile-apps-button",
        content: "#mobile-apps-content",
        icon: "#mobile-apps-icon",
      },
    ];

    let activeDropdown = null; // Track the currently active dropdown

    dropdowns.forEach(({ button, content, icon }) => {
      const btn = this.querySelector(button);
      const dropdown = this.querySelector(content);
      const dropdownIcon = this.querySelector(icon);

      if (btn && dropdown && dropdownIcon) {
        btn.addEventListener("click", (e) => {
          e.stopPropagation();

          // Close the currently active dropdown if it is not the clicked one
          if (activeDropdown && activeDropdown.dropdown !== dropdown) {
            activeDropdown.dropdown.classList.add("hidden");
            activeDropdown.icon.style.transform = "rotate(0deg)";
            activeDropdown = null;
          }

          // Toggle the clicked dropdown
          const isHidden = dropdown.classList.toggle("hidden");
          dropdownIcon.style.transform = isHidden
            ? "rotate(0deg)"
            : "rotate(180deg)";

          // Update the activeDropdown variable
          activeDropdown = isHidden ? null : { dropdown, icon: dropdownIcon };
        });

        // Close the dropdown when clicking outside
        document.addEventListener("click", (e) => {
          if (!dropdown.contains(e.target) && !btn.contains(e.target)) {
            dropdown.classList.add("hidden");
            dropdownIcon.style.transform = "rotate(0deg)";
            activeDropdown = null; // Reset activeDropdown
          }
        });
      }
    });
  }
}

customElements.define("antitoken-navbar", Navbar);
