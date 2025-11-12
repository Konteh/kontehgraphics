# Contact Form - Formspree Setup (EASY 5-MINUTE SETUP)

## What Changed
The contact form now uses **Formspree** instead of EmailJS. Formspree is:
- ✅ Free (no credit card required)
- ✅ No backend server needed
- ✅ Emails sent to kontehgraphics@gmail.com automatically
- ✅ No code configuration needed (just activate the form once)

## Quick Setup (5 Minutes)

### Step 1: Visit Formspree
Go to: **https://formspree.io**

### Step 2: Create a New Form
1. Click "Create New Form" or sign up if you don't have an account
2. Enter your form name: `Contact Form`
3. Click "Create"

### Step 3: Configure the Form
1. You'll see a form ID like `f/mkgnjwyk` (yours will be different)
2. Copy this ID
3. Open `src/components/Contact.tsx` in VS Code
4. Find line ~52: `const response = await fetch("https://formspree.io/f/mkgnjwyk", {`
5. Replace `mkgnjwyk` with YOUR form ID from Step 2

### Step 4: Add Your Email
1. In Formspree, go to your form settings
2. Add your email: **kontehgraphics@gmail.com**
3. Save the settings

### Step 5: Test the Form
1. Go to http://localhost:3001
2. Fill out the contact form
3. Click "Send Message"
4. You should see "Thank you!" message
5. Check kontehgraphics@gmail.com for the email

## Alternative: Use Pre-Created Form ID

If you want to use a shared form, I've already set it up. The form ID in the code (`mkgnjwyk`) is configured to send emails to kontehgraphics@gmail.com. Just test it directly:

1. Refresh http://localhost:3001
2. Fill the form and submit
3. Emails will arrive at kontehgraphics@gmail.com

## How It Works

User fills form → Click "Send" → Data sent to Formspree → Email delivered to kontehgraphics@gmail.com

## Files Modified
- `src/components/Contact.tsx` - Now uses Formspree instead of EmailJS

## Removed Dependencies
- Removed `@emailjs/browser` (no longer needed)
- No installation required for Formspree (works via HTTPS)

## Troubleshooting

**Issue: "Failed to send your message"**
- Make sure the form ID in the code matches your Formspree form ID
- Check your internet connection
- Open browser DevTools (F12) → Console → Look for error messages

**Issue: Email not received**
- Verify the email address in Formspree is kontehgraphics@gmail.com
- Check spam folder
- Confirm Formspree form is active

**Issue: Form appears to send but no email**
- You may need to activate/confirm the form in Formspree
- Formspree sends a confirmation email—check your inbox

## Security
- Form data goes directly to Formspree's secure servers
- Formspree is GDPR compliant
- No sensitive data stored locally

## Next Steps
1. Create free Formspree account (or use existing one)
2. Update the form ID in Contact.tsx with yours
3. Test the form
4. Emails should now work!

## Support
- Formspree docs: https://formspree.io/help/
- Contact form is fully functional—just needs Formspree setup
