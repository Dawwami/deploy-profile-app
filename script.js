// Fullscreen foto
var img, img2, img3, img4, modal, modalimg;

modal = document.getElementById("image-modal"); 
modalImg = document.getElementById("full-image");
img = document.getElementById("pdf-preview");
img2 = document.getElementById("pdf-preview2");
img3 = document.getElementById("pdf-preview3");
img4 = document.getElementById("pdf-preview4");

img.onclick = function() { fullScreen("https://storage.googleapis.com/gambar_deploy_profile/preview1.jpg"); };
img2.onclick = function() { fullScreen("https://storage.googleapis.com/gambar_deploy_profile/preview2.jpg"); };
img3.onclick = function() { fullScreen("https://storage.googleapis.com/gambar_deploy_profile/preview3.jpg"); };
img4.onclick = function() { fullScreen("https://storage.googleapis.com/gambar_deploy_profile/preview4.jpg"); };

function fullScreen(src){
    modal.style.display = "block";
    modalImg.src = src;
}

function closeModal() {
    modal.style.display = "none";
}

// Tentang Saya
document.getElementById('BtnProject').addEventListener('click', function() {
    var articleElement = document.querySelector('article');
    
    articleElement.innerHTML = `
        <h2>My Projects</h2>
        <p>Projects Coming Up</p>
        <button id="BtnKembali">Back</button>
    `;

    document.getElementById('BtnKembali').addEventListener('click', ubahLagi);
});

function ubahLagi() {
    var articleElement = document.querySelector('article');
    articleElement.innerHTML = `
        <h2>About Me</h2>
            <p align = "justify">Hello! My name is Muhammad Raihan Dawwami, I am a 5th semester student at Jakarta State University with a deep 
                interest in Information Technology. Since the beginning of college, I have developed skills in programming, 
                web development, and database management. In this portfolio, you will find various projects that I have worked on, as well as 
                the experiences and skills that I have gained during my academic journey. Thank you for visiting my portfolio. Let's explore together! </p>
            <p>I'm always excited to work on new projects and collaborate with other professionals. If you have a project in mind or just want to say hi, feel free to contact me!</p>
            <button id="BtnProject">My Projects</button>
            `;
    
    document.getElementById('BtnProject').addEventListener('click', function() {
        var articleElement = document.querySelector('article');
            articleElement.innerHTML = `
                    <h2>My Projects</h2>
                    <p>Projects Coming Up</p>
                    <button id="BtnKembali">Back</button>
                `;

                document.getElementById('BtnKembali').addEventListener('click', ubahLagi);
            });
        };
