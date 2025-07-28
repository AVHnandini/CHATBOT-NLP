import { Intent, CareerData } from '../types/chatbot';

export const careerIntents: Intent[] = [
  // Greetings & Basic
  {
    name: 'greeting',
    patterns: ['hi', 'hello', 'hey', 'hi there', 'good morning', 'good afternoon', 'good evening', 'greetings'],
    responses: [
      "Hi there! Welcome to CareerBot! I'm here to help guide you through your career journey. Whether you're exploring career options, looking for internships, or need advice on resume building, I've got you covered! What would you like to explore today?",
      "Good morning! I'm your career guidance assistant. I can help you with career exploration, internship opportunities, college admissions, resume building, and much more. How can I assist you today?",
      "Hello! Great to have you here! I'm CareerBot, your personal career counselor. I can provide guidance on everything from choosing the right career path to acing interviews. What's on your mind?"
    ],
    category: 'greeting'
  },
  {
    name: 'good_morning',
    patterns: ['good morning', 'morning', 'gm'],
    responses: [
      "Good morning! Hope you're having a wonderful start to your day! I'm here to help you plan an even better future. What career goals would you like to work on today?",
      "Good morning! Ready to take on the day and your career? I'm here to help with any questions about your professional journey!"
    ],
    category: 'greeting'
  },

  // Career Exploration - Holland Code & MBTI
  {
    name: 'career_exploration',
    patterns: ['career options', 'what career should i choose', 'career guidance', 'career path', 'holland code', 'mbti career', 'personality career match'],
    responses: [
      "**Career Exploration Guide**\n\n**Holland Code Assessment:**\n• **Realistic (R)** - Engineering, IT, Healthcare\n• **Investigative (I)** - Research, Data Science, Medicine\n• **Artistic (A)** - Design, Media, Creative Writing\n• **Social (S)** - Teaching, Counseling, HR\n• **Enterprising (E)** - Business, Sales, Leadership\n• **Conventional (C)** - Finance, Administration, Analysis\n\n**Trending Domains 2024:**\n• AI/ML Engineering (8-25L salary range)\n• Data Science (6-20L salary range)\n• Cybersecurity (7-18L salary range)\n• Cloud Computing (8-22L salary range)\n• Sustainable Technology (6-15L salary range)\n\n**Government vs Private:**\n• **Government**: Job security, work-life balance, pension\n• **Private**: Higher salary potential, faster growth, innovation\n\nTake a quick Holland Code test at 16personalities.com! What interests you most?"
    ],
    category: 'career_exploration'
  },

  // Courses & Education
  {
    name: 'courses_education',
    patterns: ['what course should i take', 'undergraduate courses', 'postgraduate', 'best courses', 'course recommendations', 'degree options'],
    responses: [
      "**Course and Education Recommendations**\n\n**Undergraduate (UG) Hot Picks:**\n• Computer Science and AI (High demand)\n• Data Science and Analytics\n• Biotechnology and Bioengineering\n• Environmental Science\n• Digital Marketing and Communication\n\n**Postgraduate (PG) Trending:**\n• MBA (Finance/Tech) - 10-50L packages\n• MS in AI/ML - Global opportunities\n• Data Analytics/Business Analytics\n• Cyber Security Specialization\n• Digital Health Management\n\n**Certifications Worth Gold:**\n• AWS Cloud Practitioner\n• Google Data Analytics\n• Microsoft Azure Fundamentals\n• Salesforce Admin\n• Digital Marketing (Google/Meta)\n\n**Entrance Exams:**\n• JEE Main/Advanced, NEET, CLAT\n• CAT, XAT, SNAP (MBA)\n• GATE (M.Tech), JAM (MSc)\n\nWhat field interests you most?"
    ],
    category: 'education'
  },

  // Enhanced Skill Development
  {
    name: 'skill_development',
    patterns: ['skills needed', 'technical skills', 'soft skills', 'skill development', 'what skills to learn', 'programming skills'],
    responses: [
      "**Enhanced Skill Development Guide**\n\n**Tech Domain Skills:**\n• **Software**: Python, React, Node.js, Cloud (AWS/Azure)\n• **Data Science**: Python, SQL, Tableau, Machine Learning\n• **Cybersecurity**: Ethical Hacking, Network Security, SIEM\n• **Digital Marketing**: SEO/SEM, Analytics, Social Media\n\n**Universal Soft Skills:**\n• Communication and Presentation\n• Critical Thinking and Problem Solving\n• Leadership and Team Management\n• Time Management and Adaptability\n\n**Top Learning Platforms:**\n• **Free**: Coursera, edX, Khan Academy, YouTube\n• **Paid**: Udemy, Pluralsight, LinkedIn Learning\n• **Coding**: LeetCode, HackerRank, CodeWars\n• **Industry**: AWS Training, Google Skillshop\n\n**Skill Development Timeline:**\n• **Basic Proficiency**: 3-6 months\n• **Job-Ready**: 6-12 months\n• **Expert Level**: 2-3 years\n\nWhich domain skills would you like to focus on?"
    ],
    category: 'skills'
  },

  // Resume & Interview Prep
  {
    name: 'resume_building',
    patterns: ['resume help', 'cv writing', 'resume tips', 'how to write resume', 'resume format', 'interview preparation'],
    responses: [
      "**Resume and Interview Mastery**\n\n**ATS-Optimized Resume Tips:**\n• Use keywords from job descriptions (60-80% match)\n• Simple formatting, no graphics/tables\n• Action verbs: Led, Developed, Achieved, Optimized\n• Quantify achievements: 'Increased efficiency by 30%'\n\n**Resume Structure:**\n1. **Contact Info** + LinkedIn/GitHub\n2. **Professional Summary** (3-4 lines)\n3. **Skills** (Technical + Soft)\n4. **Experience** (Reverse chronological)\n5. **Education** + Certifications\n6. **Projects** (2-3 relevant ones)\n\n**LinkedIn Profile Optimization:**\n• Professional headshot\n• Compelling headline with keywords\n• 3-5 recommendations\n• Active posting and networking\n\n**Interview Preparation:**\n• **STAR Method** for behavioral questions\n• **Technical Practice**: LeetCode, system design\n• **Company Research**: Values, recent news, competitors\n• **Questions to Ask**: Growth opportunities, team culture\n\n**Mock Interview Platforms:**\n• Pramp, InterviewBit, CodeSignal\n\nNeed help with a specific section?"
    ],
    category: 'resume'
  },

  // Exams & Certifications
  {
    name: 'competitive_exams',
    patterns: ['jee preparation', 'neet exam', 'upsc', 'cat exam', 'gate exam', 'competitive exams', 'entrance exam tips'],
    responses: [
      "**Exams and Certifications Roadmap**\n\n**Engineering Entrance:**\n• **JEE Main/Advanced**: Physics, Chemistry, Math focus\n• **State CETs**: Regional engineering colleges\n• **BITSAT, VITEEE**: University-specific\n\n**Medical Entrance:**\n• **NEET**: Biology, Chemistry, Physics\n• **AIIMS, JIPMER**: Additional preparation\n\n**MBA Entrance:**\n• **CAT**: Quant, VARC, DILR (99%ile = IIMs)\n• **XAT, SNAP, IIFT**: Backup options\n\n**Government Jobs:**\n• **UPSC**: Civil Services (IAS/IPS)\n• **SSC**: Banking, Railways, Defense\n• **State PSCs**: Regional opportunities\n\n**Tech Certifications:**\n• **AWS**: Solutions Architect (12-25L boost)\n• **Google Cloud**: Professional Cloud Architect\n• **Microsoft**: Azure Developer Associate\n• **Cisco**: CCNA/CCNP for networking\n\n**Study Timeline:**\n• **Engineering/Medical**: 2 years dedicated prep\n• **MBA**: 8-12 months intensive\n• **UPSC**: 12-18 months minimum\n\nWhich exam are you targeting?"
    ],
    category: 'exams'
  },

  // Enhanced Job Search
  {
    name: 'job_search',
    patterns: ['job search', 'how to find jobs', 'job opportunities', 'job hunting tips', 'where to apply jobs'],
    responses: [
      "**Enhanced Job Search Strategy**\n\n**Industry-Specific Job Portals:**\n• **Tech**: AngelList, HackerEarth, Stack Overflow Jobs\n• **Finance**: Naukri, Indeed, Glassdoor\n• **Startups**: Internshala, Wellfound, Cutshort\n• **Government**: Sarkari Result, Govt Jobs\n\n**Networking Strategies:**\n• **LinkedIn**: Connect with alumni, industry professionals\n• **Tech Events**: Meetups, conferences, hackathons\n• **Alumni Networks**: College placement cells\n• **Professional Associations**: Domain-specific groups\n\n**Application Strategy:**\n• **Quality over Quantity**: 5-10 targeted applications/week\n• **Follow-up**: Polite reminder after 1 week\n• **Multiple Channels**: Direct application + referrals\n\n**Salary Negotiation:**\n• **Research**: Glassdoor, PayScale, AmbitionBox\n• **Wait for Offer**: Never negotiate before offer\n• **Consider Total Package**: Base + variable + benefits\n• **Market Rate**: Justify with industry standards\n\n**Timeline Expectations:**\n• **Freshers**: 2-4 months\n• **Experienced**: 1-3 months\n• **Senior Roles**: 3-6 months\n\nWhat's your target role?"
    ],
    category: 'job_search'
  },

  // Internship Opportunities
  {
    name: 'internships',
    patterns: ['internship', 'intern opportunities', 'summer internship', 'internship tips', 'how to get internship'],
    responses: [
      "**Internship Opportunities Hub**\n\n**Top Internship Platforms:**\n• **Internshala**: 50K+ opportunities across domains\n• **LetsIntern**: Startup-focused internships\n• **AngelList**: Tech startup internships\n• **LinkedIn**: Professional network-based\n• **Company Websites**: Direct applications\n\n**High-Value Internship Programs:**\n• **Google Summer of Code**: Open source (1.5L stipend)\n• **Microsoft Engage**: Product development\n• **Amazon SDE Intern**: 80K/month\n• **Goldman Sachs**: Finance internship\n• **Flipkart, Zomato**: Product management\n\n**Domain-Wise Opportunities:**\n• **Tech**: Software development, data analysis\n• **Finance**: Investment banking, financial analysis\n• **Marketing**: Digital marketing, content creation\n• **Research**: Academic institutions, R&D labs\n\n**Application Tips:**\n• **Apply Early**: 3-6 months before start date\n• **Portfolio Ready**: GitHub, Behance, Medium articles\n• **Skill Proof**: Certifications, projects\n• **Network**: Alumni, industry connections\n\n**Stipend Ranges:**\n• Tech: 15K-80K/month\n• Finance: 20K-60K/month\n• Startups: 5K-25K/month\n\nWhat domain interests you?"
    ],
    category: 'internships'
  },

  // Mentorship & Counseling
  {
    name: 'mentorship_counseling',
    patterns: ['mentorship', 'career counseling', 'stress management', 'time management', 'study planning', 'work life balance'],
    responses: [
      "**Mentorship and Mental Wellness Support**\n\n**Stress Management Techniques:**\n• **Pomodoro Technique**: 25-min focused study + 5-min break\n• **Mindfulness**: Headspace, Calm apps\n• **Exercise**: 30 minutes daily for mental clarity\n• **Sleep Hygiene**: 7-8 hours consistent sleep\n\n**Time Management Mastery:**\n• **Eisenhower Matrix**: Urgent vs Important tasks\n• **Time Blocking**: Dedicated slots for different activities\n• **Goal Setting**: SMART goals (Specific, Measurable, Achievable)\n• **Tools**: Notion, Todoist, Google Calendar\n\n**Study Planning Framework:**\n• **Active Learning**: Summarize, teach others\n• **Spaced Repetition**: Anki flashcards\n• **Mock Tests**: Weekly practice\n• **Breaks**: 15 minutes every 2 hours\n\n**Mental Health Resources:**\n• **Free Counseling**: Your college counseling center\n• **Online Therapy**: BetterHelp, Talkspace\n• **Helplines**: NIMHANS (080-26995000)\n• **Peer Support**: Study groups, accountability partners\n\n**Finding Mentors:**\n• **LinkedIn**: Industry professionals\n• **Alumni Networks**: College connections\n• **Professional Communities**: Reddit, Discord groups\n• **Industry Events**: Networking opportunities\n\nNeed specific help with stress or planning?"
    ],
    category: 'counseling'
  },

  // Enhanced Academics
  {
    name: 'academics_enhancement',
    patterns: ['scholarships', 'research opportunities', 'higher studies', 'phd', 'masters abroad', 'academic excellence'],
    responses: [
      "**Enhanced Academics and Research**\n\n**Scholarship Opportunities:**\n• **Merit-Based**: INSPIRE, Kishore Vaigyanik, DST\n• **International**: DAAD (Germany), Chevening (UK)\n• **Need-Based**: PM Scholarship, State scholarships\n• **Research**: CSIR-JRF, GATE fellowship\n\n**Research Opportunities:**\n• **Undergraduate**: SURGE, IAS Summer Fellowship\n• **Industry Collaboration**: Microsoft Research, Adobe\n• **Academic**: IITs, IISc summer programs\n• **International**: MITACS (Canada), OIST (Japan)\n\n**Higher Studies Preparation:**\n• **GRE/GMAT**: 6-month intensive prep\n• **IELTS/TOEFL**: English proficiency tests\n• **SOP Writing**: Statement of Purpose coaching\n• **LOR**: Letters of Recommendation strategy\n\n**Global Opportunities:**\n• **USA**: Stanford, MIT, Harvard (STEM focus)\n• **Germany**: TU Munich, RWTH Aachen (Free education)\n• **Canada**: University of Toronto, UBC\n• **UK**: Oxford, Cambridge, Imperial College\n\n**Funding Options:**\n• **Fulbright**: USA education funding\n• **Erasmus+**: European education programs\n• **Commonwealth**: UK scholarships\n• **University-specific**: Research assistantships\n\n**Timeline for MS Abroad:**\n• **1 year before**: GRE/TOEFL prep, university research\n• **8 months**: Applications, SOP, LORs\n• **6 months**: Scholarship applications\n• **3 months**: Visa preparation\n\nInterested in any specific region?"
    ],
    category: 'academics'
  },

  // Enhanced Project Ideas
  {
    name: 'project_ideas',
    patterns: ['project ideas', 'mini projects', 'capstone project', 'portfolio projects', 'coding projects'],
    responses: [
      "**Industry-Aligned Project Ideas**\n\n**Beginner Level (3-6 months experience):**\n• **Web Dev**: Personal portfolio, Todo app, Weather app\n• **Data Science**: COVID data analysis, Movie recommendation\n• **Mobile**: Calculator app, Notes app, QR scanner\n• **IoT**: Smart home automation, plant monitoring\n\n**Intermediate Level (6-12 months):**\n• **Full Stack**: E-commerce platform, Social media app\n• **ML/AI**: Chatbot, Image classification, Sentiment analysis\n• **Blockchain**: Cryptocurrency tracker, Smart contracts\n• **DevOps**: CI/CD pipeline, Docker containerization\n\n**Advanced Level (1+ years):**\n• **Enterprise**: Microservices architecture, Real-time chat\n• **AI/ML**: Computer vision, NLP models, Recommendation systems\n• **Research**: Open source contribution, Published paper\n• **Startup**: Market-ready product, Revenue generation\n\n**Industry-Specific Ideas:**\n• **FinTech**: Payment gateway, Trading bot, Budget tracker\n• **HealthTech**: Telemedicine app, Health monitoring\n• **EdTech**: Learning management system, Skill assessment\n• **GreenTech**: Carbon footprint tracker, Renewable energy optimizer\n\n**Project Success Tips:**\n• **GitHub**: Clean code, proper documentation\n• **Demo**: Live deployment (Heroku, Vercel)\n• **Impact**: Solve real problems, measure success\n• **Collaboration**: Team projects show teamwork\n\n**Showcase Platforms:**\n• **GitHub**: Code repository\n• **Behance**: Design projects\n• **Medium**: Technical writing\n• **YouTube**: Project demos\n\nWhat's your skill level and interest?"
    ],
    category: 'projects'
  },

  // Extra-curricular Activities
  {
    name: 'extracurricular',
    patterns: ['extracurricular activities', 'clubs', 'competitions', 'hackathons', 'volunteering'],
    responses: [
      "**Extra-curricular Excellence**\n\n**Technical Competitions:**\n• **Hackathons**: Smart India Hackathon, MLH events\n• **Coding**: ACM ICPC, CodeChef contests, Google Code Jam\n• **Innovation**: Maker fests, startup competitions\n• **Research**: Science olympiad, paper presentations\n\n**Leadership Opportunities:**\n• **Student Government**: Class representative, student council\n• **Club Leadership**: Tech clubs, cultural societies\n• **Event Management**: College festivals, workshops\n• **Peer Mentoring**: Teaching, tutoring programs\n\n**Community Service:**\n• **NGO Work**: Education, environment, health\n• **Teaching**: Underprivileged children, rural education\n• **Social Causes**: Clean-up drives, awareness campaigns\n• **Skill Sharing**: Free coding bootcamps, digital literacy\n\n**Professional Development:**\n• **Industry Events**: Tech conferences, startup meetups\n• **Certifications**: Online courses, professional workshops\n• **Networking**: LinkedIn engagement, alumni meetups\n• **Content Creation**: Blog writing, YouTube channel\n\n**Sports and Arts:**\n• **Team Sports**: Leadership, collaboration skills\n• **Individual Sports**: Discipline, goal achievement\n• **Creative Arts**: Innovation, self-expression\n• **Music/Dance**: Cultural appreciation, performance skills\n\n**Impact Measurement:**\n• **Quantify**: Led team of 20, raised 50K for charity\n• **Skills Gained**: Leadership, teamwork, communication\n• **Recognition**: Awards, certificates, media coverage\n• **Portfolio**: Document everything for applications\n\nWhat activities match your interests?"
    ],
    category: 'extracurricular'
  },

  // Government vs Private Jobs
  {
    name: 'govt_vs_private',
    patterns: ['government jobs', 'private jobs', 'govt vs private', 'which is better government or private', 'job security'],
    responses: [
      "**Government vs Private Jobs Analysis**\n\n**Government Jobs Advantages:**\n• **Job Security**: Permanent position, no layoffs\n• **Work-Life Balance**: Fixed hours, holidays\n• **Benefits**: Pension, medical, housing allowance\n• **Social Status**: Respect, authority in society\n• **Salary Growth**: Regular increments, promotions\n\n**Private Jobs Advantages:**\n• **Higher Salary**: Market-driven compensation\n• **Faster Growth**: Merit-based quick promotions\n• **Innovation**: Cutting-edge technology, learning\n• **Flexibility**: Remote work, flexible hours\n• **Global Exposure**: MNC opportunities, travel\n\n**Salary Comparison (Entry Level):**\n• **Government**: 3-8L (Grade Pay + Allowances)\n• **Private**: 3-15L (Performance-based)\n• **Government Growth**: 7-10% annual\n• **Private Growth**: 15-30% annual (early career)\n\n**Career Path Examples:**\n• **IAS Officer**: 56K/month to 2.5L/month (Secretary)\n• **Software Engineer**: 5L to 50L+ (10+ years)\n• **Bank Officer**: 4L to 15L (Branch Manager)\n• **Private Banking**: 6L to 1Cr+ (VP level)\n\n**Decision Framework:**\n• **Choose Government If**: Security-focused, social impact, stable life\n• **Choose Private If**: Growth-focused, high earning potential, innovation\n• **Hybrid Approach**: Start private then switch to government later\n\nWhat matters most to you: security or growth?"
    ],
    category: 'career_comparison'
  }
];

