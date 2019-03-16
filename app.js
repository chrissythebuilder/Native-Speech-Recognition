window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

const recognition = new SpeechRecognition();

// for the window to keep typing what we're saying until we stop speaking
recognition.interimResults = true;

// if I stop speaking, the browser creates another paragraph 

let p = document.createElement("p");
const words = document.querySelector(".words");
words.appendChild(p);

recognition.addEventListener("result", e => {
    console.log(e.results);
    const transcript = Array.from(e.results)
    .map(result => result[0])
    .map(result => result.transcript)
    .join("");

    p.textContent = transcript;

    if (e.results[0].isFinal) {
        p = document.createElement("p");
        words.appendChild(p);
    }

    if (transcript.includes("unicorn")) {
        console.log("hihihi")
    }

    console.log(transcript);
});

recognition.addEventListener("end", recognition.start);
// initialize microphone access to build transcript
recognition.start();