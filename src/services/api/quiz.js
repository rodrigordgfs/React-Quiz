import Service from './service'

class QuizService extends Service {
  constructor() {
    super({
      url: "quiz",
      config: {
        baseURL: "https://api-quiz.glitch.me",
      },
    });
  }
}

export default new QuizService();
