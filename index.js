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

var right = document.getElementsByClassName('right');
var si = right.length;
var z = 1;
turnRight();
function turnRight() {
    if (si >= 1) {
        si--;
    } else {
        si = right.length - 1;
        function sttmot(i) {
            setTimeout(function () {
                right[i].style.zIndex = 'auto';
            }, 300);
        }
        for (var i = 0; i < right.length; i++) {
            right[i].className = 'right';
            sttmot(i);
            z = 1;
        }
    }
    right[si].classList.add('flip');
    z++;
    right[si].style.zIndex = z;
}
function turnLeft() {
    if (si < right.length) {
        si++;
    } else {
        si = 1;
        for (var i = right.length - 1; i > 0; i--) {
            right[i].classList.add('flip');
            right[i].style.zIndex = right.length + 1 - i;
        }
    }
    right[si - 1].className = 'right';
    setTimeout(function () {
        right[si - 1].style.zIndex = 'auto';
    }, 350);
}
