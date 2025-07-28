export interface Message {
  id: string;
  text: string;
  isBot: boolean;
  timestamp: Date;
  category?: string;
}

export interface Intent {
  name: string;
  patterns: string[];
  responses: string[];
  category: string;
  followUp?: string[];
}

export interface CareerData {
  domain: string;
  description: string;
  skills: string[];
  salaryRange: string;
  growth: string;
  companies: string[];
}

export interface ChatbotState {
  messages: Message[];
  isTyping: boolean;
  userContext: {
    name?: string;
    interests?: string[];
    currentLevel?: string;
    previousQuestions?: string[];
  };
}