const emojis = ["❤️", "💖", "💕", "🎂", "✨", "💝", "😍"];

function createEmoji() {
    const emoji = document.createElement("div");
    emoji.classList.add("emoji");
    emoji.innerText = emojis[Math.floor(Math.random() * emojis.length)];

    emoji.style.left = Math.random() * 100 + "vw";
    emoji.style.fontSize = Math.random() * 25 + 20 + "px";
    emoji.style.animationDuration = Math.random() * 3 + 4 + "s";

    document.body.appendChild(emoji);

    setTimeout(() => {
        emoji.remove();
    }, 7000);
}

setInterval(createEmoji, 400);
setInterval(createEmoji, window.innerWidth < 600 ? 700 : 400);
function showLove() {
    document.getElementById("loveResult").innerHTML =
        "Infinity ♾️ times more every single day, Reet ❤️";
}
