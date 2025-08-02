document.addEventListener('DOMContentLoaded', function () {
    const currentPath =
        window.location.pathname.split('/').pop() || 'index.html';
    const navItems = document.querySelectorAll('.navigation .navbar-items');

    navItems.forEach((item) => {
        const link = item.querySelector('a');
        const href = link
            .getAttribute('href')
            .replace('/pages', '')
            .replace('/', '');
        console.log(href, 'href');
        console.log(currentPath, 'currentPath');

        if (href === currentPath) {
            item.classList.add('active');
        } else {
            item.classList.remove('active');
        }
    });
});

const goTo = (href) => {
    window.location.href = href;
};

const goToProduct = (hasInner) => {
    if (hasInner) {
        window.location.href = '/pages/products/inner.html';
    } else {
        window.location.href = '/pages/products/single.html';
    }
};