export const careerData: CareerData[] = [
  {
    domain: "Software Engineering",
    description: "Design, develop, and maintain software applications",
    skills: ["Programming", "Problem Solving", "System Design", "Testing"],
    salaryRange: "4-50L per year",
    growth: "25% annually",
    companies: ["Google", "Microsoft", "Amazon", "Meta", "Apple"]
  },
  {
    domain: "Data Science",
    description: "Extract insights from data using statistical and ML techniques",
    skills: ["Python/R", "Statistics", "Machine Learning", "Data Visualization"],
    salaryRange: "6-40L per year",
    growth: "22% annually",
    companies: ["Netflix", "Uber", "PayPal", "Airbnb", "LinkedIn"]
  },
  {
    domain: "Cybersecurity",
    description: "Protect systems and networks from digital attacks",
    skills: ["Network Security", "Ethical Hacking", "Risk Assessment", "Compliance"],
    salaryRange: "5-35L per year",
    growth: "32% annually",
    companies: ["IBM", "Cisco", "Palo Alto", "CrowdStrike", "FireEye"]
  }
];

export const quickResponses = [
  "Tell me about career options",
  "How do I build a good resume?",
  "What are the best internship opportunities?",
  "Guide me for competitive exams",
  "Suggest some project ideas",
  "Help with interview preparation"
];