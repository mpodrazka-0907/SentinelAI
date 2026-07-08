// =========================
// ELEMENTS
// =========================

const chatBox = document.getElementById("chatBox");
const userInput = document.getElementById("userInput");
const sendBtn = document.getElementById("sendBtn");
const newChatBtn = document.getElementById("newChatBtn");


// =========================
// SYNONYMS
// =========================

const synonyms = {
  egzamin: ["test", "quiz", "kolokwium", "zaliczenie"],
  oszustwo: ["ściąga", "cheat", "oszukiwanie"],
  deepfake: ["fake video", "fałszywe video", "podszycie"],
  prywatność: ["dane", "hasło", "konto", "rodo"],
  manipulacja: ["fake news", "dezinformacja", "propaganda"],
  ai: ["sztuczna inteligencja", "model ai", "chatbot"]
};


// =========================
// RULES
// =========================

const rules = [

  // =====================
  // CHEATING
  // =====================

  {
    category: "Cheating",

    riskEthical: "WYSOKIE",
    riskLegal: "ŚREDNIE",

    law: `
<b>Kodeks Karny</b><br>
art. 272 KK – wyłudzenie poświadczenia nieprawdy<br><br>

<b>Prawo o szkolnictwie wyższym</b><br>
odpowiedzialność dyscyplinarna studentów<br><br>

<b>AI Act UE</b><br>
zakaz wspierania oszustw edukacyjnych
`,

    keywords: [
      "egzamin",
      "test",
      "kolokwium",
      "ściąga",
      "ściąganie",
      "oszustwo",
      "plagiat",
      "ghostwriting",
      "esej",
      "magisterka",
      "licencjat",
      "homework",
      "academic cheating",
      "academic fraud",
      "uczciwość akademicka",
      "turnitin",
      "detektor ai",
      "omijanie detekcji ai"
    ],

    responses: [
`Używanie AI do rozwiązywania egzaminów jest nieetyczne i narusza zasady uczciwości akademickiej.

Może to skutkować konsekwencjami dyscyplinarnymi oraz unieważnieniem egzaminu.`
    ]
  },
  {
    category: "Kamera",

    riskEthical: "WYSOKIE",
    riskLegal: "ŚREDNIE",

    law: `
<b>RODO (GDPR)</b><br>
art. 107 ustawy o ochronie danych osobowych<br><br>

<b>Konstytucja RP</b><br>
art. 47 – prawo do prywatności<br><br>

<b>Kodeks Cywilny</b><br>
art. 23 KC – dobra osobiste
`,

    keywords: [
      "kamera",
      "nagrywanie",
      "monitoring",
      "Smart City"
    ],

    responses: [
`Jeśli chcesz zamontować kamerę na swojej posesji, bądź uważny i rejestruj tylko i wylącznie teren, ktöry nalezy do Ciebie.
Jeśli nagrasz na posesji sąsiada elementy, które moga naruszać jego prywatność będzie to przestępstwo. Rejestrowanie wizerunku musi byč zgodne z RODO - jeśli nagrasz wizerunek sąsiada bez jego zgody ani wiedzy naruszysz te zasady.
Nieautoryzowane zbieranie lub udostępnianie danych może skutkować wysokimi karami finansowymi.`
    ]
  },
    {
    category: "Smartwatch",

    riskEthical: "WYSOKIE",
    riskLegal: "ŚREDNIE",

    law: `
<b>Kodeks Karny</b><br>
art. 272 KK – wyłudzenie poświadczenia nieprawdy<br><br>

<b>Prawo o szkolnictwie wyższym</b><br>
odpowiedzialność dyscyplinarna studentów<br><br>

<b>AI Act UE</b><br>
zakaz wspierania oszustw edukacyjnych
`,

    keywords: [
      "zegarek",
      "smartwatch",
      "intelifentny zegarek",
      
    ],

    responses: [
`Jeśli chcesz korzystać ze smartwatcha podczas egzaminu, pamiętaj, że jego używanie do odbierania informacji lub komunikowania się z innymi jest traktowane jako forma ściągania.

Smartwatch umożliwia wyświetlanie wiadomości, notatek czy odpowiedzi, dlatego jego użycie w trakcie egzaminu może zostać uznane za naruszenie regulaminu.

Próba uzyskania nieuprawnionej pomocy za pomocą smartwatcha może skutkować unieważnieniem egzaminu, otrzymaniem oceny niedostatecznej lub innymi konsekwencjami przewidzianymi przez szkołę lub uczelnię..`
    ]
  },
      {
    category: "Inteligentny transport",

    riskEthical: "WYSOKIE",
    riskLegal: "ŚREDNIE",

    law: `
<b>Kodeks Karny</b><br>
art. 286 KK – oszustwo<br>
art. 287 KK – oszustwo komputerowe<br><br>

<b>AI Act UE</b><br>
zakaz manipulacyjnych systemów IoT
`,

    keywords: [
      "hulajnoga",
      "inteligentny transport",
      "rower IoT",
      "hulajnogi",
      "tesla"
      
    ],

    responses: [
`Jeśli korzystasz z inteligentnego pojazdu lub hulajnogi sterowanej za pomocą aplikacji, pamiętaj o odpowiednim zabezpieczeniu swojego konta.

Słabe hasło lub udostępnienie danych logowania może umożliwić osobom nieuprawnionym przejęcie konta i zdalne odblokowanie pojazdu.

Brak odpowiednich zabezpieczeń może prowadzić do utraty kontroli nad pojazdem, kradzieży lub wycieku danych zapisanych w aplikacji.`
    ]
  },
  // =====================
  // DEEPFAKE
  // =====================

  {
    category: "Deepfake",

    riskEthical: "WYSOKIE",
    riskLegal: "WYSOKIE",

    law: `
<b>Kodeks Karny</b><br>
art. 190a §2 KK – podszywanie się<br>
art. 212 KK – zniesławienie<br><br>

<b>Kodeks Cywilny</b><br>
art. 23–24 KC – dobra osobiste<br><br>

<b>AI Act UE</b><br>
obowiązek oznaczania treści AI
`,

    keywords: [
      "deepfake",
      "deep fake",
      "fake video",
      "voice cloning",
      "klonowanie głosu",
      "syntetyczne media",
      "podszywanie się",
      "face swap",
      "fake identity",
      "synthetic media",
      "fake audio"
    ],

    responses: [
`Tworzenie deepfake bez zgody osoby może naruszać jej dobra osobiste oraz prowadzić do odpowiedzialności karnej.

AI Act UE wymaga oznaczania treści generowanych przez AI.`
    ]
  },


  // =====================
  // PRIVACY
  // =====================

  {
    category: "Privacy",

    riskEthical: "ŚREDNIE",
    riskLegal: "WYSOKIE",

    law: `
<b>RODO (GDPR)</b><br>
art. 107 ustawy o ochronie danych osobowych<br><br>

<b>Konstytucja RP</b><br>
art. 47 – prawo do prywatności<br><br>

<b>Kodeks Cywilny</b><br>
art. 23 KC – dobra osobiste
`,

    keywords: [
      "rodo",
      "gdpr",
      "dane osobowe",
      "privacy",
      "data privacy",
      "tracking",
      "cookies",
      "profilowanie",
      "monitoring",
      "wyciek danych",
      "scraping danych",
      "przetwarzanie danych",
      "cyberprywatność"
    ],

    responses: [
`Przetwarzanie danych osobowych musi być zgodne z RODO.

Nieautoryzowane zbieranie lub udostępnianie danych może skutkować wysokimi karami finansowymi.`
    ]
  },


  // =====================
  // COPYRIGHT
  // =====================

  {
    category: "Copyright",

    riskEthical: "ŚREDNIE",
    riskLegal: "ŚREDNIE",

    law: `
<b>Ustawa o prawie autorskim</b><br>
art. 115 – naruszenie praw autorskich<br><br>

<b>AI Act UE</b><br>
przejrzystość danych treningowych<br><br>

<b>DSA</b><br>
obowiązki platform internetowych
`,

    keywords: [
      "copyright",
      "prawa autorskie",
      "plagiat",
      "piractwo",
      "creative commons",
      "ai art",
      "ai music",
      "training data",
      "dataset copyright",
      "style imitation",
      "watermarking",
      "copyright infringement"
    ],

    responses: [
`Kopiowanie cudzej pracy bez zgody autora może stanowić naruszenie praw autorskich.

AI powinno wspierać twórców, a nie zastępować ich pracę.`
    ]
  },


  // =====================
  // MANIPULATION
  // =====================

  {
    category: "Manipulation",

    riskEthical: "WYSOKIE",
    riskLegal: "WYSOKIE",

    law: `
<b>Kodeks Karny</b><br>
art. 286 KK – oszustwo<br>
art. 287 KK – oszustwo komputerowe<br><br>

<b>AI Act UE</b><br>
zakaz manipulacyjnych systemów AI
`,

    keywords: [
      "prompt injection",
      "jailbreak",
      "ai manipulation",
      "prompt hacking",
      "exploit",
      "bypass ai safety",
      "prompt attack",
      "adversarial prompting",
      "unsafe prompts",
      "model abuse",
      "llm exploit",
      "policy bypass",
      "roleplay jailbreak"
    ],

    responses: [
`Wykorzystywanie AI do manipulowania systemami lub omijania zabezpieczeń może prowadzić do odpowiedzialności prawnej.

AI powinno działać w sposób transparentny i zgodny z zasadami bezpieczeństwa.`
    ]
  },


  // =====================
  // DISINFORMATION
  // =====================

  {
    category: "Disinformation",

    riskEthical: "WYSOKIE",
    riskLegal: "ŚREDNIE",

    law: `
<b>AI Act UE</b><br>
przeciwdziałanie manipulacji informacją<br><br>

<b>Kodeks Karny</b><br>
art. 212 KK – zniesławienie<br><br>

<b>DSA</b><br>
obowiązki platform internetowych
`,

    keywords: [
      "dezinformacja",
      "misinformation",
      "disinformation",
      "fake news",
      "propaganda",
      "fake articles",
      "fake sources",
      "manipulacja mediami",
      "wojna informacyjna",
      "bot propaganda",
      "social bots",
      "troll farm",
      "fake accounts",
      "ai-generated news",
      "fake reviews",
      "teorie spiskowe",
      "election interference",
      "manipulacja wyborami",
      "false narratives"
    ],

    responses: [
`Generowanie dezinformacji przy użyciu AI może prowadzić do manipulacji społecznej i szkód informacyjnych.

Systemy AI nie powinny być wykorzystywane do tworzenia fałszywych narracji ani propagandy.`
    ]
  },


  // =====================
  // SAFETY
  // =====================

  {
    category: "Safety",

    riskEthical: "ŚREDNIE",
    riskLegal: "WYSOKIE",

    law: `
<b>AI Act UE</b><br>
obowiązki bezpieczeństwa systemów wysokiego ryzyka<br><br>

<b>RODO</b><br>
bezpieczeństwo przetwarzania danych<br><br>

<b>NIS2</b><br>
cyberbezpieczeństwo<br><br>

<b>ISO/IEC 27001</b><br>
bezpieczeństwo informacji
`,

    keywords: [
      "ai safety",
      "bezpieczeństwo ai",
      "alignment",
      "hallucination",
      "hallucinations",
      "model poisoning",
      "data poisoning",
      "adversarial attack",
      "red teaming",
      "ai governance",
      "runtime monitoring",
      "secure ai",
      "ml security",
      "risk assessment",
      "harmful output",
      "threat modeling",
      "secure deployment",
      "cybersecurity ai"
    ],

    responses: [
`Bezpieczeństwo systemów AI jest kluczowe dla ograniczania ryzyka błędnych lub szkodliwych decyzji.

AI Act UE nakłada dodatkowe wymagania na systemy wysokiego ryzyka.`
    ]
  }

];


