//Game  WWho Wants to be a Millionaire
//library for user input
import readlineSync from 'readline-sync';

const questions = [
    {
        question: 'What is the capital of Germany?',
        options: ['A:New York', 'B:Paris', 'C:London', 'D:Berlin'],
        answer: 'D:Berlin'
    },
    {
        question: 'Which Planet is known as the Red Planet?',
        options: ['A:Jupiter', 'B:Venus', 'C:Mercury', 'D:Mars'],
        answer: 'D:Mars'
    },
    {
        question: 'Who painted the Mona Lisa ?',
        options: ['A: Vincent van Gogh', 'B:Leonardo da Vinci', 'C:Pablo Picasso', 'D:Michelangelo'],
        answer: 'B:Leonardo da Vinci'
    },
    {
        question: 'Who wrote Romeo and Juliet?',
        options: ['A:Charles Dickens', 'B:Jane Austen', 'C:William Shakespeare', 'D:Mark Twain'],
        answer: 'C:William Shakespeare'
    },
    {
        question: 'What is the largest mammal in the world?',
        options: ['A:Elephant', 'B:Blue Whale', 'C:Giraffe', 'D:Gorilla'],
        answer: 'B:Blue Whale'
    },
    {
        question: 'Who was the first man on the moon?',
        options: ['A:Buzz Aldrin', 'B:Yuri Gagarin', 'C:Neil Armstrong', 'D:John Glenn'],
        answer: 'C:Neil Armstrong'
    },
    {
        question: 'Which country is known as the Land of the Rising Sun?',
        options: ['A:China', 'B:Japan', 'C:Korea', 'D:Vietnam'],
        answer: 'B:Japan'
    },
    {
        question: 'Which is the largest continent in the world?',
        options: ['A:Asia', 'B:Europe', 'C:North America', 'D:Australia'],
        answer: 'A:Asia'
    },
    {
        question: 'Which is the largest ocean in the world?',
        options: ['A:Indian Ocean', 'B:Atlantic Ocean', 'C:Arctic Ocean', 'D:Pacific Ocean'],
        answer: 'D:Pacific Ocean'
    },
    {
        question: 'Which is the longest river in the world?',
        options: ['A:Amazon River', 'B:Yangtze River', 'C:Nile River', 'D:Mississippi River'],
        answer: 'C:Nile River'
    },
    {
        question: 'Which movie won the Oscar for Best Picture in 2020?',
        options: ['A:1917', 'B:Joker', 'C:Parasite', 'D:Once Upon a Time in Hollywood'],
        answer: 'C:Parasite'
    },
    {
        question: 'Which element has the chemical symbol O?',
        options: ['A:Gold', 'B:Oxygen', 'C:Silver', 'D:Iron'],
        answer: 'B:Oxygen'
    },
    {
        question: 'Which organ produces insulin?',
        options: ['A:Liver', 'B:Kidney', 'C:Pancreas', 'D:Spleen'],
        answer: 'C:Pancreas'
    },
    {
        question: 'Which is the largest flower in the world?',
        options: ['A:Sunflower', 'B:Rose', 'C:Orchid', 'D:Rafflesia'],
        answer: 'D:Rafflesia'
    },
    {
        question: 'Which is the largest tree in the world?',
        options: ['A:Redwood', 'B:Oak', 'C:Maple', 'D:Pine'],
        answer: 'A:Redwood'
    },
    {
        question: 'Who invented the light bulb?',
        options: ['A:Nikola Tesla', 'B:Thomas Edison', 'C:Alexander Graham Bell', 'D:Benjamin Franklin'],
        answer: 'B:Thomas Edison'
    },
    {
        question: 'Which is the largest moon in the solar system?',
        options: ['A:Ganymede', 'B:Callisto', 'C:Europa', 'D:Io'],
        answer: 'A:Ganymede'
    },
    {
        question: 'Which is the largest mountain in the world?',
        options: ['A:Mount Everest', 'B:K2', 'C:Kangchenjunga', 'D:Lhotse'],
        answer: 'A:Mount Everest'
    },
    {
        question: 'Which is the largest lake in the world?',
        options: ['A:Superior', 'B:Victoria', 'C:Michigan', 'D:Caspian Sea'],
        answer: 'A:Superior'
    },
    {
        question: 'Which is the largest island in the world?',
        options: ['A:Greenland', 'B:New Guinea', 'C:Borneo', 'D:Madagascar'],
        answer: 'A:Greenland'
    }
]

