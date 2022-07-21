export default function initNavMobile() {
    const btnMobile = document.getElementById("navbar-toggler")

    function toggleMenu() {
        const nav = document.getElementById("navbar")

        nav.classList.toggle('active')
    }

    btnMobile.addEventListener('click', toggleMenu)
}