// =========================
// RISK CLASS
// =========================

function getRiskClass(level){

  const normalized = level.toLowerCase();

  if(normalized.includes("nisk")){
    return "risk-low";
  }

  if(normalized.includes("śred") || normalized.includes("sred")){
    return "risk-medium";
  }

  if(normalized.includes("wysok")){
    return "risk-high";
  }

  return "";
}


// =========================
// ADD MESSAGE
// =========================

function addMessage(text, sender){

  const div = document.createElement("div");

  div.classList.add("message", sender);

  div.innerHTML = `
    <div class="message-content">
      ${text}
    </div>
  `;

  chatBox.appendChild(div);

  scrollToBottom();
}


// =========================
// BOT RESPONSE
// =========================

function addBotResponse(text, riskEthical, riskLegal, law){

  const ethicalClass = getRiskClass(riskEthical);
  const legalClass = getRiskClass(riskLegal);

  const div = document.createElement("div");

  div.classList.add("message", "bot");

  div.innerHTML = `
    <div class="message-content">

      ${text}

      <div class="law-section">
        <h4 style="margin-top:20px; color:#d8b4fe;">
          ⚖️ Podstawa prawna
        </h4>

        <p style="margin-top:10px; line-height:1.7;">
          ${law}
        </p>
      </div>

      <div class="risk-badge ${ethicalClass}">
        🧠 Ryzyko etyczne: ${riskEthical}
      </div>

      <div class="risk-badge legal ${legalClass}">
        ⚖️ Ryzyko prawne: ${riskLegal}
      </div>

    </div>
  `;

  chatBox.appendChild(div);

  scrollToBottom();
}


