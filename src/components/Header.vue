<template>
    <header class="site-header">

        <!-- =====================================================
             TOP HEADER
        ====================================================== -->
        <div class="top-header">
            <div class="container top-header-inner">

                <!-- Email -->
                <a href="mailto:info@techifylabs.in" class="top-item">
                    <span class="top-icon">✉</span>
                    <span>info@techifylabs.in</span>
                </a>

                <!-- Phone -->
                <a href="tel:+91906777034" class="top-item">
                    <span class="top-icon">☎</span>
                    <span>+91 9067777034</span>
                </a>

                <!-- Social Media -->
                <div class="social-icons">

                    <a href="#" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                        f
                    </a>

                    <a href="#" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                        ◎
                    </a>

                    <a href="#" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                        in
                    </a>

                    <a href="#" target="_blank" rel="noopener noreferrer" aria-label="YouTube">
                        ▶
                    </a>

                </div>

            </div>
        </div>


        <!-- =====================================================
             MAIN HEADER
        ====================================================== -->
        <div class="main-header">

            <div class="container nav-wrap">

                <!-- Logo -->
                <router-link to="/" class="brand" @click="closeMenu">
                    <img src="/techify-labs-logo.png" alt="Techify Labs" class="brand-logo" />
                </router-link>


                <!-- =================================================
                     DESKTOP / MOBILE NAVIGATION
                ================================================== -->
                <nav class="nav" :class="{ 'is-open': menuOpen }" aria-label="Main Navigation">

                    <!-- HOME -->
                    <router-link to="/" class="nav-link" @click="closeMenu">
                        Home
                    </router-link>


                    <!-- =================================================
                         OUR SOLUTIONS
                    ================================================== -->
                    <div class="nav-dropdown" :class="{ 'mobile-open': solutionsOpen }">

                        <button type="button" class="nav-link dropdown-button" :aria-expanded="solutionsOpen"
                            aria-haspopup="true" @click="toggleDropdown('solutions')">
                            <span>Our Solutions</span>

                            <svg class="dropdown-arrow" :class="{ rotate: solutionsOpen }" width="15" height="15"
                                viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2">
                                <path d="M6 9l6 6 6-6"></path>
                            </svg>
                        </button>


                        <div class="dropdown-menu solutions-menu" :class="{ 'show-dropdown': solutionsOpen }">

                            <router-link to="/services/meta-ads" @click="closeMenu">
                                <span class="menu-icon">M</span>

                                <span>
                                    <strong>Meta Ads</strong>
                                    <small>Facebook & Instagram advertising</small>
                                </span>
                            </router-link>


                            <router-link to="/services/google-ads" @click="closeMenu">
                                <span class="menu-icon">G</span>

                                <span>
                                    <strong>Google Ads</strong>
                                    <small>Search & Performance Max</small>
                                </span>
                            </router-link>


                            <router-link to="/services/amazon-ads" @click="closeMenu">
                                <span class="menu-icon">A</span>

                                <span>
                                    <strong>Amazon Ads</strong>
                                    <small>Marketplace advertising</small>
                                </span>
                            </router-link>


                            <router-link to="/services/seo" @click="closeMenu">
                                <span class="menu-icon">S</span>

                                <span>
                                    <strong>SEO</strong>
                                    <small>Organic search growth</small>
                                </span>
                            </router-link>


                            <router-link to="/services/web-development" @click="closeMenu">
                                <span class="menu-icon">W</span>

                                <span>
                                    <strong>Web Development</strong>
                                    <small>Websites & landing experiences</small>
                                </span>
                            </router-link>


                            <router-link to="/services/shopify" @click="closeMenu">
                                <span class="menu-icon">S</span>

                                <span>
                                    <strong>Shopify Development</strong>
                                    <small>Store & conversion optimisation</small>
                                </span>
                            </router-link>


                            <router-link to="/services/email-marketing" @click="closeMenu">
                                <span class="menu-icon">@</span>

                                <span>
                                    <strong>Email Marketing</strong>
                                    <small>Lifecycle & retention campaigns</small>
                                </span>
                            </router-link>


                            <router-link to="/services" class="view-all" @click="closeMenu">
                                View all solutions
                                <span>→</span>
                            </router-link>

                        </div>

                    </div>


                    <!-- =================================================
                         LEAD GENERATION
                    ================================================== -->
                    <div class="nav-dropdown" :class="{ 'mobile-open': leadsOpen }">

                        <button type="button" class="nav-link dropdown-button" :aria-expanded="leadsOpen"
                            aria-haspopup="true" @click="toggleDropdown('leads')">
                            <span>Lead Generation</span>

                            <svg class="dropdown-arrow" :class="{ rotate: leadsOpen }" width="15" height="15"
                                viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2">
                                <path d="M6 9l6 6 6-6"></path>
                            </svg>
                        </button>


                        <div class="dropdown-menu lead-menu" :class="{ 'show-dropdown': leadsOpen }">

                            <router-link to="/lead-generation/ivf" @click="closeMenu">
                                <span class="lead-icon">IVF</span>

                                <span>
                                    <strong>IVF Leads</strong>
                                    <small>
                                        High-intent fertility clinic leads
                                    </small>
                                </span>
                            </router-link>


                            <router-link to="/lead-generation/hair-transplant" @click="closeMenu">
                                <span class="lead-icon">HT</span>

                                <span>
                                    <strong>Hair Transplant Leads</strong>
                                    <small>
                                        Qualified consultation enquiries
                                    </small>
                                </span>
                            </router-link>


                            <router-link to="/lead-generation" class="view-all" @click="closeMenu">
                                Explore lead programs
                                <span>→</span>
                            </router-link>

                        </div>

                    </div>


                    <!-- =================================================
                         KNOWLEDGE HUB
                    ================================================== -->
                    <div class="nav-dropdown" :class="{ 'mobile-open': knowledgeOpen }">

                        <button type="button" class="nav-link dropdown-button" :aria-expanded="knowledgeOpen"
                            aria-haspopup="true" @click="toggleDropdown('knowledge')">
                            <span>Knowledge Hub</span>

                            <svg class="dropdown-arrow" :class="{ rotate: knowledgeOpen }" width="15" height="15"
                                viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2">
                                <path d="M6 9l6 6 6-6"></path>
                            </svg>
                        </button>


                        <div class="dropdown-menu knowledge-menu" :class="{ 'show-dropdown': knowledgeOpen }">

                            <router-link to="/blog" @click="closeMenu">
                                <span class="menu-icon">B</span>

                                <span>
                                    <strong>Blogs</strong>
                                    <small>
                                        Digital marketing insights
                                    </small>
                                </span>
                            </router-link>


                            <router-link to="/case-studies" @click="closeMenu">
                                <span class="menu-icon">C</span>

                                <span>
                                    <strong>Case Studies</strong>
                                    <small>
                                        Results & client success stories
                                    </small>
                                </span>
                            </router-link>


                            <router-link to="/careers" @click="closeMenu">
                                <span class="menu-icon">J</span>

                                <span>
                                    <strong>Careers</strong>
                                    <small>
                                        Join the Techify team
                                    </small>
                                </span>
                            </router-link>

                        </div>

                    </div>


                    <!-- ABOUT -->
                    <router-link to="/about" class="nav-link" @click="closeMenu">
                        About
                    </router-link>


                    <!-- CONTACT -->
                    <router-link to="/contact" class="nav-link" @click="closeMenu">
                        Contact
                    </router-link>


                    <!-- CTA -->
                    <button type="button" class="nav-cta" @click="openConsultation">
                        Get Free Consultation
                        <span>→</span>
                    </button>

                </nav>


                <!-- MOBILE MENU -->
                <button type="button" class="menu-button" :class="{ active: menuOpen }" aria-label="Toggle navigation"
                    :aria-expanded="menuOpen" @click="toggleMobileMenu">
                    <span></span>
                    <span></span>
                    <span></span>
                </button>

            </div>

        </div>


        <!-- =====================================================
             CONSULTATION FORM
        ====================================================== -->
        <div v-if="consultationOpen" class="consultation-overlay" @click.self="closeConsultation">

            <div class="consultation-modal">

                <button type="button" class="close-button" @click="closeConsultation">
                    ×
                </button>


                <div class="consultation-heading">

                    <span>GET IN TOUCH</span>

                    <h2>
                        Get Free Consultation
                    </h2>

                    <p>
                        Tell us about your requirement and our team
                        will get back to you.
                    </p>

                </div>


                <form class="consultation-form" @submit.prevent="submitConsultation">

                    <!-- Name -->
                    <div class="form-group">

                        <label>Name</label>

                        <input v-model="form.name" type="text" placeholder="Enter your name" required />

                    </div>


                    <!-- Email + Phone -->
                    <div class="form-row">

                        <div class="form-group">

                            <label>Email</label>

                            <input v-model="form.email" type="email" placeholder="Enter your email" required />

                        </div>


                        <div class="form-group">

                            <label>Phone</label>

                            <input v-model="form.phone" type="tel" placeholder="Enter phone number" required />

                        </div>

                    </div>


                    <!-- Message -->
                    <div class="form-group">

                        <label>Message</label>

                        <textarea v-model="form.message" rows="4" placeholder="Tell us about your requirement"
                            required></textarea>

                    </div>


                    <!-- Submit -->
                    <button type="submit" class="submit-button">
                        Send Enquiry on WhatsApp
                        <span>→</span>
                    </button>

                </form>

            </div>

        </div>

    </header>
