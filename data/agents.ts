export interface Agent {
  id: string
  name: string
  description: string
  icon: string
  channels: string[]
  color: string
}

export const agents: Agent[] = [
  {
    id: 'qualifier',
    name: 'AI Lead Qualifier Agent',
    description: 'Understands intent, asks qualification questions, captures contact details, and identifies high-potential prospects from any channel.',
    icon: 'target',
    channels: ['Website', 'WhatsApp', 'Instagram'],
    color: 'blue',
  },
  {
    id: 'voice',
    name: 'AI Voice Sales Agent',
    description: 'Calls supplied leads, explains the offering in natural conversation, handles common questions, and supports appointment scheduling.',
    icon: 'phone',
    channels: ['Phone Calls'],
    color: 'violet',
  },
  {
    id: 'whatsapp',
    name: 'AI WhatsApp Agent',
    description: 'Responds to enquiries, captures lead details, follows up with interested contacts, and guides prospects through to a booking.',
    icon: 'message-circle',
    channels: ['WhatsApp'],
    color: 'green',
  },
  {
    id: 'instagram',
    name: 'AI Instagram Agent',
    description: 'Turns relevant comments and DMs into structured conversations, qualifies intent, and creates CRM entries from social engagement.',
    icon: 'instagram',
    channels: ['Instagram'],
    color: 'pink',
  },
  {
    id: 'webchat',
    name: 'AI Website Chat Agent',
    description: 'Engages visitors 24/7, answers product questions, qualifies intent, and converts anonymous traffic into identifiable leads.',
    icon: 'monitor',
    channels: ['Website'],
    color: 'cyan',
  },
  {
    id: 'webvoice',
    name: 'AI Website Voice Agent',
    description: 'Offers a natural voice experience on your website, captures qualification details, and routes high-intent visitors forward.',
    icon: 'mic',
    channels: ['Website'],
    color: 'indigo',
  },
  {
    id: 'followup',
    name: 'AI Follow-Up Agent',
    description: 'Maintains timely, relevant follow-up across channels for all interested and pending leads — so no opportunity goes cold.',
    icon: 'refresh-cw',
    channels: ['WhatsApp', 'Phone Calls'],
    color: 'amber',
  },
  {
    id: 'appointment',
    name: 'AI Appointment Agent',
    description: 'Identifies appointment-ready prospects, coordinates scheduling, confirms bookings, and triggers the sales-team handoff with context.',
    icon: 'calendar',
    channels: ['WhatsApp', 'Phone Calls'],
    color: 'emerald',
  },
  {
    id: 'crm',
    name: 'AI Lead CRM & Dashboard',
    description: 'Centralises lead statuses, conversations, qualification scores, appointment history, recommended actions, and pipeline reporting.',
    icon: 'layout-dashboard',
    channels: ['All Channels'],
    color: 'slate',
  },
]