// =========================
// THINKING
// =========================

function showThinkingAnimation(){

  const div = document.createElement("div");

  div.id = "thinking";

  div.classList.add("message", "bot");

  div.innerHTML = `
    <div class="message-content">

      AI analizuje aspekty etyczne i prawne...

      <div class="typing">
        <span></span>
        <span></span>
        <span></span>
      </div>

    </div>
  `;

  chatBox.appendChild(div);

  scrollToBottom();
}


function removeThinkingAnimation(){

  const el = document.getElementById("thinking");

  if(el){
    el.remove();
  }
}


// =========================
// NORMALIZE
// =========================

function normalizeText(text){

  return text
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^\w\s]/g, " ");
}


// =========================
// TOKENIZE
// =========================

function tokenize(text){

  return normalizeText(text)
    .split(/\s+/)
    .filter(Boolean);
}


// =========================
// SIMILARITY
// =========================

function similarity(a, b){

  a = normalizeText(a);
  b = normalizeText(b);

  if(a === b) return 1;

  if(a.includes(b) || b.includes(a)) return 0.9;

  let matches = 0;

  for(let i = 0; i < Math.min(a.length, b.length); i++){

    if(a[i] === b[i]){
      matches++;
    }

  }

  return matches / Math.max(a.length, b.length);
}


