// قائمة الروابط الـ 11 بالكامل
const qrLinks = [
    "https://i.postimg.cc/4xxfYQL9/(3)-Brawl-Stars-Codes-2026-New-Brawl-Stars-Code-Codices-de-Brawl-Stars-Brawl-Talk-3-NEW-Brawl.png",
    "https://i.postimg.cc/Z5nmbKnx/(3)-Brawl-Stars-Codes-2026-New-Brawl-Stars-Code-Codices-de-Brawl-Stars-Brawl-Talk-3-NEW-Brawl.png",
    "https://i.postimg.cc/4NNkPN6T/(3)-Brawl-Stars-Codes-2026-New-Brawl-Stars-Code-Codices-de-Brawl-Stars-Brawl-Talk-3-NEW-Brawl.png",
    "https://i.postimg.cc/5ysrTLBz/(3)-Brawl-Stars-Codes-2026-New-Brawl-Stars-Code-Codices-de-Brawl-Stars-Brawl-Talk-3-NEW-Brawl.png",
    "https://i.postimg.cc/26w9LhXZ/(3)-Brawl-Stars-Codes-2026-New-Brawl-Stars-Code-Codices-de-Brawl-Stars-Brawl-Talk-3-NEW-Brawl.png",
    "https://i.postimg.cc/wjgVL7LV/(3)-Brawl-Stars-Codes-2026-New-Brawl-Stars-Code-Codices-de-Brawl-Stars-Brawl-Talk-3-NEW-Brawl.png",
    "https://i.postimg.cc/8cLRrSC3/(3)-Brawl-Stars-Codes-2026-New-Brawl-Stars-Code-Codices-de-Brawl-Stars-Brawl-Talk-3-NEW-Brawl.png",
    "https://i.postimg.cc/RZpHhFRZ/(3)-Brawl-Stars-Codes-2026-New-Brawl-Stars-Code-Codices-de-Brawl-Stars-Brawl-Talk-3-NEW-Brawl.png",
    "https://i.postimg.cc/q796c5W3/7575757578776.png",
    "https://i.postimg.cc/x8Pk2T8X/(3)-Brawl-Stars-Codes-2026-New-Brawl-Stars-Code-Codices-de-Brawl-Stars-Brawl-Talk-3-NEW-Brawl.png",
    "https://i.postimg.cc/4NJ71t26/(3)-Brawl-Stars-Codes-2026-New-Brawl-Stars-Code-Codices-de-Brawl-Stars-Brawl-Talk-3-NEW-Brawl.png"
];

const grid = document.getElementById('awards-grid');
const modal = document.getElementById('modal');
const modalImg = document.getElementById('img-full');
const closeBtn = document.querySelector('.close');

// إنشاء البطاقات عند تحميل الصفحة
qrLinks.forEach((url, i) => {
    const card = document.createElement('div');
    card.className = 'card';
    card.innerHTML = `
        <div class="badge">كود 2026</div>
        <img src="${url}" alt="Brawl Stars QR">
        <div class="card-body">
            <h3>مكافأة رقم ${i + 1}</h3>
            <button class="btn">عرض الكود</button>
        </div>
    `;
    
    card.onclick = () => {
        modal.style.display = "flex";
        modalImg.src = url;
    };
    
    grid.appendChild(card);
});

// إغلاق النافذة المنبثقة
closeBtn.onclick = () => modal.style.display = "none";
window.onclick = (e) => {
    if (e.target == modal) modal.style.display = "none";
};