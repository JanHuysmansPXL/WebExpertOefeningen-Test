<script>
    export default {
        data() {
            return {
                socialMedia: {
                    "facebook": "fab fa-facebook-square",
                    "instagram": "fab fa-instagram",
                    "youtube": "fab fa-youtube",
                    "snapchat": "fab fa-snapchat"
                },
                copyRight: "Copyright. Snaky Sneakers. All rights reserved"
            }
        },
        props: {
            mainTitle: String,
            subTitle: String
        }
    }
</script>

<template>
<footer class="footer">
        <div class="footer-header">
            <a href="#" class="logo">
                <i class="fas fa-shoe-prints"></i>
            </a>
            <div>
                <h1 class="main-name">{{ mainTitle }}</h1>
                <p class="sub-name">{{ subTitle }}</p>
            </div>
        </div>
        <div class="footer-social-media">
            <ul class="social-media">
                <li v-for="item in socialMedia" class="social-media-item">
                    <a href="#" class="social-media-link">
                        <i v-bind:class="item"></i>
                    </a>
                </li>
            </ul>
        </div>
        <div class="footer-copyright">
            <p class="footer-copyright-paragraph">&copy; {{ copyRight }}</p>
        </div>
    </footer>
</template>