export const quiz1 =  {
    // "quizTitle": "React Quiz Component Demo",
    "quizSynopsis": `Bine ați venit la testul nostru cu un singur răspuns corect pentru materia geografie. Acest test vă va ajuta să vă evaluați cunoștințele și să demonstrați înțelegerea dumneavoastră în această materie.

    Testul conține o serie de întrebări, iar la fiecare întrebare veți avea mai multe opțiuni de răspuns. Alegeți cu atenție varianta corectă, cea care se potrivește cel mai bine cu întrebarea prezentată.
    
    Cititi cu atenție fiecare întrebare și analizați toate opțiunile înainte de a selecta răspunsul final. Răspunsurile trebuie să fie precise și complete, iar răspunsul corect este unul singur.
    
    Rezolvați testul într-un mediu liniștit și fără distragere pentru a vă putea concentra adecvat. După finalizarea testului, veți primi rezultatele și veți putea evalua nivelul cunoștințelor dumneavoastră în materia [numele materiei].
    
    Succes în rezolvarea testului și sperăm că vă va ajuta să vă consolidați cunoștințele în materia geografie!`,
    "nrOfQuestions": "5",
    "appLocale": {
      "landingHeaderText": "Testul contine <questionLength> intrebari",
      "question": "Question",
      "startQuizBtn": "Incepe testul",
      "resultFilterAll": "All",
      "resultFilterCorrect": "Correct",
      "resultFilterIncorrect": "Incorrect",
      "prevQuestionBtn": "Prev",
      "nextQuestionBtn": "Next",
      "resultPageHeaderText": "You have completed the quiz. You got <correctIndexLength> out of <questionLength> questions."
    } ,
    "questions": [
      {
        "question": "Care este țara cu suprafața cea mai mare?",
        "questionType": "text",
        // "questionPic": "https://dummyimage.com/600x400/000/fff&text=X", // if you need to display Picture in Question
        "answerSelectionType": "single",
        "answers": [
          "China",
          "Brazilia",
          "Rusia",
          "Româmia"
        ],
        "correctAnswer": "3",
        "messageForCorrectAnswer": "Correct answer. Good job.",
        "messageForIncorrectAnswer": "Incorrect answer. Please try again.",
        "explanation": "Rusia este țara cu o suprafata de 17.125.200 km², fiind situată pe primul loc ca extindere. ",
        "point": "20"
      },
      {
        "question": "Care este cea mai populată țară din lume?",
        "questionType": "text",
        // "questionPic": "https://dummyimage.com/600x400/000/fff&text=X", // if you need to display Picture in Question
        "answerSelectionType": "single",
        "answers": [
          "India",
          "China",
          "Canada",
          "Spania"
        ],
        "correctAnswer": "2",
        "messageForCorrectAnswer": "Correct answer. Good job.",
        "messageForIncorrectAnswer": "Incorrect answer. Please try again.",
        "explanation": "China în 2021 după un studiu s-a estimat că are aproximativ 1,412 miliarde locuitori.",
        "point": "20"
      },
      {
        "question": "Care este cel mai înalt vârt din lumea?",
        "questionType": "text",
        "answerSelectionType": "single",
        "answers": [
          "Moldovanu",
          "Mont Blanc",
          "Denali",
          "Everest"
        ],
        "correctAnswer": "4",
        "messageForCorrectAnswer": "Correct answer. Good job.",
        "messageForIncorrectAnswer": "Incorrect answer. Please try again.",
        "explanation": "Vârful Everest este cel mai înalt punct de pe Pământ, cu o altitudine de 8848 m deasupra nivelului mării.",
        "point": "20"
      },
      {
        "question": "Ce țară are ca vecin România in partea de sud?",
        "questionType": "text",
        // "questionPic": "https://dummyimage.com/600x400/000/fff&text=X", // if you need to display Picture in Question
        "answerSelectionType": "single",
        "answers": [
          "Bulgaria",
          "Moldova",
          "Dunare",
          "Ucraina"
        ],
        "correctAnswer": "1",
        "messageForCorrectAnswer": "Correct answer. Good job.",
        "messageForIncorrectAnswer": "Incorrect answer. Please try again.",
        "explanation": "învecinează cu Bulgaria la sud, Serbia la sud-vest, Ungaria la nord-vest, Ucraina la nord și est și Republica Moldova la est, iar țărmul Mării Negre se găsește la sud-est.",
        "point": "20"
      },
      {
        "question": "Câte continente are globul pământesc?",
        "questionType": "text",
        // "questionPic": "https://dummyimage.com/600x400/000/fff&text=X", // if you need to display Picture in Question
        "answerSelectionType": "single",
        "answers": [
          "2",
          "9",
          "7",
          "10"
        ],
        "correctAnswer": "3",
        "messageForCorrectAnswer": "Correct answer. Good job.",
        "messageForIncorrectAnswer": "Incorrect answer. Please try again.",
        "explanation": "Continentele lumii sunt Asia, Africa, America de Nord, America de Sud, Antarctica, Europa, și Australia.",
        "point": "20"
      },
      
    ]
  } 