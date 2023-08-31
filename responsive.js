    function adjustTextSizeAndSpacing() {
        const loremTextDiv = document.querySelector('.lorem-text');
        const introTextDiv = document.querySelector('.intro-text');
        const polaroids_1 =  $('> *', $('.polaroid-container1'));;

        
        if (window.innerWidth <= 600 || window.innerHeight <= 600) {
            loremTextDiv.style.fontSize = '16px';
            loremTextDiv.style.lineHeight = '1.2';
            introTextDiv.style.fontSize = '30px';
            polaroids_1.style.width = '200px';
            polaroids_1.style.height = '250px';
            polaroids_1.style.fontSize = '16px';
    
        } else if ((window.innerWidth > 600 && window.innerWidth <= 900) || 
                   (window.innerHeight > 600 && window.innerHeight <= 900)) {
            loremTextDiv.style.fontSize = '18px';
            loremTextDiv.style.lineHeight = '1.4';
            introTextDiv.style.fontSize = '40px';
            polaroids_1.style.width = '250px';
            polaroids_1.style.height = '300px';
            polaroid_1.style.fontSize = '17px';

        } else {
            loremTextDiv.style.fontSize = '22px';
            loremTextDiv.style.lineHeight = '1.6';
            introTextDiv.style.fontSize = '50px';
            polaroids_1.style.width = '300px';
            polaroids_1.style.height = '350px';
            polaroids_1.style.fontSize = '18px';

        }
    }
    
adjustTextSizeAndSpacing();
window.addEventListener('resize', adjustTextSizeAndSpacing);
    