const moneyLevels = [100, 200, 300, 500, 1000, 2000, 4000, 8000, 16000, 32000, 64000, 125000, 250000, 500000, 1000000];

// Game function
function playGame() {
    let currentMoney = 0;
    let safetyNet = 0;
    let fiftyFiftyUsed = false;
    let audiencePollUsed = false;

    console.log('Welcome to Who Wants to be a Millionaire!');

    for(let i = 0; i < questions.length; i++) {
       console.log(`\nQuestion ${i + 1} for ${moneyLevels[i]} Dollar$:`);
       let result = askQuestion(questions[i], fiftyFiftyUsed, audiencePollUsed);

       if(result === 'fifty-fifty') {
           fiftyFiftyUsed = true;
           i--;
           continue;
       } else if(result === 'audience-poll') {
           audiencePollUsed = true;
           i--;
           continue;
       } else if(result === true) {
           currentMoney = moneyLevels[i];
           console.log(`Correct! You now have ${currentMoney} Dollar$.`);
           if (i === 4 || i === 9) { // Set safety net at $1,000 and $32,000
               safetyNet = currentMoney;
           }
       } else {
           console.log(`Unfortunately wrong. You go home with ${safetyNet} Dollar$.`);
           return;
       }
       
       if (i < questions.length - 1) {
           const continuePlay = readlineSync.keyInYNStrict("Would you like to continue playing?");
           if (!continuePlay) {
               console.log(`You take home ${currentMoney} Dollar$. Congratulations!`);
               return;
           }
       }
    }
    console.log('Congratulations! You have won 1 Million Dollar$!');
}

// Function to ask a question
function askQuestion(questionObj, fiftyFiftyUsed, audiencePollUsed) {
    console.log(questionObj.question);
    questionObj.options.forEach(option => console.log(option));

    if(!fiftyFiftyUsed || !audiencePollUsed) {
        console.log('Jokers available:');
        if(!fiftyFiftyUsed) console.log('F: 50-50 Joker');
        if(!audiencePollUsed) console.log('A: Audience Poll Joker');
    }

    const answer = readlineSync.question('Please enter your answer (A, B, C, D) or joker (F, A): ').toUpperCase();

    if(answer === 'F' && !fiftyFiftyUsed) {
        useFiftyFifty(questionObj);
        return 'fifty-fifty';
    } else if(answer === 'A' && !audiencePollUsed) {
        useAudiencePoll(questionObj);
        return 'audience-poll';
    }

    return answer === questionObj.answer.split(':')[0];
}

// 50:50 Joker
function useFiftyFifty(questionObj) {
    const correctAnswer = questionObj.answer.split(':')[0];
    const wrongOptions = questionObj.options.filter(option => !option.startsWith(correctAnswer));
    const removedOptions = wrongOptions.slice(0, 2);
    questionObj.options = questionObj.options.filter(option => !removedOptions.includes(option));
    console.log("50:50 Joker used. Two incorrect answers have been removed:");
    questionObj.options.forEach(option => console.log(option));
}

// Audience Poll Joker
function useAudiencePoll(questionObj) {
    console.log('The Audience has voted:');
    questionObj.options.forEach(option => {
        const letter = option.split(':')[0];
        const percentage = letter === questionObj.answer.split(':')[0] ? 
            Math.floor(Math.random() * 31) + 70 : // 70-100% for the correct answer
            Math.floor(Math.random() * 31); // 0-30% for wrong answers
        console.log(`${option}: ${percentage}%`);
    });
}

// Show rules
function showRules() {
    console.log("\n--- Game Rules ---");
    console.log("1. There are 15 questions with increasing prize money.");
    console.log("2. You have two safety nets: at $1,000 and $32,000.");
    console.log("3. You can quit at any time and take your current winnings.");
    console.log("4. You have two jokers: 50:50 and Audience Poll.");
    console.log("5. Good luck!\n");
}

function mainMenu() {
    while(true) {
        console.log('\n--- Who Wants to be a Millionaire ---');
        console.log('1. Play Game');
        console.log('2. Show Rules');
        console.log('3. Exit');
        const choice = readlineSync.keyIn('Please enter your choice: ', {limit: '$<1-3>'});

        switch(choice) {
            case '1':
                playGame();
                break;
            case '2':
                showRules();
                break;
            case '3':
                console.log('Goodbye!');
                return;
            default:
                console.log('Invalid input. Please try again.');
        }
    }
}

// Start the game
mainMenu();