// =========================
// CATEGORY BOOSTS
// =========================

const categoryBoosts = {

  Disinformation: [
    "fake news",
    "dezinformacja",
    "misinformation",
    "disinformation",
    "propaganda"
  ],

  Safety: [
    "ai safety",
    "alignment",
    "hallucination",
    "red teaming",
    "model poisoning"
  ]

};


// =========================
// GENERATE RESPONSE
// =========================

function generateResponse(msg){

  const text = normalizeText(msg);

  const words = tokenize(msg);

  let best = null;
  let bestScore = 0;

  for(const rule of rules){

    let score = 0;

    for(const keyword of rule.keywords){

      const normalizedKeyword =
        normalizeText(keyword);

      if(text.includes(normalizedKeyword)){
        score += 15;
      }

      const keywordWords =
        normalizedKeyword.split(" ");

      keywordWords.forEach(word => {

        if(words.includes(word)){
          score += 4;
        }

        words.forEach(userWord => {

          if(similarity(userWord, word) > 0.82){
            score += 2;
          }

        });

      });

    }

    for(const key in synonyms){

      const syns = synonyms[key];

      if(text.includes(normalizeText(key))){

        syns.forEach(s => {

          if(rule.keywords.includes(s)){
            score += 10;
          }

        });

      }

    }

    if(categoryBoosts[rule.category]){

      categoryBoosts[rule.category]
      .forEach(term => {

        if(text.includes(normalizeText(term))){
          score += 25;
        }

      });

    }

    if(score > bestScore){

      bestScore = score;
      best = rule;

    }

  }

  if(best && bestScore > 8){

    const randomResponse =
      best.responses[
        Math.floor(
          Math.random() *
          best.responses.length
        )
      ];

    return {
      response: randomResponse,
      riskEthical: best.riskEthical,
      riskLegal: best.riskLegal,
      law: best.law
    };

  }

  return {

    response:
`Nie mogę jednoznacznie sklasyfikować tego zapytania.

Spróbuj użyć bardziej konkretnych słów kluczowych związanych z:
• AI Act
• RODO
• deepfake
• bezpieczeństwem AI
• dezinformacją
• manipulacją AI`,

    riskEthical: "NISKIE",
    riskLegal: "NISKIE",

    law:
`AI Act UE<br>
RODO (GDPR)<br>
Zasady odpowiedzialnego użycia AI`

  };

}


