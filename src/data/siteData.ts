import { BookInfo, KeynoteInfo, QuizQuestion } from '../types';
import survivalCover from '../assets/images/regenesis_survival_cover_1784746793410.jpg';
import protocolCover from '../assets/images/regenesis_protocol_cover_1784746765106.jpg';
import blueprintCover from '../assets/images/regenesis_blueprint_cover_1784746779311.jpg';

export const BOOKS_DATA: BookInfo[] = [
  {
    id: 'survival-source-code',
    dropDate: '06-23-26',
    title: 'The SURVIVAL Source Code',
    subtitle: 'The Hidden Drivers of Identity and Behavior',
    tagline: 'Awareness: Decoding the Subconscious Hardware',
    description: 'Uncovers the deeply embedded biological mechanisms that govern risk tolerance, decision-making speed, and sub-conscious self-sabotage under severe market pressure.',
    chapters: [
      'Chapter 1: The Biology of Business Failure',
      'Chapter 2: Why Mindset is Software, Biology is Hardware',
      'Chapter 3: Decoding the Survival Operating System (SOS)',
      'Chapter 4: The 10 Lenses of Identity & Behavior',
      'Chapter 5: Unmasking Procrastination as Biological Protection'
    ],
    coverColor: 'from-[#3a200b] to-[#140b03]',
    coverImage: 'https://res.cloudinary.com/ew2ztpgz/image/upload/v1785187163/book_1.2_-_Copy_op3afs.png',
    amazonDropUrl: '#'
  },
  {
    id: 'regenesis-protocol',
    dropDate: '06-23-26',
    title: 'The REGENESIS Protocol',
    subtitle: "The Warrior's Guide to Neuro-Biological Evolution",
    tagline: 'Interruption: Overwriting Survival Conditioning',
    description: 'A tactical blueprint for rewiring nervous system capacity, flushing adrenal fatigue, and systematically interrupting the biological friction that caps enterprise value.',
    chapters: [
      'Chapter 1: Neural Deceleration & Cortisol Recalibration',
      'Chapter 2: Intercepting the Key-Person Risk Pattern',
      'Chapter 3: The Protocol for Coherent Decision-Making',
      'Chapter 4: Re-engineering Delegation Friction',
      'Chapter 5: Shifting from SOS to Optimized Neural Evolution'
    ],
    coverColor: 'from-[#4a2e0e] to-[#1a1005]',
    coverImage: 'https://res.cloudinary.com/ew2ztpgz/image/upload/v1785187163/book_2.2_awqfr6.png',
    amazonDropUrl: '#'
  },
  {
    id: 'regenesis-blueprint',
    dropDate: '10-27-26',
    title: 'The REGENESIS Blueprint',
    subtitle: 'A 365-Day Plan to Hardwire Your Chosen Identity',
    tagline: 'Embodiment: Sustained Exponential Expansion',
    description: 'A structured, daily operational system to lock in biological upgrades, build organizational immunity, and sustain 8-figure capacity without burnout.',
    chapters: [
      'Day 1-90: Foundation Phase - Recoding Internal Safeguards',
      'Day 91-180: Expansion Phase - Scaling Capacity Under Pressure',
      'Day 181-270: Mastery Phase - Coherent Leadership & Execution',
      'Day 271-365: Legacy Phase - Unrestricted Operational Freedom'
    ],
    coverColor: 'from-[#35200a] to-[#0f0902]',
    coverImage: 'https://res.cloudinary.com/ew2ztpgz/image/upload/v1785187163/book_3.2_nptruj.png',
    amazonDropUrl: '#'
  }
];

export const KEYNOTES_DATA: KeynoteInfo[] = [
  {
    id: 'biology-of-business-behavior',
    number: 'KEYNOTE 1',
    title: 'THE BIOLOGY OF BUSINESS BEHAVIOR',
    subtitle: 'Recoding the Human Operating System™',
    category: 'Where Biology Meets Business Strategy',
    description: 'Strategy is logic, but behavior is chemistry. If you are fighting an "Internal War" between your will to scale and your urge to pull back, it isn\'t a mindset flaw. It is a hardware limitation. Discover why your Biological Architecture is the invisible ceiling on your business growth.',
    fullDetails: 'In this transformative keynote, Thomas Ventura breaks down the neural chemistry that governs high-stakes leadership. Executives learn how survival conditioning secretly triggers delegation bottlenecks, key-person dependencies, and revenue plateaus—and how to recode these automatic biological responses.',
    outcomes: [
      'Understand why standard mindset tools fail when nervous system capacity is breached.',
      'Identify the 3 subconscious trigger states that lead to founder burnout.',
      'Implement real-time biological recalibration techniques during high-stakes negotiations.',
      'Eliminate the "Survival Tax" draining executive output.'
    ],
    targetAudience: 'CEOs, Founders, Enterprise Leadership Teams, CPG & Manufacturing Operators.'
  },
  {
    id: 'regenesis-protocol-expansion',
    number: 'KEYNOTE 2',
    title: 'REGENESIS: THE PROTOCOL FOR EXPANSION',
    subtitle: 'Architecting Biological Capacity for Sustainable Scale',
    category: 'Where Biology Meets Business Strategy',
    description: 'Motivation runs out. Coherent Biology doesn\'t. Leaders who hit a growth ceiling don\'t need more willpower—they need upgraded hardware. Learn the REGENESIS Protocol™—the blueprint for upgrading your internal hardware to sustain exponential scale without the burnout.',
    fullDetails: 'Thomas delivers a battle-tested roadmap derived from two decades in high-stakes CPG manufacturing and neural architecture. This session equips organizations with the exact tools to transform leadership resilience into a measurable corporate asset.',
    outcomes: [
      'Overcome key-person dependency by aligning nervous system trust with operational delegation.',
      'Convert chronic adrenal activation into sustainable executive stamina.',
      'Build organizational coherence that increases velocity across national supply chains.',
      'Shift from reactive survival mode into systematic, unrestricted expansion.'
    ],
    targetAudience: 'Venture-backed leadership teams, Board Members, High-growth Accelerators, Executive Masterminds.'
  }
];

