<template>
    <div id="app">

        <Header />

        <router-view />

        <!-- WhatsApp Floating Button -->
        <a href="https://wa.me/919067777034" target="_blank" rel="noopener noreferrer" class="whatsapp-float"
            aria-label="Chat with us on WhatsApp">
            <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                <path fill="currentColor"
                    d="M19.11 17.21c-.27-.14-1.6-.79-1.85-.88-.25-.09-.43-.14-.61.14-.18.27-.7.88-.86 1.06-.16.18-.32.2-.59.07-.27-.14-1.13-.42-2.15-1.33-.79-.7-1.33-1.56-1.49-1.82-.16-.27-.02-.41.12-.54.12-.12.27-.32.41-.48.14-.16.18-.27.27-.45.09-.18.05-.34-.02-.48-.07-.14-.61-1.47-.84-2.01-.22-.53-.45-.46-.61-.47h-.52c-.18 0-.48.07-.73.34-.25.27-.95.93-.95 2.26s.98 2.62 1.11 2.8c.14.18 1.93 2.95 4.68 4.14.65.28 1.16.45 1.56.57.65.21 1.24.18 1.71.11.52-.08 1.6-.65 1.83-1.28.23-.63.23-1.17.16-1.28-.07-.11-.25-.18-.52-.32z" />

                <path fill="currentColor"
                    d="M16.01 3.2c-7.05 0-12.79 5.73-12.79 12.79 0 2.25.59 4.45 1.71 6.39L3.1 28.8l6.57-1.72a12.76 12.76 0 0 0 6.34 1.68h.01c7.05 0 12.78-5.73 12.78-12.79S23.06 3.2 16.01 3.2zm0 23.38h-.01a10.62 10.62 0 0 1-5.41-1.48l-.39-.23-3.9 1.02 1.04-3.8-.25-.4a10.61 10.61 0 1 1 8.92 4.89z" />
            </svg>
        </a>
        <Footer />
    </div>
</template>

<script setup>
import Header from "./components/Header.vue";
import Footer from "./components/Footer.vue";
</script>

<style>
.whatsapp-float {
    position: fixed;

    right: 24px;
    bottom: 24px;

    width: 58px;
    height: 58px;

    display: flex;
    align-items: center;
    justify-content: center;

    background: #25d366;
    color: #ffffff;

    border-radius: 50%;

    text-decoration: none;

    box-shadow:
        0 8px 25px rgba(0, 0, 0, 0.22);

    z-index: 9998;

    transition:
        transform 0.25s ease,
        box-shadow 0.25s ease;
}

.whatsapp-float svg {
    width: 31px;
    height: 31px;
}

.whatsapp-float:hover {
    color: #ffffff;

    transform: scale(1.08);

    box-shadow:
        0 12px 30px rgba(0, 0, 0, 0.3);
}

@media (max-width: 600px) {
    .whatsapp-float {
        right: 16px;
        bottom: 16px;

        width: 54px;
        height: 54px;
    }

    .whatsapp-float svg {
        width: 28px;
        height: 28px;
    }
}
</style>