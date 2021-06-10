let tabWrapp1 = document.querySelectorAll('.tab1');
let tabWrapp2 = document.querySelectorAll('.tab2');
let tabWrapp3 = document.querySelectorAll('.tab3');
let tailorImgRef = document.getElementById("tailorImg");
let orderImgRef = document.getElementById("orderImg");
let crmImgref = document.getElementById("crmImg");

// images path array

let tailorImgs = [
    "assets/images/tab1/tailor1.png",
    "assets/images/tab1/tailor2.png",
    "assets/images/tab1/tailor3.png",
    "assets/images/tab1/tailor4.png",
]
let orderImgs = [
    "assets/images/tab2/order1.png",
    "assets/images/tab2/order2.png",
    "assets/images/tab2/order3.png",
    "assets/images/tab2/order4.png",
]
let crmImgs = [
    "assets/images/tab3/crm1.png",
    "assets/images/tab3/crm2.png",
    "assets/images/tab3/crm3.png",
    "assets/images/tab3/crm4.png",
]


tabWrapp1.forEach((tab, i) => {
    tab.addEventListener('click', () => {
        for (let j = 0; j < tabWrapp1.length; j++) {
            if (tabWrapp1[j].classList.contains('tab-active')) {
                tabWrapp1[j].classList.remove('tab-active');
                if (tabWrapp1[j].previousElementSibling) {
                    if (tabWrapp1[j].previousElementSibling.classList.contains('rm-bord')) {
                        tabWrapp1[j].previousElementSibling.classList.remove('rm-bord')
                    }

                }
            }
        }
        tab.classList.add('tab-active');
        tab.previousElementSibling.classList.add('rm-bord')
        tailorImgRef.style.display = "none";
        tailorImgRef.src = tailorImgs[i];
        tailorImgRef.style.display = "block";
        tailorImgRef.classList.add('anima');
        setTimeout(() => {
            tailorImgRef.classList.remove('anima');
        }, 1000)
    });
    if (tab.classList.contains('tab-active')) {
        tab.previousElementSibling.classList.add('rm-bord')
    }
});

tabWrapp2.forEach((tab, i) => {

    tab.addEventListener('click', () => {

        for (let j = 0; j < tabWrapp2.length; j++) {
            if (tabWrapp2[j].classList.contains('tab-active')) {
                tabWrapp2[j].classList.remove('tab-active');
                if (tabWrapp2[j].previousElementSibling) {
                    if (tabWrapp2[j].previousElementSibling.classList.contains('rm-bord')) {
                        tabWrapp2[j].previousElementSibling.classList.remove('rm-bord')
                    }
                    tab.previousElementSibling.classList.add('rm-bord')
                }
            }
        }
        tab.classList.add('tab-active');
        tab.previousElementSibling.classList.add('rm-bord');
        orderImgRef.style.display = "none";
        orderImgRef.src = orderImgs[i];
        orderImgRef.style.display = "block";
        orderImgRef.classList.add('anima');
        setTimeout(() => {
            orderImgRef.classList.remove('anima');
        }, 1000)
    });
    if (tab.classList.contains('tab-active')) {
        tab.previousElementSibling.classList.add('rm-bord')
    }
});

tabWrapp3.forEach((tab, i) => {

    tab.addEventListener('click', () => {

        for (let j = 0; j < tabWrapp3.length; j++) {
            if (tabWrapp3[j].classList.contains('tab-active')) {
                tabWrapp3[j].classList.remove('tab-active');
                if (tabWrapp3[j].previousElementSibling) {
                    if (tabWrapp3[j].previousElementSibling.classList.contains('rm-bord')) {
                        tabWrapp3[j].previousElementSibling.classList.remove('rm-bord')
                    }

                }

            }
        }
        tab.classList.add('tab-active');
        crmImgref.style.display = "none";
        crmImgref.src = crmImgs[i];
        crmImgref.style.display = "block";
        tab.previousElementSibling.classList.add('rm-bord');
        crmImgref.classList.add('anima');
        setTimeout(() => {
            crmImgref.classList.remove('anima');
        }, 1000)
    });
    if (tab.classList.contains('tab-active')) {
        tab.previousElementSibling.classList.add('rm-bord')
    }

});


function goToSection(id) {
    let tab = document.getElementById(id);
    tab.scrollIntoView({ behavior: "smooth" })
}