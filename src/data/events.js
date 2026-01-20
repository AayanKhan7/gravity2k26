export const EVENTS = [
  // =================================================================================
  // 1. PITCH PERFECT (Shark Tank)
  // =================================================================================
  {
    id: 'pitch-perfect',
    title: 'PITCH PERFECT',
    type: 'Startup Pitching (Shark Tank)',
    planetType: 'mercury',
    planetAccent: '#9e9e9e',
    path: '/pitch-perfect',
    description: "Pitch your startup vision to investors and secure funding for your empire. Domains: Fintech, HealthTech, Agri-Tech, Sustainable Solutions, & EdTech.",
    prizePool: 'Prize Money worth upto 1 Lakh', 
    registrationFee: '₹499 per team',
    teamSize: 'Up to 4 members',
    
    subEvents: [
      {
        title: "Pitch Perfect Main Event",
        description: "Present your business model to a panel of investors. Focus on innovation, feasibility, and market impact. (PPT Deadline: 18th Feb).",
        image: "/assets/images/pitchperfect.png", 
        fee: "₹499 / Team",
        date: "20 Feb 2026",
        rounds: "PPT Submission -> Final Pitch",
        prize: "Prize Money worth upto 1 Lakh",
        
        // ✅ ADDED LINK
        registrationLink: "https://unstop.com/o/gsntyRz?lb=AQwcTKgS&utm_medium=Share&utm_source=virajbal36895&utm_campaign=Events",
        
        ruleBook: [
          {
            title: "Proposed Domains",
            points: [
              "1. Fintech and E-commerce",
              "2. Health and BioTech",
              "3. Agri-Tech & Rural Empowerment",
              "4. Sustainable solutions and smart cities",
              "5. Skills and Edtech"
            ]
          },
          {
            title: "General Rules",
            points: [
              "Team Size: Upto 4 participants per team. Cross-department teams allowed.",
              "Domain Selection: Teams must choose one domain at registration.",
              "Originality: Ideas must be original. Plagiarism leads to disqualification.",
              "Pitch Format: 5-minute pitch + 3-minute Q&A.",
              "Prototype: Encouraged but not mandatory.",
              "Judges’ Decision: Final and binding."
            ]
          },
          {
            title: "Participation Guidelines",
            points: [
              "Structure: Problem Statement, Solution, Market/Users, Technology & Innovation, Revenue/Impact Model, Feasibility & Scalability, Ask.",
              "Note: Participants must submit a PowerPoint presentation of 8–10 slides only."
            ]
          },
          {
            title: "Evaluation Criteria (100 Marks)",
            points: [
              "Problem Identification – 15",
              "Innovation & Creativity – 20",
              "Feasibility & Practicality – 20",
              "Market/Impact Potential – 15",
              "Technology & Domain Relevance – 15",
              "Pitch Delivery & Q&A – 15",
              "Bonus Marks: Up to +5 for prototypes or validation."
            ]
          },
          {
            title: "Important Dates & Prizes",
            points: [
              "PPT Submission Deadline: 18/02/2026",
              "Event Date: 20th Feb",
              "Prize Money worth upto 1 Lakh"
            ]
          }
        ]
      }
    ]
  },

  // =================================================================================
  // 2. CINECLASH (Short Film)
  // =================================================================================
  {
    id: 'cineclash',
    title: 'CINECLASH',
    type: 'Short Film Competition',
    planetType: 'moon',
    planetAccent: '#cfcfcf',
    path: '/cineclash',
    description: "Direct, edit, and showcase your cinematic saga. A digital marketing–oriented competition to encourage storytelling and branding.",
    prizePool: 'Prize money worth upto 50k', 
    registrationFee: '₹499 per team',
    teamSize: 'Individual or Team',

    subEvents: [
      {
        title: "CineClash Competition",
        description: "Create a short film aligning with the theme. Round 1 focuses on promotion (trailer), Round 2 on content quality.",
        image: "/assets/images/cineclash.png", 
        fee: "₹499 / Team",
        date: "21 Feb 2026",
        rounds: "2 Rounds",
        prize: "Prize money worth upto 50k",

        // ✅ ADDED LINK
        registrationLink: "https://docs.google.com/forms/d/e/1FAIpQLSdyn4ewc8RtCQjE7nt-A35YJ7R9H90IxMPCS5cW1wCWrdLV1A/viewform?usp=header",

        ruleBook: [
          {
            title: "Event Objectives",
            points: [
              "To enhance students’ creativity and storytelling abilities.",
              "To provide practical exposure to digital marketing through film promotion.",
              "To encourage teamwork, planning, and execution skills."
            ]
          },
          {
            title: "Event Structure",
            points: [
              "Round 1 (Trailer): Submit a 1-minute trailer highlighting theme and concept. Focus on promotion and hook.",
              "Round 2 (Short Film): Submit complete film (5-15 mins). Evaluated on creativity, message, and technical quality.",
              "Final Day: On-Campus screening and results announcement."
            ]
          },
          {
            title: "Judging Criteria",
            points: [
              "Creativity and originality",
              "Storytelling and message clarity",
              "Technical quality (editing, sound, visuals)",
              "Digital marketing impact (appeal, engagement potential)"
            ]
          },
          {
            title: "Deadlines & Prizes",
            points: [
              "Round 1 Deadline: 8th Feb 2026",
              "Round 2 Deadline: 18th Feb 2026",
              "Event Date: 21st Feb",
              "Prize money worth upto 50k"
            ]
          }
        ]
      }
    ]
  },

  // =================================================================================
  // 3. THE QUADRANT (Technical)
  // =================================================================================
  {
    id: 'quadrant',
    title: 'THE QUADRANT',
    type: 'Technical Event',
    planetType: 'neptune',
    planetAccent: '#3f8cff',
    path: '/quadrant',
    description: "Engineer solutions and decode challenges. Choose your battlefield: Robotics, Coding, DevOps, or PharmaTech.",
    prizePool: 'Prize money worth upto 30k',
    registrationFee: 'Varies',
    teamSize: 'Varies',

    subEvents: [
      {
        title: "FrameForge (Robotics)",
        description: "Design a line-following vehicle with a modular cage. No glue/welding allowed—only mechanical locking.",
        image: "/assets/images/frameforge.png",
        fee: "₹200 / Team", 
        date: "20 Feb", 
        rounds: "Single Round Race",
        prize: "Prize money worth upto 30k",
        
        ruleBook: [
          {
            title: "Event Overview",
            points: [
              "Teams must design a line-following robotic vehicle with a modular cage.",
              "The cage must be built using provided Modular Truss Node Joints only.",
              "No pre-built chassis allowed."
            ]
          },
          {
            title: "Robot Constraints",
            points: [
              "Max Footprint: 20cm x 20cm",
              "Max Height: 12cm",
              "Must be self-contained and autonomous."
            ]
          },
          {
            title: "Modular Cage Rules",
            points: [
              "No glue, tape, welding, or permanent bonding.",
              "Only mechanical locking (fit/pinning) allowed.",
              "Teams can choose any geometry (not necessarily cubic)."
            ]
          },
          {
            title: "Electronics & Power",
            points: [
              "Any control logic (PID/Threshold) allowed.",
              "No wireless control allowed.",
              "Power source provided/approved by organizers."
            ]
          },
          {
            title: "Competition Format",
            points: [
              "Single Round Race: Fastest run wins.",
              "If payload drops, team must restart.",
              "Judges' decision is final."
            ]
          }
        ]
      },
      
      {
        title: "BUG 2 BUILD (Coding)",
        description: "Solve algorithmic challenges, debug fast, and compete against the best minds.",
        image: "/assets/images/bug2build.png",
        fee: "Free Registration",
        date: "20 Feb",
        rounds: "5 Rounds",
        prize: "Prize money worth upto 30k",
        ruleBook: [
          {
            title: "Event Overview",
            points: [
              "A team-based coding competition evaluating debugging, problem-solving, and collaboration.",
              "Format: Progressive rounds from bug fixing to collaborative solution building.",
              "Team Composition: Min 2, Max 4 members. No changes allowed after registration."
            ]
          },
          {
            title: "Round 1: Bug Fixing Challenge (Non-Elimination)",
            points: [
              "Duration: 45 Minutes.",
              "Objective: Identify and fix 3 major bugs (logical, runtime, or functional) in a provided GitHub repo.",
              "Evaluation: Correct identification and resolution of issues.",
              "Top performing teams gain a score advantage."
            ]
          },
          {
            title: "Round 2: Rapid-Fire Debugging (Elimination)",
            points: [
              "Duration: 30 Minutes.",
              "Objective: Solve 10 mini bug issues accurately and quickly.",
              "Evaluation: Number of solved issues, accuracy, and time efficiency.",
              "Only shortlisted teams proceed to the Final Round."
            ]
          },
          {
            title: "Round 3: Code Relay (Final Round)",
            points: [
              "Duration: 1 Hour.",
              "Objective: Build a complete solution collaboratively in a relay style.",
              "Format: 2 checkpoints, each completed by a unique member sequentially.",
              "Rules: No skipping checkpoints. Final submission must be a working solution.",
              "Evaluation: Functionality, code quality, handoffs, and team coordination."
            ]
          },
          {
            title: "General Rules",
            points: [
              "Strict adherence to time limits.",
              "No plagiarism, external assistance, or unauthorized tools.",
              "Disqualification for sharing solutions or misbehaving.",
              "Organizers' decisions are final."
            ]
          }
        ]
      },
      
      {
        title: "Infrathon (Model Making)",
        description: "Model Making building the best from everyday materials.",
        image: "/assets/images/infrathon.png",
        fee: "₹199 / Team",
        date: "20 Feb",
        rounds: "2 Rounds",
        prize: "Prize money worth upto 30k",
        ruleBook: [
          {
            title: "Event Details",
            points: [
              "Team Composition: 2-4 people",
              "Thrust Area: Creativity, Logic, Civil/Architecture knowledge."
            ]
          },
          {
            title: "Round Structure",
            points: [
              "Round 1 - Making skyscrapers from newspapers",
              "Round 2 - Bridge making, making the most endurable bridge."
            ]
          }
        ]
      },

      {
        title: "PHARMASPARK",
        description: "Pharmacy-focused model-making competition that encourages participants to design innovative solutions addressing real-world challenges in the pharmaceutical domain.",
        image: "/assets/images/pharmatech.png",
        fee: "₹250 / Team",
        date: "20 Feb",
        rounds: "Presentation",
        prize: "Prize money worth upto 30k",
        ruleBook: [
          {
            title: "Event Overview",
            points: [
              "Team Composition: Team of 2-4",
              "Theme: Participants are expected to create conceptual or working models that simplify, improve, or modernize processes within the pharmaceutical ecosystem."
            ]
          },
          {
            title: "Model Requirements",
            points: [
              "Models can be working or conceptual",
              "Solutions must be relevant to the pharmaceutical domain",
              "The idea should focus on practical application and feasibility",
              "Models should clearly demonstrate the problem–solution approach"
            ]
          },
          {
            title: "Evaluation Criteria",
            points: [
              "Innovation and creativity",
              "Relevance to pharmaceutical challenges",
              "Practical applicability and feasibility",
              "Clarity of explanation and presentation",
              "Overall impact of the solution"
            ]
          }
        ]
      }
    ]
  },

  // =================================================================================
  // 4. NEXUS (Gaming)
  // =================================================================================
  {
    id: 'nexus',
    title: 'NEXUS',
    type: 'Gaming Event',
    planetType: 'uranus',
    planetAccent: '#66d1c1',
    path: '/nexus',
    description: "Battle through virtual arenas in this high-intensity esports tournament. Prove your dominance.",
    prizePool: 'Prize money worth upto 15k',
    registrationFee: 'Varies',
    teamSize: 'Squad Based',

    subEvents: [
      {
        title: "BGMI",
        description: "Adrenaline-fueled battleground. Map toss determines side. Best of 1 elimination.",
        image: "/assets/images/bgmi.png",
        fee: "₹200 / Squad",
        date: "21 FEB",
        rounds: "Custom Match",
        prize: "Worth Upto 15k",
        // ✅ ADDED LINK
        registrationLink: "https://unstop.com/o/6DblX3j?lb=AQwcTKgS&utm_medium=Share&utm_source=virajbal36895&utm_campaign=Events",
        
        ruleBook: [
          {
            title: "Rules & Regulations",
            points: [
              "IGL must join WhatsApp group for updates.",
              "Abusive language results in immediate disqualification.",
              "Roster limit: 4 players. No substitutions.",
              "Decisions by event heads are final.",
              "If a player disconnects, match continues (5 min buffer for reconnect)."
            ]
          },
          {
            title: "Game Settings",
            points: [
              "Server: Mumbai",
              "Maps: Toss determines map/side",
              "Format: Best of 1 Elimination",
              "Mode: Tournament"
            ]
          }
        ]
      },
      {
        title: "Valorant",
        description: "5v5 Tactical Shooter. Team up, strategize, and dominate. Single match elimination.",
        image: "/assets/images/valorant.png",
        fee: "₹400 / Team",
        date: "21 FEB",
        rounds: "Single Match",
        prize: "Worth Upto 15k",
        // ✅ ADDED LINK
        registrationLink: "https://unstop.com/o/gsntyRz?lb=AQwcTKgS&utm_medium=Share&utm_source=virajbal36895&utm_campaign=Events",
        
        ruleBook: [
          {
            title: "Rules & Regulations",
            points: [
              "IGL must join WhatsApp group.",
              "Roster limit: 5 players. No substitutions.",
              "Abusive language = Disqualification.",
              "Buffer of 5 minutes for reconnection if disconnected.",
              "Party code shared 10 mins before event."
            ]
          },
          {
            title: "Game Settings",
            points: [
              "Server: Mumbai",
              "Maps: Toss decides map/side",
              "Format: Best of 1 Elimination",
              "Mode: Tournament"
            ]
          }
        ]
      },
      {
        title: "Free Fire",
        description: "Fast-paced survival shooter on mobile. Be the last squad standing. Knockout format.",
        image: "/assets/images/freefire.png",
        fee: "₹150 / Squad",
        date: "21 FEB",
        rounds: "Knockout",
        prize: "Worth Upto 15k",
        // ✅ ADDED LINK
        registrationLink: "https://unstop.com/o/b3gAD4V?utm_medium=Share&utm_source=virajbal36895&utm_campaign=Events",
        
        ruleBook: [
          {
            title: "Rules & Regulations",
            points: [
              "IGL must join WhatsApp group.",
              "Roster limit: 4 players.",
              "No abusive language allowed.",
              "Fair play policy strictly enforced."
            ]
          },
          {
            title: "Game Settings",
            points: [
              "Server: Mumbai",
              "Maps: Toss decides map/side",
              "All Skills: Allowed",
              "Format: Best of 1 Elimination"
            ]
          }
        ]
      }
    ]
  },
]