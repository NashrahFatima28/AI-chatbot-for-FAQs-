# AI-chatbot-for-FAQs-

# 💬 Internship FAQ Chatbot Website

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

## ⚠️ Common Issues
❌ Chatbot Not Loading?
Make sure your Dialogflow agent is published.

Replace YOUR-AGENT-ID-HERE with the correct agent ID from Dialogflow Messenger settings.

Check browser console for CORS or embed issues.

❌ Contact Form Alert Not Working?
Ensure JavaScript is enabled.

Verify form and field IDs match (#contactForm, #name, etc.).
