document.addEventListener("DOMContentLoaded", function () {
    const sections = document.querySelectorAll('section');
    const menuItems = document.querySelectorAll('.header__menu__item__link');
    const menu = document.querySelector('.header__menu');

    function highlightMenuItem() {
        let scrollPosition = window.scrollY || document.documentElement.scrollTop;

        sections.forEach(function (section) {
            let sectionTop = section.offsetTop - 50;
            let sectionBottom = sectionTop + section.offsetHeight;

            if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
                let targetId = section.id;
                menuItems.forEach(function (menuItem) {
                    menuItem.closest('.header__menu__item__link').classList.remove('current-section');
                    if (menuItem.getAttribute('href') === '#' + targetId) {
                        menuItem.closest('.header__menu__item__link').classList.add('current-section');
                    }
                });
            }
        });
    }

    window.addEventListener("scroll", highlightMenuItem);
    window.addEventListener("resize", highlightMenuItem);

    function toggleMenu() {
        menu.classList.toggle('active');
    }

    document.querySelector('.header__title__menu i').addEventListener('click', toggleMenu);

    //fecha menu ao clicar fora dele
    document.addEventListener('click', function (event) {
        if (!event.target.closest('.header__title__menu')) {
            menu.classList.remove('active');
            highlightMenuItem();
        }
    });

    // fecha menu ao clicar no item
    menuItems.forEach(function (item) {
        item.addEventListener('click', function () {
            menu.classList.remove('active');
            highlightMenuItem();
        });
    });

    
});
