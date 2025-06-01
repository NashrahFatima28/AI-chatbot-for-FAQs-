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
## 💼 Use Cases for Internship FAQ Chatbot
1. ✅ 24/7 Automated Query Handling
Use Case: Students can get answers anytime, even outside office hours.
Example: "Am I eligible for the internship?" → Immediate response without human intervention.

2. 🧠 Application Guidance
Use Case: Guide users through how to apply, where to upload resumes, and what documents are required.
Example: "How do I apply?" → Bot shares the application link and steps.

3. 📅 Deadline & Important Dates
Use Case: Automatically inform users about upcoming deadlines or interview dates.
Example: "When is the last date to apply?" → Bot responds with specific deadline.

4. 📜 Eligibility Checks
Use Case: Help students understand who can apply based on their year or background.
Example: "Can first-year students apply?" → Bot gives eligibility criteria.

5. 📞 Contact & Support Information
Use Case: Share contact details, email, or even connect to a live agent if needed.
Example: "How do I contact you?" → Bot provides support email/phone.

6. 🎓 Internship Program Overview
Use Case: Educate users about available internship tracks and what they’ll learn.
Example: "What internships do you offer?" → Bot lists categories like Web Dev, Data Science, etc.

7. 📄 Post-Internship Deliverables
Use Case: Inform about certificate, stipend, and future opportunities.
Example: "Will I get a certificate?" or "Is the internship paid?"

8. 📈 Collect Lead Data
Use Case: Collect names, emails, or interests via chatbot for future contact or campaigns.
Optional: Use Dialogflow Fulfillment + Webhook to log data into Google Sheets or a database.

## ⚠️ Common Issues
❌ Chatbot Not Loading?
Make sure your Dialogflow agent is published.

Replace YOUR-AGENT-ID-HERE with the correct agent ID from Dialogflow Messenger settings.

Check browser console for CORS or embed issues.

❌ Contact Form Alert Not Working?
Ensure JavaScript is enabled.

Verify form and field IDs match (#contactForm, #name, etc.).