// =========================
// SEND MESSAGE
// =========================

function sendMessage(){

  const message = userInput.value.trim();

  if(message === "") return;

  addMessage(message, "user");

  saveMessage(message, "user");

  userInput.value = "";

  showThinkingAnimation();

  setTimeout(() => {

    removeThinkingAnimation();

    const response =
      generateResponse(message);

    addBotResponse(
      response.response,
      response.riskEthical,
      response.riskLegal,
      response.law
    );

    saveMessage(
      response.response,
      "bot",
      response.riskEthical,
      response.riskLegal,
      response.law
    );

  }, 1600);

}


// =========================
// STORAGE
// =========================

function saveMessage(
  text,
  sender,
  riskEthical = "",
  riskLegal = "",
  law = ""
){

  const data = JSON.parse(
    localStorage.getItem("chat")
  ) || [];

  data.push({
    text,
    sender,
    riskEthical,
    riskLegal,
    law
  });

  localStorage.setItem(
    "chat",
    JSON.stringify(data)
  );

}


function loadMessages(){

  const data = JSON.parse(
    localStorage.getItem("chat")
  ) || [];

  data.forEach(m => {

    if(m.sender === "user"){

      addMessage(m.text, "user");

    } else {

      addBotResponse(
        m.text,
        m.riskEthical,
        m.riskLegal,
        m.law
      );

    }

  });

}


// =========================
// EVENTS
// =========================

sendBtn.addEventListener(
  "click",
  sendMessage
);

userInput.addEventListener(
  "keypress",
  e => {

    if(e.key === "Enter"){
      sendMessage();
    }

  }
);


// =========================
// NEW CHAT
// =========================

newChatBtn.addEventListener(
  "click",
  () => {

    localStorage.removeItem("chat");

    location.reload();

  }
);


// =========================
// SCROLL
// =========================

function scrollToBottom(){

  chatBox.scrollTop =
    chatBox.scrollHeight;

}


// =========================
// INIT
// =========================

loadMessages();
// =========================
// PARTICLES
// =========================

const particlesContainer =
  document.getElementById("particles");

function createParticle(){

  const particle =
    document.createElement("div");

  particle.classList.add("particle");

  const size =
    Math.random() * 4 + 2;

  particle.style.width = `${size}px`;
  particle.style.height = `${size}px`;

  particle.style.left =
    Math.random() * window.innerWidth + "px";

  particle.style.animationDuration =
    (Math.random() * 10 + 8) + "s";

  particle.style.opacity =
    Math.random();

  particlesContainer.appendChild(particle);

  setTimeout(() => {
    particle.remove();
  }, 18000);

}


// SPAWN LOOP

setInterval(() => {

  createParticle();

}, 220);
