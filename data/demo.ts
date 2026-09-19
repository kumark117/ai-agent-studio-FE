export type Channel = 'website' | 'whatsapp' | 'instagram' | 'phone' | 'leads'

export interface DemoMessage {
  role: 'ai' | 'lead'
  text: string
  stage?: string
  delay: number
}

export interface DemoScenario {
  channel: Channel
  channelLabel: string
  leadName: string
  icon: string
  color: string
  messages: DemoMessage[]
  crmEntry: {
    name: string
    source: string
    status: string
    action: string
  }
}

export const demoScenarios: Record<Channel, DemoScenario> = {
  website: {
    channel: 'website',
    channelLabel: 'Website Chat',
    leadName: 'Priya Sharma',
    icon: 'monitor',
    color: 'cyan',
    messages: [
      { role: 'ai', text: 'Hi! I\'m the AI Sales Assistant for AI Agent Studio. What brings you here today?', stage: 'Capture', delay: 600 },
      { role: 'lead', text: 'Hi, I\'m looking at automating our sales follow-up. We\'re missing too many leads.', delay: 1400 },
      { role: 'ai', text: 'That\'s exactly what we solve. Could I ask — how many new enquiries does your business receive each week?', stage: 'Qualify', delay: 1200 },
      { role: 'lead', text: 'About 50–80 across WhatsApp and Instagram. Mostly unanswered after hours.', delay: 1600 },
      { role: 'ai', text: 'Got it — our AI agents respond 24/7 on WhatsApp, Instagram, and your website. Do you currently have a CRM tracking these leads?', stage: 'Qualify', delay: 1300 },
      { role: 'lead', text: 'No, we use a spreadsheet which is getting messy.', delay: 1200 },
      { role: 'ai', text: 'Perfect timing then. Our solution includes a full AI CRM dashboard. Would you like to see it in action with a 30-minute demo call?', stage: 'Book', delay: 1400 },
      { role: 'lead', text: 'Yes, that would be great!', delay: 1000 },
      { role: 'ai', text: '✅ Booking confirmed for Priya Sharma. A calendar invite is on its way. Our team has your qualification notes ready. See you soon!', stage: 'Convert', delay: 1200 },
    ],
    crmEntry: { name: 'Priya Sharma', source: 'Website', status: 'Qualified', action: 'Demo call booked' },
  },
  whatsapp: {
    channel: 'whatsapp',
    channelLabel: 'WhatsApp',
    leadName: 'Sneha Patil',
    icon: 'message-circle',
    color: 'green',
    messages: [
      { role: 'lead', text: 'Hi, I saw your ad for AI sales agents. Can you tell me more?', stage: 'Capture', delay: 600 },
      { role: 'ai', text: 'Hello Sneha! Thanks for reaching out. AI Agent Studio builds connected AI sales systems that handle enquiries, qualify leads, and book appointments — across WhatsApp, Instagram, your website, and phone. What does your current sales process look like?', stage: 'Contact', delay: 1400 },
      { role: 'lead', text: 'We have a team of 3 who manually respond to DMs. It\'s slow and inconsistent.', delay: 1500 },
      { role: 'ai', text: 'Understood. How many channels are you getting enquiries on right now?', stage: 'Qualify', delay: 1000 },
      { role: 'lead', text: 'WhatsApp, Instagram and some from the website.', delay: 1000 },
      { role: 'ai', text: 'Our system handles all three with a single AI layer and one CRM dashboard. Budget-wise — our solution starts at ₹25,000 setup + ₹9,999/month. Would that fit your range?', stage: 'Qualify', delay: 1500 },
      { role: 'lead', text: 'That sounds reasonable. I\'d want to see how it works first.', delay: 1200 },
      { role: 'ai', text: '📅 Let\'s arrange a 30-minute walkthrough. I\'ll send you a booking link now. What time works best — mornings or afternoons?', stage: 'Book', delay: 1300 },
      { role: 'lead', text: 'Afternoons are better, say 3pm?', delay: 900 },
      { role: 'ai', text: '✅ Booked for 3:00 PM. You\'ll receive a confirmation and calendar invite shortly. Our team has your details ready for the call!', stage: 'Convert', delay: 1200 },
    ],
    crmEntry: { name: 'Sneha Patil', source: 'WhatsApp', status: 'Interested', action: 'Demo call at 3 PM' },
  },
  instagram: {
    channel: 'instagram',
    channelLabel: 'Instagram',
    leadName: 'Rahul Mehta',
    icon: 'instagram',
    color: 'pink',
    messages: [
      { role: 'lead', text: 'Commented: "This looks exactly what we need for our e-commerce store 🔥"', stage: 'Capture', delay: 600 },
      { role: 'ai', text: 'Hey Rahul! 👋 Glad it caught your eye. What part of your sales process are you looking to improve — responding to DMs, following up with leads, or booking appointments?', stage: 'Contact', delay: 1300 },
      { role: 'lead', text: 'Honestly all of it. We sell online and DMs come in at all hours.', delay: 1400 },
      { role: 'ai', text: 'That\'s exactly the gap we fill. Our AI Instagram Agent responds 24/7 and routes qualified leads to your team. How big is your team handling sales currently?', stage: 'Qualify', delay: 1400 },
      { role: 'lead', text: 'Just me and one other person. We can\'t keep up.', delay: 1100 },
      { role: 'ai', text: 'Our AI can handle the volume for you — qualification, follow-up, booking — so you only step in for the high-intent conversations. Would a quick demo call help?', stage: 'Book', delay: 1500 },
      { role: 'lead', text: 'Definitely. What\'s the process?', delay: 1000 },
      { role: 'ai', text: '📲 I\'ll send you a booking link in DM right now. Takes 30 minutes, and you\'ll see the full system live.', stage: 'Book', delay: 1200 },
      { role: 'ai', text: '✅ Demo confirmed for Rahul Mehta! CRM entry created. Your context and qualification notes are ready for the sales team.', stage: 'Convert', delay: 1400 },
    ],
    crmEntry: { name: 'Rahul Mehta', source: 'Instagram', status: 'New Lead', action: 'Start follow-up' },
  },
  phone: {
    channel: 'phone',
    channelLabel: 'Phone Call',
    leadName: 'Amit Kumar',
    icon: 'phone',
    color: 'violet',
    messages: [
      { role: 'ai', text: '📞 Calling Amit Kumar from uploaded lead list…', stage: 'Capture', delay: 600 },
      { role: 'ai', text: '"Hello, this is the AI Sales Assistant from AI Agent Studio. Am I speaking with Amit? We help businesses automate their sales follow-up across WhatsApp, Instagram, and phone. Is this a good time?"', stage: 'Contact', delay: 1400 },
      { role: 'lead', text: '"Yes, I\'ve been looking for something like this for our coaching business."', delay: 1500 },
      { role: 'ai', text: '"Great to hear! How are you currently handling new enquiries — do you have a team doing follow-up, or is it mostly manual right now?"', stage: 'Qualify', delay: 1300 },
      { role: 'lead', text: '"It\'s mostly me and it\'s overwhelming. I miss callbacks all the time."', delay: 1400 },
      { role: 'ai', text: '"Understood. Our system would handle every enquiry automatically and only escalate when someone is ready to buy. Would a short demo be useful to see how it works?"', stage: 'Qualify', delay: 1500 },
      { role: 'lead', text: '"Absolutely, yes."', delay: 800 },
      { role: 'ai', text: '"Perfect. I\'m scheduling a 30-minute demo call for you. You\'ll receive an SMS confirmation shortly. Our team will have your context ready."', stage: 'Book', delay: 1400 },
      { role: 'ai', text: '✅ Call completed. Appointment booked — Amit Kumar. Qualification notes logged. Handoff to sales team ready.', stage: 'Convert', delay: 1200 },
    ],
    crmEntry: { name: 'Amit Kumar', source: 'Phone Call', status: 'Appointment Booked', action: 'Prepare handoff' },
  },
  leads: {
    channel: 'leads',
    channelLabel: 'Lead List',
    leadName: 'Vikram Singh',
    icon: 'list',
    color: 'amber',
    messages: [
      { role: 'ai', text: '📋 Processing uploaded lead list… 47 contacts imported. Starting outreach sequence.', stage: 'Capture', delay: 600 },
      { role: 'ai', text: '📞 Calling Vikram Singh (Lead #3 — Software company, 10–50 employees)…', stage: 'Contact', delay: 1300 },
      { role: 'lead', text: '"Hello?"', delay: 1000 },
      { role: 'ai', text: '"Hi Vikram, this is the AI Sales Assistant from AI Agent Studio. We help B2B companies automate lead follow-up. Do you have 90 seconds?"', stage: 'Contact', delay: 1400 },
      { role: 'lead', text: '"Sure, go ahead."', delay: 900 },
      { role: 'ai', text: '"We build connected AI agents for WhatsApp, Instagram, your website, and outbound calling — one system, one CRM. Is sales follow-up a challenge for your team right now?"', stage: 'Qualify', delay: 1500 },
      { role: 'lead', text: '"Yes, our sales team doesn\'t follow up consistently after demos."', delay: 1400 },
      { role: 'ai', text: '"That\'s the exact gap our Follow-Up Agent fills — automated, contextual, and persistent. Would you like to see a 30-minute live demo?"', stage: 'Book', delay: 1500 },
      { role: 'lead', text: '"Send me the details."', delay: 900 },
      { role: 'ai', text: '✅ WhatsApp message sent with booking link. CRM updated — Vikram Singh marked Interested. Follow-up scheduled in 48 hours if no response.', stage: 'Convert', delay: 1300 },
    ],
    crmEntry: { name: 'Vikram Singh', source: 'Lead List', status: 'Interested', action: 'Send details' },
  },
}
