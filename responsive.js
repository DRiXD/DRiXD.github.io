    function adjustTextSizeAndSpacing() {
        const loremTextDiv = document.querySelector('.lorem-text');
        const introTextDiv = document.querySelector('.intro-text');
    
        
        if (window.innerWidth <= 600 || window.innerHeight <= 600) {
            loremTextDiv.style.fontSize = '16px';
            loremTextDiv.style.lineHeight = '1.2';
            introTextDiv.style.fontSize = '30px';
    
        } else if ((window.innerWidth > 600 && window.innerWidth <= 900) || 
                   (window.innerHeight > 600 && window.innerHeight <= 900)) {
            loremTextDiv.style.fontSize = '18px';
            loremTextDiv.style.lineHeight = '1.4';
            introTextDiv.style.fontSize = '40px';
    
        } else {
            loremTextDiv.style.fontSize = '22px';
            loremTextDiv.style.lineHeight = '1.6';
            introTextDiv.style.fontSize = '50px';
        }
    }
    
adjustTextSizeAndSpacing();
window.addEventListener('resize', adjustTextSizeAndSpacing);
    