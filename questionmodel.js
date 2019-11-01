// Require mongoose package to communicate with MongoDB
const mongoose = require("mongoose");

// Connect with locally running MongoDB
mongoose
  .connect("mongodb://localhost/kootter")
  .then(() => console.log("MongoDB connected..."))
  .catch(err => console.error("Could not connect to MongoDB...", err));

// Defining schema in mongoose for required collections
const questionSchema = new mongoose.Schema(
  {
    question: {
      type: String,
      required: true
    },
    answer: {
      type: String,
      required: true
    },
    type: {
      type: String,
      required: true,
      enum: ["multiple-choice"]
    },
    options: [
      {
        option: {
          type: String,
          required: true
        },
        isAnswer: {
          type: Boolean,
          required: true
        }
      }
    ]
  },
  { collection: "question" }
);

// Create Question model class using questionSchema
const Question = mongoose.model("Question", questionSchema);

// Create new question
async function createQuestion() {
  const question = new Question({
    //question: "What is the color of Apple",
    answer: "Red",
    type: "multiple-choice",
    options: [
      {
        option: "Orange",
        isAnswer: false
      },
      {
        option: "Red",
        isAnswer: true
      },
      {
        option: "Yellow",
        isAnswer: false
      },
      {
        option: "Black",
        isAnswer: false
      }
    ]
  });

  try {
    // A valid question is saved
    const result = await question.save();
    console.log(result);
  } catch (ex) {
    // Invalid question raises exception
    console.log(ex.message);
  }
}

async function getQuestions() {
  const questions = await Question.find().limit(10);
  console.log(questions);
}

async function updateCourse(id) {
  const question = await Question.findById(id);
  question.question = "What is the color of Apple?";
  const result = await question.save();
  console.log(result);
}

async function removeQuestion(id) {
  const question = await Question.findById(id);
  const result = await question.remove();
  console.log(result);
}

createQuestion();
