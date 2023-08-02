const hello = document.getElementById("hello");

const languages = [
    'Hello',         // English
    'नमस्ते',       // Hindi (Namaste)
    'Hola',          // Spanish
    'Bonjour',       // French
    'Hallo',         // German
    'Ciao',          // Italian
    'こんにちは',    // Japanese (Konnichiwa)
    '안녕하세요',    // Korean (Annyeonghaseyo)
    'Merhaba',       // Turkish
    'مرحبًا',        // Arabic (Marhaban)
    '你好',          // Chinese (Simplified) (Nǐ hǎo)
    'Aloha',         // Hawaiian
    'Здравствуйте', // Russian (Zdravstvuyte)
    'Helló',         // Hungarian
    'שָׁלוֹם',       // Hebrew (Shalom)
    'Jambo',         // Swahili
    'Sawubona',      // Zulu
    'Сайн байна уу', // Mongolian (Sain baina uu)
    'Szia',          // Hungarian
    'Kamusta',       // Filipino (Tagalog)
    'Hej',           // Swedish
    'Привет',        // Russian (Privet)
    'გამარჯობა',  // Georgian (Gamardjoba)
    'สวัสดี',      // Thai (Sawasdee)
    'Salut',         // Romanian
    'Dia dhuit',     // Irish
    'Cześć',         // Polish
    'Olá',          // Portuguese
    'Xin chào',     // Vietnamese
    'Halo',         // Indonesian/Malay
  ];
  
let currentLanguageIndex = 0;

function changeLanguage() {
    hello.textContent = languages[currentLanguageIndex];
    currentLanguageIndex = (currentLanguageIndex + 1) % languages.length;
  }

  setInterval(changeLanguage, 250);

animateHello();