import { Intent, Message } from '../types/chatbot';
import { careerIntents } from '../data/careerIntents';

export class ChatbotEngine {
  private intents: Intent[];
  private userContext: any = {};

  constructor() {
    this.intents = careerIntents;
  }

  // Simple NLP-like intent matching
  private matchIntent(userInput: string): Intent | null {
    const input = userInput.toLowerCase().trim();
    
    // Calculate similarity scores for each intent
    let bestMatch: { intent: Intent; score: number } = { intent: this.intents[0], score: 0 };
    
    for (const intent of this.intents) {
      let score = 0;
      
      for (const pattern of intent.patterns) {
        const patternWords = pattern.toLowerCase().split(' ');
        const inputWords = input.split(' ');
        
        // Calculate word overlap
        const overlap = patternWords.filter(word => 
          inputWords.some(inputWord => 
            inputWord.includes(word) || word.includes(inputWord)
          )
        ).length;
        
        // Bonus for exact matches
        if (input.includes(pattern.toLowerCase())) {
          score += 10;
        }
        
        // Bonus for word overlap
        score += overlap * 2;
        
        // Bonus for similar length
        if (Math.abs(pattern.length - input.length) < 5) {
          score += 1;
        }
      }
      
      if (score > bestMatch.score) {
        bestMatch = { intent, score };
      }
    }
    
    // Return intent only if confidence is above threshold
    return bestMatch.score > 2 ? bestMatch.intent : null;
  }

  // Enhanced entity extraction
  private extractEntities(input: string): { [key: string]: any } {
    const entities: { [key: string]: any } = {};
    
    // Extract common entities
    const namePattern = /my name is (\w+)|i'm (\w+)|i am (\w+)/i;
    const nameMatch = input.match(namePattern);
    if (nameMatch) {
      entities.name = nameMatch[1] || nameMatch[2] || nameMatch[3];
    }
    
    // Extract education level
    const educationPattern = /(?:12th|bachelor|master|phd|undergraduate|graduate|college|school)/i;
    if (educationPattern.test(input)) {
      entities.educationLevel = input.match(educationPattern)?.[0];
    }
    
    // Extract domain interests
    const domains = ['software', 'data science', 'finance', 'marketing', 'design', 'medicine', 'engineering'];
    entities.interests = domains.filter(domain => 
      input.toLowerCase().includes(domain)
    );
    
    return entities;
  }

  // Get time-based greeting
  private getTimeBasedGreeting(): string {
    const hour = new Date().getHours();
    if (hour < 12) return "Good morning! ☀️";
    if (hour < 17) return "Good afternoon! 🌞";
    return "Good evening! 🌆";
  }

  // Generate contextual response
  public generateResponse(userInput: string): string {
    // Handle greetings with time awareness
    if (/good morning|morning|gm/i.test(userInput)) {
      return "Good morning! Hope you're having a wonderful start to your day! I'm here to help you plan an even better future. What career goals would you like to work on today?";
    }
    
    if (/good afternoon/i.test(userInput)) {
      return "Good afternoon! Perfect time to think about your career goals! How can I assist you in shaping your professional future?";
    }
    
    if (/good evening/i.test(userInput)) {
      return "Good evening! Great time to reflect on your career journey. What would you like to explore tonight?";
    }

    // Extract entities and update context
    const entities = this.extractEntities(userInput);
    this.userContext = { ...this.userContext, ...entities };

    // Find matching intent
    const matchedIntent = this.matchIntent(userInput);
    
    if (matchedIntent) {
      const responses = matchedIntent.responses;
      let response = responses[Math.floor(Math.random() * responses.length)];
      
      // Personalize response if we have user context
      if (this.userContext.name) {
        response = response.replace(/Hi there!/g, `Hi ${this.userContext.name}!`);
      }
      
      return response;
    }

    // Enhanced fallback responses with helpful suggestions
    const fallbackResponses = [
      "I'd love to help you with that! While I'm learning about your specific question, here are some popular topics I can assist with:\n\n• **Career Exploration** - Find your ideal career path\n• **Skill Development** - Technical and soft skills guidance\n• **Resume Building** - ATS-optimized resume tips\n• **Interview Prep** - Mock interviews and tips\n• **Internship Opportunities** - Best platforms and strategies\n• **Competitive Exams** - JEE, NEET, CAT, UPSC guidance\n• **Project Ideas** - Industry-aligned projects\n\nWhat interests you most?",
      
      "That's an interesting question! I'm constantly learning to better help students like you. In the meantime, I can provide excellent guidance on:\n\n**Popular Career Topics:**\n• Software Engineering and Tech careers\n• Data Science and Analytics\n• Business and Finance opportunities\n• Government vs Private job analysis\n• Study abroad programs\n• Scholarship opportunities\n\nTry asking about any of these topics!",
      
      "Great question! While I work on understanding that better, here's what I'm really good at helping with:\n\n**Career Guidance Specialties:**\n• Choosing the right career path\n• Building impressive resumes\n• Finding internships and jobs\n• Preparing for interviews\n• Academic and research opportunities\n• Time management and study planning\n\nWhat would you like to explore first?"
    ];
    
    return fallbackResponses[Math.floor(Math.random() * fallbackResponses.length)];
  }

  // Get conversation starters
  public getConversationStarters(): string[] {
    return [
      "What career options suit my interests?",
      "How do I build an ATS-optimized resume?",
      "Tell me about internship opportunities",
      "Guide me for competitive exam preparation",
      "What skills should I learn for tech careers?",
      "Suggest some industry-aligned project ideas"
    ];
  }

  // Get user context
  public getUserContext() {
    return this.userContext;
  }

  // Reset conversation
  public resetContext() {
    this.userContext = {};
  }
}