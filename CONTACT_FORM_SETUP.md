# Contact Form Setup & Configuration Guide

## Overview
The contact form is now interactive and sends emails directly to **kontehgraphics@gmail.com** using the **EmailJS** service. No backend server is required.

## Features
✅ Form validation (required fields marked with *)  
✅ Real-time input handling  
✅ Success/error status messages  
✅ Loading state while sending  
✅ Email sent directly to kontehgraphics@gmail.com  
✅ Form auto-clears after successful submission  

## How It Works
The form uses **EmailJS** to send emails client-side:
1. User fills out the form (First Name, Last Name, Email, Phone, Subject, Message)
2. User clicks "Send Message" button
3. Form validates all required fields
4. EmailJS sends the data to kontehgraphics@gmail.com
5. Success message displays, form clears, or error message shows

## Setup Instructions

### 1. Create EmailJS Account (Already Done ✓)
- Account exists with public key: `mE5bYP0WYSRe4t9xt`
- Email service configured in `src/components/Contact.tsx`

### 2. Configure EmailJS Service & Template

**Important:** You need to set up the service and template in your EmailJS account for emails to be sent correctly.

#### Steps:
1. Go to https://www.emailjs.com/
2. Log in with your EmailJS account (create one if you don't have it)
3. Create a new **Email Service** or use an existing one:
   - Service ID: `service_kontehgraphics` (or update the code)
   - Use Gmail, Outlook, or your preferred email provider
4. Create an **Email Template**:
   - Template ID: `template_contact_form` (or update the code)
   - Template variables to include in the email body:
     ```
     {{from_name}} ({{from_email}})
     Phone: {{phone}}
     Subject: {{subject}}
     Message: {{message}}
     ```

### 3. Update Contact.tsx if Service/Template IDs Differ

If you use different service or template IDs, update these lines in `src/components/Contact.tsx`:

```typescript
// Line ~70: Change these IDs to match your EmailJS config
await emailjs.send("service_kontehgraphics", "template_contact_form", {
  to_email: "kontehgraphics@gmail.com",
  // ... rest of data
});
```

### 4. (Optional) Change Recipient Email

To send emails to a different address, change this line in `src/components/Contact.tsx`:

```typescript
to_email: "kontehgraphics@gmail.com",  // Change this
```

## Testing the Form

1. Open http://localhost:3001 (or http://localhost:3000) in your browser
2. Scroll to the "Get In Touch" section
3. Fill out the contact form:
   - First Name: Test
   - Last Name: User
   - Email: your-email@gmail.com
   - Phone: +220 1234567 (optional)
   - Subject: Test Message
   - Message: This is a test message
4. Click "Send Message"
5. You should see a success message
6. Check kontehgraphics@gmail.com for the email

## Troubleshooting

### Issue: "Failed to send email" error
**Solution:** 
- Verify EmailJS service and template IDs are correct
- Check that your EmailJS account has a valid email service configured
- Ensure the `@emailjs/browser` package is installed (`npm install @emailjs/browser`)

### Issue: Email not received
**Solution:**
- Check spam/junk folder
- Verify the recipient email (kontehgraphics@gmail.com) in the code
- Ensure EmailJS template is properly configured with all variables

### Issue: "Cannot find module '@emailjs/browser'"
**Solution:**
```powershell
npm install @emailjs/browser
npm run dev
```

## Email Template Example

Here's a recommended EmailJS email template format:

**Subject:** New Contact Form Submission from {{from_name}}

**Body:**
```
You have received a new message from your contact form:

From: {{from_name}} ({{from_email}})
Phone: {{phone}}
Subject: {{subject}}

Message:
{{message}}

---
Sent via your website contact form
```

## Security Notes

⚠️ **Public Key in Code:** The EmailJS public key is visible in the client-side code. This is intentional and safe with EmailJS's built-in protections:
- The key is public (not secret)
- EmailJS validates requests on their servers
- Service and template IDs control what emails can be sent

## Files Modified

- `src/components/Contact.tsx` - Added form state, validation, and EmailJS integration

## Dependencies Added

- `@emailjs/browser@4.x` - Client-side email sending

## Next Steps

1. Set up EmailJS service and template (see instructions above)
2. Test the form locally
3. Deploy the site—emails will continue to work in production
4. (Optional) Add email templates with branding/styling in EmailJS

## Support

For EmailJS support, visit: https://www.emailjs.com/docs/