</template>


<script setup>
import { ref, reactive } from "vue";


/* =====================================================
   MENU STATE
===================================================== */

const menuOpen = ref(false);

const solutionsOpen = ref(false);
const leadsOpen = ref(false);
const knowledgeOpen = ref(false);

const consultationOpen = ref(false);


/* =====================================================
   FORM
===================================================== */

const form = reactive({
    name: "",
    email: "",
    phone: "",
    message: ""
});


/* =====================================================
   MOBILE MENU
===================================================== */

const toggleMobileMenu = () => {
    menuOpen.value = !menuOpen.value;

    if (!menuOpen.value) {
        closeDropdowns();
    }
};


/* =====================================================
   DROPDOWNS
===================================================== */

const toggleDropdown = (dropdown) => {

    if (dropdown === "solutions") {
        solutionsOpen.value = !solutionsOpen.value;
        leadsOpen.value = false;
        knowledgeOpen.value = false;
    }

    if (dropdown === "leads") {
        leadsOpen.value = !leadsOpen.value;
        solutionsOpen.value = false;
        knowledgeOpen.value = false;
    }

    if (dropdown === "knowledge") {
        knowledgeOpen.value = !knowledgeOpen.value;
        solutionsOpen.value = false;
        leadsOpen.value = false;
    }
};


