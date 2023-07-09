export const quiz5 =  {
    // "quizTitle": "React Quiz Component Demo",
    "quizSynopsis": `Bine ați venit la testul nostru cu un singur răspuns corect pentru materia Limba și Literatura Română. Acest test vă va ajuta să vă evaluați cunoștințele și să demonstrați înțelegerea dumneavoastră în această materie.

    Testul conține o serie de întrebări, iar la fiecare întrebare veți avea mai multe opțiuni de răspuns. Alegeți cu atenție varianta corectă, cea care se potrivește cel mai bine cu întrebarea prezentată.
    
    Cititi cu atenție fiecare întrebare și analizați toate opțiunile înainte de a selecta răspunsul final. Răspunsurile trebuie să fie precise și complete, iar răspunsul corect este unul singur.
    
    Rezolvați testul într-un mediu liniștit și fără distragere pentru a vă putea concentra adecvat. După finalizarea testului, veți primi rezultatele și veți putea evalua nivelul cunoștințelor dumneavoastră în materia [numele materiei].
    
    Succes în rezolvarea testului și sperăm că vă va ajuta să vă consolidați cunoștințele în materia Limba și Literatura Română!`,
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
        "question": "Care este a doua vocală din alfabet?",
        "questionType": "text",
        // "questionPic": "https://dummyimage.com/600x400/000/fff&text=X", // if you need to display Picture in Question
        "answerSelectionType": "single",
        "answers": [
          "b",
          "i",
          "e",
          "o"
        ],
        "correctAnswer": "3",
        "messageForCorrectAnswer": "Correct answer. Good job.",
        "messageForIncorrectAnswer": "Incorrect answer. Please try again.",
        "explanation": "Vovalele în ordine alfabetică sunt: a, e, i, o, u",
        "point": "20"
      },
      {
        "question": "Cine a scris Ursul păcălit de vulpe?",
        "questionType": "text",
        // "questionPic": "https://dummyimage.com/600x400/000/fff&text=X", // if you need to display Picture in Question
        "answerSelectionType": "single",
        "answers": [
          "Ion Creangă",
          "Mihai Eminescu",
          "Ion Luca Caragiale",
          "Anton Pan"
        ],
        "correctAnswer": "3",
        "messageForCorrectAnswer": "Correct answer. Good job.",
        "messageForIncorrectAnswer": "Incorrect answer. Please try again.",
        "explanation": "Ursul păcălit de vulpe este una din cele mai populare opere ale lui Ion Creangă ",
        "point": "20"
      },
      {
        "question": "Care este forma de plural a substantivului aur?",
        "questionType": "text",
        "answerSelectionType": "single",
        "answers": [
          "aurii",
          "aur",
          "auriu",
          "aurie",
        ],
        "correctAnswer": "2",
        "messageForCorrectAnswer": "Correct answer. Good job.",
        "messageForIncorrectAnswer": "Incorrect answer. Please try again.",
        "explanation": "Substantivul aur nu are  forma de plural",
        "point": "20"
      },
      {
        "question": "Cum se numeste forma de comunicare dintre cel puțin două persoane?",
        "questionType": "text",
        "answerSelectionType": "single",
        "answers": [
          "monolog",
          "discurs",
          "dialog",
          "telefonul fără fir",
        ],
        "correctAnswer": "3",
        "messageForCorrectAnswer": "Correct answer. Good job.",
        "messageForIncorrectAnswer": "Incorrect answer. Please try again.",
        "explanation": "Dialogul este forma prin care două sau mai multe persoane comunică între ele",
        "point": "20"
      },
      {
        "question": "Ce fel de scriitor a fost Mihai Eminescu ?",
        "questionType": "text",
        "answerSelectionType": "single",
        "answers": [
          "dramaturg",
          "poet",
          "narator",
          "jurnalist",
        ],
        "correctAnswer": "2",
        "messageForCorrectAnswer": "Correct answer. Good job.",
        "messageForIncorrectAnswer": "Incorrect answer. Please try again.",
        "explanation": "Mihai Eminescu e fost unul dintre cei mai mari poeți din perioada marilor Clasici",
        "point": "20"
      },
      // {
      //   "question": "ReactJS is an MVC based framework?",
      //   "questionType": "text",
      //   "answerSelectionType": "single",
      //   "answers": [
      //     "True",
      //     "False"
      //   ],
      //   "correctAnswer": "2",
      //   "messageForCorrectAnswer": "Correct answer. Good job.",
      //   "messageForIncorrectAnswer": "Incorrect answer. Please try again.",
      //   "explanation": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      //   "point": "10"
      // },
      // {
      //   "question": "Which of the following concepts is/are key to ReactJS?",
      //   "questionType": "text",
      //   "answerSelectionType": "single",
      //   "answers": [
      //     "Component-oriented design",
      //     "Event delegation model",
      //     "Both of the above",
      //   ],
      //   "correctAnswer": "3",
      //   "messageForCorrectAnswer": "Correct answer. Good job.",
      //   "messageForIncorrectAnswer": "Incorrect answer. Please try again.",
      //   "explanation": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      //   "point": "30"
      // },
      // {
      //   "question": "Lorem ipsum dolor sit amet, consectetur adipiscing elit,",
      //   "questionType": "photo",
      //   "answerSelectionType": "single",
      //   "answers": [
      //     "https://dummyimage.com/600x400/000/fff&text=A",
      //     "https://dummyimage.com/600x400/000/fff&text=B",
      //     "https://dummyimage.com/600x400/000/fff&text=C",
      //     "https://dummyimage.com/600x400/000/fff&text=D"
      //   ],
      //   "correctAnswer": "1",
      //   "messageForCorrectAnswer": "Correct answer. Good job.",
      //   "messageForIncorrectAnswer": "Incorrect answer. Please try again.",
      //   "explanation": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      //   "point": "20"
      // },
      // {
      //   "question": "What are the advantages of React JS?",
      //   "questionType": "text",
      //   "answerSelectionType": "multiple",
      //   "answers": [
      //     "React can be used on client and as well as server side too",
      //     "Using React increases readability and makes maintainability easier. Component, Data patterns improves readability and thus makes it easier for manitaining larger apps",
      //     "React components have lifecycle events that fall into State/Property Updates",
      //     "React can be used with any other framework (Backbone.js, Angular.js) as it is only a view layer"
      //   ],
      //   "correctAnswer": [1, 2, 4],
      //   "messageForCorrectAnswer": "Correct answer. Good job.",
      //   "messageForIncorrectAnswer": "Incorrect answer. Please try again.",
      //   "explanation": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      //   "point": "20"
      // },
    ]
  } 