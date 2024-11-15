let score = 0;
let isNormalCat = true;

function popCat() {
    const cat = document.getElementById('cat');
    const scoreDisplay = document.getElementById('score');

    // เพิ่มคะแนน
    score++;
    scoreDisplay.textContent = score;

    // เปลี่ยนรูปภาพแมว
    if (isNormalCat) {
        cat.src = 'img/ops.jpg'; // เปลี่ยนเป็นรูปที่สอง
    } else {
        cat.src = 'img/ahh.jpg'; // กลับมารูปแรก
    }
    isNormalCat = !isNormalCat;

    // เพิ่มเอฟเฟกต์การคลิก
    cat.classList.add('pop');
    setTimeout(() => cat.classList.remove('pop'), 100);
}
