// 取得按鈕、文字框和字形選擇元素
const applyTextButton = document.getElementById('applyTextButton');
const marqueeText = document.getElementById('marqueeText');
const newTextInput = document.getElementById('newTextInput');
const fontSelect = document.getElementById('fontSelect');
const changeTextUI = document.getElementById('changeTextUI');
const toggleUIButton = document.getElementById('toggleUIButton');

// 當按下"應用"按鈕時，更新跑馬燈的文字和字形
applyTextButton.addEventListener('click', () => {
    const newText = newTextInput.value;  // 獲取輸入框的值
    const selectedFont = fontSelect.value; // 獲取選擇的字形

    if (newText.trim() !== "") {  // 檢查是否有輸入文字
        marqueeText.textContent = newText;  // 更新跑馬燈的文字
        marqueeText.style.fontFamily = selectedFont; // 更新跑馬燈的字形
        newTextInput.value = "";  // 清空輸入框
    }
});

// 當按下"隱藏/顯示 設定"按鈕時，隱藏或顯示改變字的 UI
toggleUIButton.addEventListener('click', () => {
    if (changeTextUI.style.display === 'none') {
        changeTextUI.style.display = 'flex'; // 顯示改變字的 UI
    } else {
        changeTextUI.style.display = 'none'; // 隱藏改變字的 UI
    }
});
