const sidebar = document.querySelector('.sidebar');
const navItems = document.querySelectorAll('nav .nav-item');
const toggle = document.querySelector('.sidebar .toggle');
var r = document.querySelector(':root');  // Root


toggle.addEventListener('click', () => {

    if (sidebar.className === 'sidebar') {
        sidebar.classList.add('open');
        r.style.setProperty('--nav-size', `360px`);
    } else {
        sidebar.classList.remove('open');
        r.style.setProperty('--nav-size', `120px`);
    }

});

navItems.forEach(navItem => {

    navItem.addEventListener('click', () => {

        navItems.forEach(navItem => {
            navItem.classList.remove('active');
        });

        navItem.classList.add('active');

    });

});