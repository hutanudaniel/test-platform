export const quiz2 =  {
    // "quizTitle": "React Quiz Component Demo",
    "quizSynopsis": `Bine ați venit la testul nostru cu un singur răspuns corect pentru materia istorie. Acest test vă va ajuta să vă evaluați cunoștințele și să demonstrați înțelegerea dumneavoastră în această materie.

    Testul conține o serie de întrebări, iar la fiecare întrebare veți avea mai multe opțiuni de răspuns. Alegeți cu atenție varianta corectă, cea care se potrivește cel mai bine cu întrebarea prezentată.
    
    Cititi cu atenție fiecare întrebare și analizați toate opțiunile înainte de a selecta răspunsul final. Răspunsurile trebuie să fie precise și complete, iar răspunsul corect este unul singur.
    
    Rezolvați testul într-un mediu liniștit și fără distragere pentru a vă putea concentra adecvat. După finalizarea testului, veți primi rezultatele și veți putea evalua nivelul cunoștințelor dumneavoastră în materia [numele materiei].
    
    Succes în rezolvarea testului și sperăm că vă va ajuta să vă consolidați cunoștințele în materia istorie!`,
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
        "question": "În ce an a intrat Romînia în Uniunea Europeană?",
        "questionType": "text",
        // "questionPic": "https://dummyimage.com/600x400/000/fff&text=X", // if you need to display Picture in Question
        "answerSelectionType": "single",
        "answers": [
          "2007",
          "2023",
          "1989",
          "2000"
        ],
        "correctAnswer": "1",
        "messageForCorrectAnswer": "Correct answer. Good job.",
        "messageForIncorrectAnswer": "Incorrect answer. Please try again.",
        "explanation": "La 1 ianuarie 2007, România a devenit stat membru al Uniunii Europene.",
        "point": "20"
      },
      {
        "question": "În ce  an  a intrat România în Primul Război Mondial?",
        "questionType": "text",
        // "questionPic": "https://dummyimage.com/600x400/000/fff&text=X", // if you need to display Picture in Question
        "answerSelectionType": "single",
        "answers": [
          "2008",
          "1916",
          "105",
          "1945"
        ],
        "correctAnswer": "2",
        "messageForCorrectAnswer": "Correct answer. Good job.",
        "messageForIncorrectAnswer": "Incorrect answer. Please try again.",
        "explanation": "Consiliul de Coroană care a hotărât intrarea României în război a avut loc în ziua de duminică, 14/27 august 1916, ora 11 dimineața, la Palatul Cotroceni.",
        "point": "20"
      },
      {
        "question": "Ce imperiu a cucerit Dacia?",
        "questionType": "text",
        "answerSelectionType": "single",
        "answers": [
          "Austro-Ungar",
          "Roman",
          "Mongol",
          "Britanic",
        ],
        "correctAnswer": "2",
        "messageForCorrectAnswer": "Correct answer. Good job.",
        "messageForIncorrectAnswer": "Incorrect answer. Please try again.",
        "explanation": "Dacia romană a fost o provincie romană după cucerirea Daciei de către Imperiul Roman sub conducerea lui Traian în 106 și a durat până în 271, deci un total de 165 de ani.",
        "point": "20"
      },
      {
        "question": "În ce an a avut loc revoluția în Romania?",
        "questionType": "text",
        // "questionPic": "https://dummyimage.com/600x400/000/fff&text=X", // if you need to display Picture in Question
        "answerSelectionType": "single",
        "answers": [
          "1989",
          "1843",
          "2002",
          "2021"
        ],
        "correctAnswer": "1",
        "messageForCorrectAnswer": "Correct answer. Good job.",
        "messageForIncorrectAnswer": "Incorrect answer. Please try again.",
        "explanation": "Revoluția Română din 1989 a fost o perioadă de proteste, lupte de stradă și demonstrații desfășurate în România, între 16 și 22 decembrie 1989 , făcând parte din șirul revoluțiilor de la 1989 din întreaga lume.",
        "point": "20"
      },
      {
        "question": "Care au fost principalele țări ale Puterii Axei în timpul celu de-al doilea război mondial?",
        "questionType": "text",
        // "questionPic": "https://dummyimage.com/600x400/000/fff&text=X", // if you need to display Picture in Question
        "answerSelectionType": "single",
        "answers": [
          "Canada, India, Moroc",
          "Germania, Japonia, Italia",
          "România, Anglia, Rusia",
          "China, SUA, Australia"
        ],
        "correctAnswer": "2",
        "messageForCorrectAnswer": "Correct answer. Good job.",
        "messageForIncorrectAnswer": "Incorrect answer. Please try again.",
        "explanation": "Cele trei puteri principale ale Axei au fost Germania Nazistă, Italia Fascistă și Japonia imperialistă, care se numeau ,,Axa Roma-Berlin-Tokyo.",
        "point": "20"
      },
    ]
  } 