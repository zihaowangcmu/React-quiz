var quizQuestions = [
    {
        question: "This is a question, and the correct answer is set to \"D\" ",
        single: true,
        options: [
            {
                type: "A",
                content: "Good morning"
            },
            {
                type: "B",
                content: "How are you"
            },
            {
                type: "C",
                content: "Good Good Study"
            },
            {
                type: "D",
                content: "Day Day Up"
            }
        ],
        answer: "D",
    },
    {
        question: "Another multiple choices. Answer is \"C\" ",
        single: true,
        options: [
            {
                type: "A",
                content: "You can use the UIWebview class to embed web content in your app."
            },
            {
                type: "B",
                content: "webview.stringByEvaluatingJavaScriptFromString(\"Math.random()\")"
            },
            {
                type: "C",
                content: "I am correct answer!"
            },
            {
                type: "D",
                content: "jsbridge://methodName?param1=value1&param2=value2"
            }
        ],
        answer: "C",
    },
    {
        question: "Which cuisines are tasty?(All of them)",
        single: false,
        options: [
            {
                type: "A",
                content: "DongBei cuisine"
            },
            {
                type: "B",
                content: "Sichuan cuisine"
            },
            {
                type: "C",
                content: "Xiang cuisine"
            },
            {
                type: "D",
                content: "Yue cuisine"
            }
        ],
        answer: ["A", "B", "C", "D"],
    },
    {
        question: "Which dishes are delicious?(First 3)",
        single: false,
        options: [
            {
                type: "A",
                content: "Hot Pot"
            },
            {
                type: "B",
                content: "kebab"
            },
            {
                type: "C",
                content: "Bubble Tea"
            },
            {
                type: "D",
                content: "Computer"
            }
        ],
        answer: ["A", "B", "C", ""],
    }, 
  ];
  
export default quizQuestions;