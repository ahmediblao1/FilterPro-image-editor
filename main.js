// // Get the HTML elements

let saturate = document.getElementById('saturate')
let contrast = document.getElementById('contrast')
let brightness = document.getElementById('brightness')
let sepia = document.getElementById('sepia')
let grayscale = document.getElementById('grayscale')
let blur = document.getElementById('blur')
let huerotate = document.getElementById('hue-rotate')
let upload = document.getElementById('upload')
let download = document.getElementById('download')
let img = document.getElementById('img')
let Reset = document.querySelector('span')
let imgBox = document.querySelector('.img-box')



function resetvalue(){
    img.style.filter= 'none'
    contrast.value = "100"
    brightness.value = "100"
    sepia.value = "0"
    grayscale.value = "0"
    blur.value = "0"
    huerotate.value = "0"

}

/// hide the download and Reset buttons 
window.onload = function(){
    download.style.display= 'none';
    Reset.style.display= 'none';
    imgBox.style.display= 'none';

}


// uploading the image 

upload.onchange = function(){
    resetvalue()
    download.style.display= 'block';
    Reset.style.display= 'block';
    imgBox.style.display= 'block';
    let file = new FileReader();
    file.readAsDataURL(upload.files[0]);
    file.onload = function(){
    img.src= file.result
    }
function applyFilters(){
    let canvas = document.createElement('canvas');  // Create a new canvas element
    let imgWidth = img.width;
    let imgHeight = img.height;
    canvas.width = imgWidth;
    canvas.height = imgHeight;
    let context = canvas.getContext('2d');
    context.filter = `
        saturate(${saturate.value}%)
        contrast(${contrast.value}%)
        brightness(${brightness.value}%)
        sepia(${sepia.value}%)
        grayscale(${grayscale.value})
        blur(${blur.value}px)
        hue-rotate(${huerotate.value}deg)
    `;
    // Apply the filters to the canvas context
    context.drawImage(img, 0, 0, imgWidth, imgHeight);
    let dataUrl = canvas.toDataURL('image/png');
    return dataUrl;  // Return the data URL
}

download.onclick = function(){
    let filteredImage = applyFilters();
    download.href= filteredImage;
    download.download= "filtered_image.png"; // Set the filename for the downloaded file
}

}


let filters = document.querySelectorAll("ul li input");
filters.forEach( filter  => {
    filter.addEventListener("input", function(){
        img.style.filter = `
        saturate(${saturate.value}%)
        contrast(${contrast.value}%)
        brightness(${brightness.value}%)
        sepia(${sepia.value}%)
        grayscale(${grayscale.value})
        blur(${blur.value}px)
        hue-rotate(${huerotate.value}deg)
        `
    })
} )

download.onclick = function(){
    download.href= img.src;
}


