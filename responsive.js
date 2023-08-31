    function adjustTextSizeAndSpacing() {
        const loremTextDiv = document.querySelector('.lorem-text');
        const introTextDiv = document.querySelector('.intro-text');
        const polaroid = document.querySelector('.polaroid');

        
        if (window.innerWidth <= 600 || window.innerHeight <= 600) {
            loremTextDiv.style.fontSize = '16px';
            loremTextDiv.style.lineHeight = '1.2';
            introTextDiv.style.fontSize = '30px';
            polaroid.style.width = '200px';
            polaroid.style.height = '250px';
            polaroid.style.fontSize = '16px';
    
        } else if ((window.innerWidth > 600 && window.innerWidth <= 900) || 
                   (window.innerHeight > 600 && window.innerHeight <= 900)) {
            loremTextDiv.style.fontSize = '18px';
            loremTextDiv.style.lineHeight = '1.4';
            introTextDiv.style.fontSize = '40px';
            polaroid.style.width = '250px';
            polaroid.style.height = '300px';
            polaroid.style.fontSize = '17px';

        } else {
            loremTextDiv.style.fontSize = '22px';
            loremTextDiv.style.lineHeight = '1.6';
            introTextDiv.style.fontSize = '50px';
            polaroid.style.width = '300px';
            polaroid.style.height = '350px';
            polaroid.style.fontSize = '18px';

        }
    }
    
adjustTextSizeAndSpacing();
window.addEventListener('resize', adjustTextSizeAndSpacing);
    