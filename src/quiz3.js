export const quiz3 =  {
    // "quizTitle": "React Quiz Component Demo",
    "quizSynopsis": `Bine ați venit la testul nostru cu un singur răspuns corect pentru materia matematică. Acest test vă va ajuta să vă evaluați cunoștințele și să demonstrați înțelegerea dumneavoastră în această materie.

    Testul conține o serie de întrebări, iar la fiecare întrebare veți avea mai multe opțiuni de răspuns. Alegeți cu atenție varianta corectă, cea care se potrivește cel mai bine cu întrebarea prezentată.
    
    Cititi cu atenție fiecare întrebare și analizați toate opțiunile înainte de a selecta răspunsul final. Răspunsurile trebuie să fie precise și complete, iar răspunsul corect este unul singur.
    
    Rezolvați testul într-un mediu liniștit și fără distragere pentru a vă putea concentra adecvat. După finalizarea testului, veți primi rezultatele și veți putea evalua nivelul cunoștințelor dumneavoastră în materia [numele materiei].
    
    Succes în rezolvarea testului și sperăm că vă va ajuta să vă consolidați cunoștințele în materia matematică!`,
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
        "question": "Suma unghiurilor dintr-un triunghi este egală cu:__ grade?",
        "questionType": "text",
        // "questionPic": "https://dummyimage.com/600x400/000/fff&text=X", // if you need to display Picture in Question
        "answerSelectionType": "single",
        "answers": [
          "180",
          "360",
          "270",
          "90"
        ],
        "correctAnswer": "1",
        "messageForCorrectAnswer": "Correct answer. Good job.",
        "messageForIncorrectAnswer": "Incorrect answer. Please try again.",
        "explanation": "PROPRIETATE: În orice triunghi, suma măsurilor unghiurilor este egală cu 180º",
        "point": "20"
      },
      {
        "question": "Cum se numește unghiul cu măsura egală cu 90 grade?",
        "questionType": "text",
        // "questionPic": "https://dummyimage.com/600x400/000/fff&text=X", // if you need to display Picture in Question
        "answerSelectionType": "single",
        "answers": [
          "obtuz",
          "cerc",
          "dreptunghic",
          "cub"
        ],
        "correctAnswer": "3",
        "messageForCorrectAnswer": "Correct answer. Good job.",
        "messageForIncorrectAnswer": "Incorrect answer. Please try again.",
        "explanation": "Într-un triunghi în care 2 laturi sunt perpendiculare se numește dreptunghic",
        "point": "20"
      },
      {
        "question": "Care este denumirea triunghiului cu toate laturile egale?",
        "questionType": "text",
        "answerSelectionType": "single",
        "answers": [
          "isoscel",
          "patrat",
          "echilateral",
          "dreptunghic",
        ],
        "correctAnswer": "3",
        "messageForCorrectAnswer": "Correct answer. Good job.",
        "messageForIncorrectAnswer": "Incorrect answer. Please try again.",
        "explanation": "Proprietate: înttr-un triunghi în are unghiurile și laturile sunt egale între ele se numește triunghi echilateral. ",
        "point": "20"
      },
      {
        "question": "Produsul 17 x 5 eeste egal cu:?",
        "questionType": "text",
        // "questionPic": "https://dummyimage.com/600x400/000/fff&text=X", // if you need to display Picture in Question
        "answerSelectionType": "single",
        "answers": [
          "35",
          "42",
          "85",
          "50"
        ],
        "correctAnswer": "3",
        "messageForCorrectAnswer": "Correct answer. Good job.",
        "messageForIncorrectAnswer": "Incorrect answer. Please try again.",
        "explanation": "17 înmulțit de 5 ori este egal cu 85.",
        "point": "20"
      },
      {
        "question": "Ecuația 3x + 2 = 14, este de  gradul?",
        "questionType": "text",
        // "questionPic": "https://dummyimage.com/600x400/000/fff&text=X", // if you need to display Picture in Question
        "answerSelectionType": "single",
        "answers": [
          "nu are grad",
          "I",
          "II",
          "50"
        ],
        "correctAnswer": "2",
        "messageForCorrectAnswer": "Correct answer. Good job.",
        "messageForIncorrectAnswer": "Incorrect answer. Please try again.",
        "explanation": "Ecuația în care avem o singură necunoscută se numește ecuațir de gradul întâi",
        "point": "20"
      },
     
    ]
  } 