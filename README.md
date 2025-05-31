# AI-chatbot-for-FAQs-

# 💬 Internship FAQ Chatbot Using DialogFlow in GCP

A modern, responsive website with an integrated Dialogflow chatbot to answer frequently asked questions about internships, applications, company info, and more.

## 🚀 Features

- Responsive landing page with smooth design
- Internship program section
- Contact form with alert confirmation
- Embedded Dialogflow chatbot for instant FAQ responses

## 🛠️ Technologies Used

- HTML5 & CSS3
- JavaScript
- Dialogflow (Google Cloud)
- Google Fonts

## Add your Dialogflow agent ID in the index.html file:
<df-messenger
  intent="WELCOME"
  chat-title="InternshipBot"
  agent-id="YOUR-AGENT-ID-HERE"
  language-code="en">
</df-messenger>

## Try chatbot with the question like:
## Examples:
->Am I eligible for an internship?
->Will I get a certificate?
->Is there a stipend?
->what kind of internship courses you offer?
->Tell me about your company
How do I contact you?
Give me your contact details
Who can I contact for more info?
What's your support email?
What kind of internship courses do you offer?
Which internship programs are available?
Tell me about your internship courses
Do you offer internships in programming?
What internships do you provide?
What are the available internship categories?
## more questions u can asked
How do I apply for the internship?

## ⚠️ Common Issues
❌ Chatbot Not Loading?
Make sure your Dialogflow agent is published.

Replace YOUR-AGENT-ID-HERE with the correct agent ID from Dialogflow Messenger settings.

Check browser console for CORS or embed issues.

❌ Contact Form Alert Not Working?
Ensure JavaScript is enabled.

Verify form and field IDs match (#contactForm, #name, etc.).

