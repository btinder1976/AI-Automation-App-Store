export const automationApps = [
  {
    id: 'missed-call-follow-up',
    name: 'Missed Call Follow-Up',
    category: 'Sales',
    price: 29,
    setupTime: '10 min',
    difficulty: 'Easy',
    audience: 'Local service businesses',
    tagline: 'Turns missed calls into text follow-ups and quote requests.',
    description:
      'When a customer calls and you miss it, this automation sends a friendly text, asks what they need, captures the job details, and creates a follow-up task.',
    integrations: ['Phone/SMS', 'Google Sheets', 'Gmail', 'Calendar'],
    outcomes: ['Recover lost leads', 'Book more estimates', 'Create a simple lead log'],
    installSteps: [
      'Connect your SMS or phone provider.',
      'Connect your lead spreadsheet or CRM.',
      'Customize the follow-up message.',
      'Turn on missed-call detection.'
    ],
    promptTemplate:
      'You are a helpful receptionist for {{business_name}}. A customer missed our call or we missed theirs. Ask what service they need, their address, preferred time, and urgency. Keep it friendly and short.',
    status: 'Starter template'
  },
  {
    id: 'cleaning-estimate-generator',
    name: 'Cleaning Estimate Generator',
    category: 'Cleaning',
    price: 49,
    setupTime: '15 min',
    difficulty: 'Easy',
    audience: 'Residential and commercial cleaners',
    tagline: 'Generates cleaning quotes from bedrooms, bathrooms, condition, and frequency.',
    description:
      'A form-driven quote assistant that collects job details, estimates a price range, and drafts a professional response for the customer.',
    integrations: ['Website Form', 'Gmail', 'Google Sheets'],
    outcomes: ['Respond faster', 'Standardize pricing', 'Capture quote history'],
    installSteps: [
      'Set your base pricing rules.',
      'Connect your website form.',
      'Choose whether quotes are instant or review-only.',
      'Connect Gmail for quote replies.'
    ],
    promptTemplate:
      'Create a cleaning estimate for {{customer_name}} using bedrooms={{bedrooms}}, bathrooms={{bathrooms}}, condition={{condition}}, frequency={{frequency}}, and notes={{notes}}. Give a clear price range and ask one smart follow-up question if needed.',
    status: 'Starter template'
  },
  {
    id: 'review-request-engine',
    name: 'Review Request Engine',
    category: 'Marketing',
    price: 19,
    setupTime: '8 min',
    difficulty: 'Easy',
    audience: 'Any local business',
    tagline: 'Automatically asks happy customers for reviews after completed work.',
    description:
      'Sends a polite review request after a job is completed, with a fallback message if the customer does not respond.',
    integrations: ['Gmail', 'SMS', 'Google Business Profile'],
    outcomes: ['More reviews', 'Better local trust', 'Repeat business prompts'],
    installSteps: [
      'Add your review link.',
      'Connect customer list or job-complete trigger.',
      'Customize message tone.',
      'Set follow-up delay.'
    ],
    promptTemplate:
      'Write a short review request for {{business_name}} after completing {{service}}. Sound grateful, personal, and not pushy. Include this review link: {{review_link}}.',
    status: 'Starter template'
  },
  {
    id: 'invoice-reminder-assistant',
    name: 'Invoice Reminder Assistant',
    category: 'Finance',
    price: 39,
    setupTime: '20 min',
    difficulty: 'Medium',
    audience: 'Freelancers and service businesses',
    tagline: 'Sends polite payment reminders before and after invoices are due.',
    description:
      'Tracks unpaid invoices and drafts friendly reminders at configurable intervals without sounding aggressive.',
    integrations: ['Stripe', 'QuickBooks', 'Gmail', 'Google Sheets'],
    outcomes: ['Improve cash flow', 'Reduce awkward follow-ups', 'Track overdue accounts'],
    installSteps: [
      'Connect invoice source.',
      'Set reminder schedule.',
      'Customize escalation tone.',
      'Enable draft-only or auto-send mode.'
    ],
    promptTemplate:
      'Draft a polite payment reminder for invoice {{invoice_number}} due {{due_date}} for {{amount}}. Keep it professional and preserve the relationship.',
    status: 'Starter template'
  },
  {
    id: 'job-application-tracker',
    name: 'Job Application Tracker',
    category: 'Career',
    price: 25,
    setupTime: '12 min',
    difficulty: 'Easy',
    audience: 'Job seekers',
    tagline: 'Labels job emails, tracks applications, and reminds users to follow up.',
    description:
      'Watches Gmail for job application messages, organizes them, extracts company and role details, and creates follow-up reminders.',
    integrations: ['Gmail', 'Google Sheets', 'Calendar'],
    outcomes: ['Never lose an opportunity', 'Follow up on time', 'Track interviews'],
    installSteps: [
      'Connect Gmail.',
      'Choose job-search labels.',
      'Connect tracking sheet.',
      'Choose follow-up timing.'
    ],
    promptTemplate:
      'Extract job application details from this email: company, role, recruiter, deadline, next action, and recommended follow-up date.',
    status: 'Starter template'
  },
  {
    id: 'social-content-repurposer',
    name: 'Social Content Repurposer',
    category: 'Marketing',
    price: 59,
    setupTime: '25 min',
    difficulty: 'Medium',
    audience: 'Creators, consultants, and small businesses',
    tagline: 'Turns one idea into posts, captions, scripts, and image prompts.',
    description:
      'Converts a single business idea into platform-ready content for Facebook, LinkedIn, Instagram, YouTube Shorts, and email.',
    integrations: ['Google Docs', 'Canva', 'Buffer', 'Meta Business Suite'],
    outcomes: ['Save content time', 'Post consistently', 'Reuse winning ideas'],
    installSteps: [
      'Enter your brand voice.',
      'Choose platforms.',
      'Add content pillars.',
      'Generate and approve weekly batches.'
    ],
    promptTemplate:
      'Turn this idea into platform-specific content for {{platforms}}. Business={{business_name}}. Audience={{audience}}. Tone={{tone}}. Idea={{idea}}.',
    status: 'Starter template'
  },
  {
    id: 'small-business-ai-receptionist',
    name: 'Small Business AI Receptionist',
    category: 'Operations',
    price: 99,
    setupTime: '45 min',
    difficulty: 'Advanced',
    audience: 'Appointment-based businesses',
    tagline: 'Answers common questions, qualifies leads, and books appointments.',
    description:
      'A receptionist workflow that handles FAQs, gathers customer details, checks calendar availability, and prepares booking confirmations.',
    integrations: ['Website Chat', 'Gmail', 'Calendar', 'SMS'],
    outcomes: ['Fewer interruptions', 'More booked jobs', 'Consistent customer intake'],
    installSteps: [
      'Add business FAQ.',
      'Connect calendar.',
      'Set booking rules.',
      'Add website chat widget or SMS channel.'
    ],
    promptTemplate:
      'Act as the receptionist for {{business_name}}. Answer questions using {{faq}}. If the customer wants service, collect name, phone, address, service type, preferred date, and urgency.',
    status: 'Build-ready blueprint'
  },
  {
    id: 'receipt-expense-logger',
    name: 'Receipt Expense Logger',
    category: 'Finance',
    price: 49,
    setupTime: '30 min',
    difficulty: 'Medium',
    audience: 'Self-employed workers and families',
    tagline: 'Reads receipts and logs expenses into a spreadsheet automatically.',
    description:
      'Lets users forward receipts or upload photos, then extracts vendor, date, total, tax, category, and notes for bookkeeping.',
    integrations: ['Gmail', 'Google Drive', 'Google Sheets'],
    outcomes: ['Reduce tax-time stress', 'Organize deductions', 'Track spending'],
    installSteps: [
      'Create an expense sheet.',
      'Connect receipt inbox or upload folder.',
      'Set expense categories.',
      'Review extraction before posting.'
    ],
    promptTemplate:
      'Extract structured expense data from this receipt: vendor, date, total, tax, payment method, likely category, and whether it may be deductible for {{business_type}}.',
    status: 'Starter template'
  }
];

export const categories = ['All', ...Array.from(new Set(automationApps.map((app) => app.category)))];
