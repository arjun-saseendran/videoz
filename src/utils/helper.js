const nameList = [
  "Ava Reynolds",
  "Liam Carter",
  "Zoe Kim",
  "Noah Patel",
  "Maya Brooks",
  "Ethan Rivera",
  "Luna Thompson",
  "Oliver Chen",
  "Aria Lewis",
  "Caleb Watson",
  "Ivy Scott",
  "Leo Nguyen",
  "Hazel Bennett",
  "Julian Clark",
  "Ruby Torres",
  "Xavier Adams",
  "Ella Morgan",
  "Finn Parker",
  "Chloe Hall",
  "Asher James",
];

const messageList = [
    "Hey, how's it going?",
    "Don't forget the meeting at 3 PM.",
    "Just checking in!",
    "Can you review this when you have time?",
    "Thanks for your help earlier.",
    "I'll get back to you soon.",
    "Let's catch up later this week.",
    "Great job on the project!",
    "Is everything okay on your end?",
    "Looking forward to our call.",
    "I'll send the files shortly.",
    "Did you get my last message?",
    "Happy Friday!",
    "Let me know if you need anything.",
    "That sounds like a plan.",
    "We should reschedule.",
    "Appreciate the update.",
    "Can we move this to tomorrow?",
    "I'll handle it.",
    "Good morning!"
  ];
  

export const generateRandomNameList = () => {
  return nameList[Math.floor(Math.random() * nameList.length)];
};
export const generateRandomMessageList = () => {
  return messageList[Math.floor(Math.random() * messageList.length)];
};
