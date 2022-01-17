function initTabNav(){
    const tabmenu = document.querySelectorAll('.js-tabmenu li');
    const tabcontent = document.querySelectorAll('.js-tabcontent section');

    if(tabmenu.length && tabcontent.length){
    tabcontent[0].classList.add('ativo');

    function activeTab(index){
        tabcontent.forEach((content) => {
            content.classList.remove('ativo')
        });

        tabcontent[index].classList.add('ativo');
    }

    tabmenu.forEach((itemMenu, index) => {
        itemMenu.addEventListener('click', () => {
            activeTab(index);
            })
     });
    }
}

initTabNav();

function initAccordion(){
    const accordionList = document.querySelectorAll('.js-accordion dt');
    if(accordionList.length){
        accordionList[0].classList.add('ativo')
        accordionList[0].nextElementSibling.classList.add('ativo')

        accordionList[0].classList.toggle('ativo');
        accordionList[0].nextElementSibling.classList.add('ativo')

        function activeAccordion(){
            this.classList.toggle('ativo');
            this.nextElementSibling.classList.toggle('ativo');
        }
    
        accordionList.forEach((item) => {
            item.addEventListener('click', activeAccordion);
        })
    }
}

initAccordion();

function initScrollSmooth(){
    const linksInternos = document.querySelectorAll('.js-menu a[href^="#"]');

    function scrollToSection(event){
        event.preventDefault();
        const href = event.currentTarget.getAttribute('href');
        const section = document.querySelector(href);

        section.scrollIntoView({
            behavior: 'smooth',
            block: 'start',
        });
        // forma alternativa
        //const top = section.offsetTop;
        //window.scrollTo({
        //    top: top,
        //    behavior: 'smooth',
        //})


    }

    linksInternos.forEach((link) => {
        link.addEventListener('click', scrollToSection);
    })

}
initScrollSmooth()

function InitAnimaScroll(){
    const sections = document.querySelectorAll('.js-scroll');

    if(sections.length){
        const windowMetade = window.innerHeight * 0.5;

        function animaScroll(){
            sections.forEach((section) => {
                const sectionTop = section.getBoundingClientRect().top - windowMetade;
                if (sectionTop < 0 ){
                    section.classList.add('ativo')
                }
            })

        }

        animaScroll()

        window.addEventListener('scroll', animaScroll);
    }
}

InitAnimaScroll()
 

 