const closeDropdowns = () => {
    solutionsOpen.value = false;
    leadsOpen.value = false;
    knowledgeOpen.value = false;
};


/* =====================================================
   CLOSE MENU
===================================================== */

const closeMenu = () => {

    menuOpen.value = false;

    closeDropdowns();
};


/* =====================================================
   CONSULTATION
===================================================== */

const openConsultation = () => {

    menuOpen.value = false;

    closeDropdowns();

    consultationOpen.value = true;
};


const closeConsultation = () => {

    consultationOpen.value = false;
};


/* =====================================================
   WHATSAPP SUBMIT
===================================================== */

const submitConsultation = () => {

    const whatsappNumber = "91906777034";

    const message = `
*New Consultation Enquiry - Techify Labs*

*Name:* ${form.name}

*Email:* ${form.email}

*Phone:* ${form.phone}

*Message:*
${form.message}
`;

    const whatsappUrl =
        `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

    window.open(
        whatsappUrl,
        "_blank"
    );


    /* Reset form */

    form.name = "";
    form.email = "";
    form.phone = "";
    form.message = "";

    consultationOpen.value = false;
};
</script>


<style scoped>
/* =====================================================
   GLOBAL
===================================================== */

.site-header {
    position: sticky;
    top: 0;
    z-index: 1000;
    width: 100%;
    background: #07111f;
}


/* =====================================================
   CONTAINER
===================================================== */

.container {
    width: min(1200px,
            calc(100% - 40px));

    margin: 0 auto;
}


/* =====================================================
   TOP HEADER
===================================================== */

.top-header {
    min-height: 38px;

    background: #050c16;

    border-bottom:
        1px solid rgba(255, 255, 255, 0.08);
}


.top-header-inner {
    min-height: 38px;

    display: flex;

    align-items: center;

    justify-content: flex-end;

    gap: 25px;
}


/* TOP ITEMS */

.top-item {
    display: inline-flex;

    align-items: center;

    gap: 7px;

    color: #ffffff;

    font-size: 12px;

    text-decoration: none;

    transition:
        color 0.2s ease;
}


.top-item:hover {
    color: #f36444;
}


.top-icon {
    color: #f36444;

    font-size: 13px;
}


/* =====================================================
   SOCIAL ICONS
===================================================== */

.social-icons {
    display: flex;

    align-items: center;

    gap: 7px;

    padding-left: 15px;

    border-left:
        1px solid rgba(255, 255, 255, 0.15);
}


.social-icons a {
    width: 25px;
    height: 25px;

    display: flex;

    align-items: center;

    justify-content: center;

    color: #ffffff;

    border:
        1px solid rgba(255, 255, 255, 0.2);

    border-radius: 50%;

    font-size: 11px;

    font-weight: 700;

    text-decoration: none;

    transition:
        background 0.2s ease,
        border-color 0.2s ease;
}


.social-icons a:hover {
    color: #ffffff;

    background: #f36444;

    border-color: #f36444;
}


/* =====================================================
   MAIN HEADER
===================================================== */

.main-header {
    background: #07111f;
}


.nav-wrap {
    min-height: 78px;

    display: flex;

    align-items: center;

    justify-content: space-between;

    gap: 25px;
}


/* =====================================================
   LOGO
===================================================== */

.brand {
    display: flex;

    align-items: center;

    flex-shrink: 0;

    text-decoration: none;
}


.brand-logo {
    width: 175px;

    height: auto;

    display: block;
}


/* =====================================================
   NAVIGATION
===================================================== */

.nav {
    display: flex;

    align-items: center;

    justify-content: center;

    flex: 1;

    gap: 4px;
}


.nav-link {
    position: relative;

    display: inline-flex;

    align-items: center;

    justify-content: center;

    gap: 7px;

    padding: 10px 12px;

    color: rgba(255, 255, 255, 0.9);

    background: transparent;

    border: 0;

    border-radius: 999px;

    font-size: 14px;

    font-weight: 600;

    text-decoration: none;

    white-space: nowrap;

    cursor: pointer;

    transition:
        background 0.2s ease,
        color 0.2s ease;
}


.nav-link:hover {
    color: #ffffff;

    background: rgba(255, 255, 255, 0.1);
}


.nav-link.router-link-active {
    color: #ffffff;

    background: rgba(255, 255, 255, 0.18);

    box-shadow:
        0 0 0 1px rgba(255, 255, 255, 0.2);
}


/* =====================================================
   DROPDOWN WRAPPER
===================================================== */

.nav-dropdown {
    position: relative;

    flex-shrink: 0;
}


.dropdown-button {
    font-family: inherit;
}


/* =====================================================
   DROPDOWN ARROW
===================================================== */

.dropdown-arrow {
    transition:
        transform 0.3s ease;
}


.dropdown-arrow.rotate {
    transform: rotate(180deg);
}


/* =====================================================
   DROPDOWN MENU
===================================================== */

.dropdown-menu {
    position: absolute;

    top: calc(100% + 8px);

    left: 50%;

    width: 330px;

    padding: 10px;

    background: #ffffff;

    border:
        1px solid #e5e7eb;

    border-radius: 16px;

    box-shadow:
        0 25px 60px rgba(0, 0, 0, 0.22);

    transform:
        translateX(-50%) translateY(10px);

    opacity: 0;

    visibility: hidden;

    pointer-events: none;

    transition:
        opacity 0.2s ease,
        transform 0.2s ease,
        visibility 0.2s ease;
}


/* Desktop hover */

@media (min-width: 901px) {

    .nav-dropdown:hover .dropdown-menu {
        opacity: 1;

        visibility: visible;

        pointer-events: auto;

        transform:
            translateX(-50%) translateY(0);
    }

}


/* Vue controlled dropdown */

.dropdown-menu.show-dropdown {
    opacity: 1;

    visibility: visible;

    pointer-events: auto;

    transform:
        translateX(-50%) translateY(0);
}


/* =====================================================
   DROPDOWN LINKS
===================================================== */

.dropdown-menu a {
    display: flex;

    align-items: center;

    gap: 13px;

    padding: 12px;

    color: #111827;

    border-radius: 11px;

    text-decoration: none;

    transition:
        background 0.2s ease,
        transform 0.2s ease;
}


.dropdown-menu a:hover {
    background: #fff4f1;

    transform: translateX(2px);
}


.dropdown-menu a>span:last-child {
    display: flex;

    flex-direction: column;

    gap: 3px;
}


.dropdown-menu strong {
    color: #111827;

    font-size: 14px;

    font-weight: 700;
}


.dropdown-menu small {
    color: #7b8494;

    font-size: 11px;

    line-height: 1.35;
}


/* =====================================================
   DROPDOWN ICONS
===================================================== */

.menu-icon {
    width: 38px;
    height: 38px;

    flex-shrink: 0;

    display: flex;

    align-items: center;

    justify-content: center;

    color: #f36444;

    background: #fff1ed;

    border-radius: 10px;

    font-size: 14px;

    font-weight: 800;
}


.lead-icon {
    min-width: 38px;
    height: 38px;

    padding: 0 7px;

    flex-shrink: 0;

    display: flex;

    align-items: center;

    justify-content: center;

    color: #f36444;

    background: #fff1ed;

    border-radius: 10px;

    font-size: 10px;

    font-weight: 800;
}


/* =====================================================
   VIEW ALL
===================================================== */

.dropdown-menu a.view-all {
    margin-top: 5px;

    padding: 13px;

    display: flex;

    flex-direction: row;

    align-items: center;

    justify-content: space-between;

    color: #f36444;

    background: #fff7f5;

    font-size: 13px;

    font-weight: 700;
}


.dropdown-menu a.view-all:hover {
    background: #fff0eb;

    transform: none;
}


.dropdown-menu a.view-all span {
    display: inline;
}


/* =====================================================
   CTA
===================================================== */

.nav-cta {
    display: inline-flex;

    align-items: center;

    justify-content: center;

    gap: 9px;

    min-height: 44px;

    padding: 0 20px;

    color: #ffffff;

    background: #f36444;

    border: 0;

    border-radius: 30px;

    font-family: inherit;

    font-size: 13px;

    font-weight: 700;

    white-space: nowrap;

    cursor: pointer;

    box-shadow:
        0 8px 25px rgba(243, 100, 68, 0.25);

    transition:
        background 0.25s ease,
        transform 0.25s ease,
        box-shadow 0.25s ease;
}


.nav-cta span {
    font-size: 18px;
}


.nav-cta:hover {
    background: #ff795c;

    transform: translateY(-2px);

    box-shadow:
        0 12px 30px rgba(243, 100, 68, 0.35);
}


/* =====================================================
   MOBILE BUTTON
===================================================== */

.menu-button {
    display: none;

    width: 44px;
    height: 44px;

    padding: 9px;

    background: transparent;

    border:
        1px solid rgba(255, 255, 255, 0.2);

    border-radius: 10px;

    cursor: pointer;
}


.menu-button span {
    display: block;

    width: 100%;

    height: 2px;

    margin: 5px 0;

    background: #ffffff;

    border-radius: 5px;

    transition: .25s ease;
}


.menu-button.active span:nth-child(1) {
    transform:
        translateY(7px) rotate(45deg);
}


.menu-button.active span:nth-child(2) {
    opacity: 0;
}


.menu-button.active span:nth-child(3) {
    transform:
        translateY(-7px) rotate(-45deg);
}


/* =====================================================
   CONSULTATION MODAL
===================================================== */

.consultation-overlay {
    position: fixed;

    inset: 0;

    z-index: 9999;

    display: flex;

    align-items: center;

    justify-content: center;

    padding: 20px;

    background:
        rgba(0, 0, 0, 0.72);

    backdrop-filter: blur(5px);
}


.consultation-modal {
    position: relative;

    width: min(550px,
            100%);

    max-height: 90vh;

    overflow-y: auto;

    padding: 38px;

    background: #ffffff;

    border-radius: 20px;

    box-shadow:
        0 30px 80px rgba(0, 0, 0, 0.35);
}


/* CLOSE */

.close-button {
    position: absolute;

    top: 15px;

    right: 18px;

    width: 36px;
    height: 36px;

    display: flex;

    align-items: center;

    justify-content: center;

    border: 0;

    border-radius: 50%;

    background: #f3f4f6;

    color: #07111f;

    font-size: 25px;

    cursor: pointer;
}


.close-button:hover {
    color: #ffffff;

    background: #f36444;
}


/* HEADING */

.consultation-heading {
    margin-bottom: 25px;
}


.consultation-heading>span {
    color: #f36444;

    font-size: 12px;

    font-weight: 800;

    letter-spacing: 1.5px;
}


.consultation-heading h2 {
    margin:
        7px 0 8px;

    color: #07111f;

    font-size: 30px;
}


.consultation-heading p {
    margin: 0;

    color: #687386;

    font-size: 14px;

    line-height: 1.6;
}


/* FORM */

.consultation-form {
    display: flex;

    flex-direction: column;

    gap: 17px;
}


.form-row {
    display: grid;

    grid-template-columns:
        1fr 1fr;

    gap: 15px;
}


.form-group {
    display: flex;

    flex-direction: column;

    gap: 7px;
}


.form-group label {
    color: #172033;

    font-size: 13px;

    font-weight: 700;
}


.form-group input,
.form-group textarea {
    width: 100%;

    box-sizing: border-box;

    padding: 13px 14px;

    color: #172033;

    background: #ffffff;

    border:
        1px solid #dfe3e8;

    border-radius: 9px;

    outline: none;

    font-family: inherit;

    font-size: 14px;
}


.form-group input:focus,
.form-group textarea:focus {
    border-color: #f36444;

    box-shadow:
        0 0 0 3px rgba(243, 100, 68, 0.1);
}


.form-group textarea {
    resize: vertical;
}


/* SUBMIT */

.submit-button {
    width: 100%;

    min-height: 48px;

    margin-top: 5px;

    display: flex;

    align-items: center;

    justify-content: center;

    gap: 9px;

    border: 0;

    border-radius: 30px;

    background: #f36444;

    color: #ffffff;

    font-family: inherit;

    font-size: 14px;

    font-weight: 700;

    cursor: pointer;

    transition:
        background 0.25s ease;
}


.submit-button:hover {
    background: #ff795c;
}


/* =====================================================
   TABLET
===================================================== */

@media (max-width: 1120px) {

    .container {
        width: min(100% - 30px,
                1100px);
    }

    .nav {
        gap: 1px;
    }

    .nav-link {
        padding-left: 8px;
        padding-right: 8px;

        font-size: 13px;
    }

    .nav-cta {
        padding: 0 14px;

        font-size: 12px;
    }

    .brand-logo {
        width: 155px;
    }
}


/* =====================================================
   MOBILE
===================================================== */

@media (max-width: 900px) {

    .top-header-inner {
        justify-content: center;
    }


    .social-icons {
        display: none;
    }


    .nav-wrap {
        min-height: 72px;
    }


    .brand-logo {
        width: 155px;
    }


    .menu-button {
        display: block;
    }


    .nav {
        position: absolute;

        top: 110px;

        left: 15px;
        right: 15px;

        display: none;

        flex-direction: column;

        align-items: stretch;

        gap: 2px;

        padding: 15px;

        background: #07111f;

        border:
            1px solid rgba(255, 255, 255, 0.1);

        border-radius: 16px;

        box-shadow:
            0 25px 60px rgba(0, 0, 0, 0.3);
    }


    .nav.is-open {
        display: flex;
    }


    .nav-link {
        width: 100%;

        justify-content: space-between;

        padding: 14px 10px;

        border-radius: 8px;
    }


    .nav-link.router-link-active {
        background:
            rgba(255, 255, 255, 0.12);

        box-shadow: none;
    }


    .nav-dropdown {
        width: 100%;
    }


    .dropdown-button {
        width: 100%;

        justify-content: space-between;
    }


    /* Mobile dropdown */

    .dropdown-menu {
        position: static;

        width: 100%;

        min-width: 0;

        box-sizing: border-box;

        padding: 5px;

        transform: none;

        background:
            rgba(255, 255, 255, 0.06);

        border: 0;

        border-radius: 10px;

        box-shadow: none;

        display: none;

        opacity: 1;

        visibility: visible;

        pointer-events: auto;
    }


    .nav-dropdown:hover .dropdown-menu {
        display: none;

        transform: none;
    }


    .dropdown-menu.show-dropdown {
        display: block;

        transform: none;
    }


    .dropdown-menu a {
        color: #ffffff;
    }


    .dropdown-menu strong {
        color: #ffffff;
    }


    .dropdown-menu small {
        color: #aeb8c6;
    }


    .dropdown-menu a:hover {
        background:
            rgba(255, 255, 255, 0.08);

        transform: none;
    }


    .menu-icon,
    .lead-icon {
        background:
            rgba(243, 100, 68, 0.15);
    }


    .dropdown-menu a.view-all {
        color: #ff8a72;

        background:
            rgba(243, 100, 68, 0.1);
    }


    .nav-cta {
        width: 100%;

        margin-top: 12px;
    }


    /* Modal */

    .consultation-modal {
        padding: 28px 20px;
    }


    .form-row {
        grid-template-columns: 1fr;
    }
}


/* =====================================================
   SMALL MOBILE
===================================================== */

@media (max-width: 480px) {

    .container {
        width:
            calc(100% - 28px);
    }


    .brand-logo {
        width: 140px;
    }


    .top-header-inner {
        justify-content: center;
    }


    .top-item {
        font-size: 11px;
    }
}
</style>
