document.addEventListener("DOMContentLoaded", () => {
    const textarea = document.querySelector("textarea");
    const select = document.querySelector("select");
    const button = document.querySelector("button");

    let voices = [];

    function populateVoiceList() {
        voices = speechSynthesis.getVoices();

        select.innerHTML = "";

        voices.forEach((voice, index) => { // Fix typo here
            const option = document.createElement("option");
            option.value = index;
            option.textContent = voice.name; // Fix typo here
            select.appendChild(option);
        });
    }
    speechSynthesis.onvoiceschanged = populateVoiceList;

    button.addEventListener("click", () => {
        const selectedVoice = voices[select.value];
        const textToSpeak = textarea.value;

        if (textToSpeak.trim() !== "") {
            const utterance = new SpeechSynthesisUtterance(textToSpeak);
            utterance.voice = selectedVoice;
            speechSynthesis.speak(utterance);
        }
    });
});