export const AUDIENCE_PROFILES = [
  {
    title: 'THE BOTTLENECK FOUNDER',
    description: '"The one doing it all." Entrepreneurs stuck in high-effort, low-return cycles—where "working harder" has stopped yielding results and started yielding burnout. Whether you run a local shop or a national brand, you are the lid on your own growth.'
  },
  {
    title: 'THE "RELUCTANT" DELEGATOR',
    description: '"The one who can\'t let go." Leaders who intellectually know they need to delegate, but whose nervous system codes "trust" as "danger." This is for operators whose need for control is actively preventing their team from stepping up.'
  },
  {
    title: 'THE CYCLE BREAKER',
    description: 'The one building without a blueprint. For the first-generation entrepreneur defying family history to leave the employee mindset and enter the arena of ownership. You are building from scratch with no trust fund to catch you if you fall.'
  },
  {
    title: 'ACCELERATORS & ORGANIZATIONS',
    description: '"The systems seeking stability." From local incubator programs to corporate retention initiatives. This is for organizations seeking infrastructure-first growth—moving beyond "self-care" fluff to install actual biological sustainability for their leadership teams.'
  }
];

export const QUIZ_QUESTIONS: QuizQuestion[] = [
  {
    id: 1,
    question: 'When high revenue pressure hits or market demands surge, how does your body react first?',
    options: [
      { label: 'I feel tight, hyper-vigilant, micromanage details, and struggle to switch off at night.', points: 1, category: 'SOS' },
      { label: 'I experience sudden mental fog, procrastination, or fatigue despite high coffee intake.', points: 2, category: 'SOS' },
      { label: 'I work long hours with initial focus, but experience erratic crashes and mood swings.', points: 3, category: 'TRANSITION' },
      { label: 'I maintain calm, clear strategic vision and easily delegate execution without internal anxiety.', points: 4, category: 'QNE' }
    ]
  },
  {
    id: 2,
    question: 'How does your nervous system respond to delegating critical business operations?',
    options: [
      { label: 'My body feels physical anxiety or threat; I inevitably step back in and redo their work.', points: 1, category: 'SOS' },
      { label: 'I delegate on paper, but constantly hover and double-check every item due to internal distrust.', points: 2, category: 'SOS' },
      { label: 'I delegate successfully in some areas, but keep 1-2 key functions hostage as my safety blanket.', points: 3, category: 'TRANSITION' },
      { label: 'I build clear systems and empower teams smoothly with zero physiological urge to control.', points: 4, category: 'QNE' }
    ]
  },
  {
    id: 3,
    question: 'How would you describe your sleep and physical energy recovery cycles?',
    options: [
      { label: 'Waking up exhausted, racing thoughts at 3 AM, dependent on stimulants to operate.', points: 1, category: 'SOS' },
      { label: 'Inconsistent sleep quality; constant low-grade tension in jaw, neck, or shoulders.', points: 2, category: 'SOS' },
      { label: 'Good sleep on weekends, but severe weekday energy slumps around 2:00 PM.', points: 3, category: 'TRANSITION' },
      { label: 'Deep restorative sleep nightly, consistent cellular energy all day without crash.', points: 4, category: 'QNE' }
    ]
  },
  {
    id: 4,
    question: 'When you consider taking your business to the next order of magnitude (e.g., 2x - 10x revenue):',
    options: [
      { label: 'A part of me feels dread or panic because my body knows it cannot survive more effort.', points: 1, category: 'SOS' },
      { label: 'I intellectualize the strategy, but repeatedly procrastinate on the crucial needle-moving moves.', points: 2, category: 'SOS' },
      { label: 'I am excited, but worried my personal health or relationships will be collateral damage.', points: 3, category: 'TRANSITION' },
      { label: 'I see a clear path through architectural capacity expansion without personal depletion.', points: 4, category: 'QNE' }
    ]
  }
];
