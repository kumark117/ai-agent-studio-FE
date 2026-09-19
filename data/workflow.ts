export interface WorkflowStep {
  id: string
  stage: string
  label: string
  description: string
  detail: string
  icon: string
}

export const workflowSteps: WorkflowStep[] = [
  {
    id: 'capture',
    stage: '01',
    label: 'Capture',
    description: 'Every enquiry enters one pipeline',
    detail: 'Website visitors, Instagram DMs, WhatsApp messages, inbound calls, and uploaded lead lists all flow into one structured pipeline — no lead slips through.',
    icon: 'funnel',
  },
  {
    id: 'contact',
    stage: '02',
    label: 'Contact',
    description: 'The right agent responds on the right channel',
    detail: 'The AI automatically routes each lead to the appropriate agent and continues the conversation in their preferred channel with full context.',
    icon: 'zap',
  },
  {
    id: 'qualify',
    stage: '03',
    label: 'Qualify',
    description: 'AI identifies intent and readiness',
    detail: 'Structured questions uncover product fit, timeline, budget signals, and intent — scoring each lead and recording the context for your sales team.',
    icon: 'filter',
  },
  {
    id: 'followup',
    stage: '04',
    label: 'Follow Up',
    description: 'No interested lead goes cold',
    detail: 'Timely, relevant follow-up runs automatically for every interested or pending lead — across WhatsApp, voice, or chat — until they are ready to book.',
    icon: 'repeat',
  },
  {
    id: 'book',
    stage: '05',
    label: 'Book',
    description: 'Appointment-ready leads get scheduled',
    detail: 'The AI Appointment Agent identifies booking signals, guides prospects through scheduling, confirms the appointment, and notifies your team.',
    icon: 'calendar-check',
  },
  {
    id: 'convert',
    stage: '06',
    label: 'Convert',
    description: 'Warm handoff to your sales team',
    detail: 'Your sales team receives a fully qualified lead with conversation history, qualification notes, appointment details, and a recommended next action.',
    icon: 'users',
  },
]

export const channels = [
  { id: 'website', label: 'Website', icon: 'globe', color: 'cyan' },
  { id: 'instagram', label: 'Instagram', icon: 'instagram', color: 'pink' },
  { id: 'whatsapp', label: 'WhatsApp', icon: 'message-circle', color: 'green' },
  { id: 'phone', label: 'Phone Calls', icon: 'phone', color: 'violet' },
  { id: 'leads', label: 'Lead Lists', icon: 'list', color: 'amber' },
]
