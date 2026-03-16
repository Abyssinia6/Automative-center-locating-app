# Email Configuration Guide

## Problem
The password reset emails are not being sent because the email credentials are not configured in the `.env.local` file.

## Solution: Configure Gmail SMTP

### Step 1: Enable 2-Factor Authentication
1. Go to your Google Account settings: https://myaccount.google.com/
2. Click on "Security"
3. Enable "2-Step Verification" if not already enabled

### Step 2: Generate App Password
1. Go to Google App Passwords: https://myaccount.google.com/apppasswords
2. Select "Mail" for the app
3. Select "Other (Custom name)" and enter "Auto Service System"
4. Click "Generate"
5. Copy the 16-character password (this is your EMAIL_PASSWORD)

### Step 3: Update Environment Variables
Update your `.env.local` file with your actual Gmail credentials:

```env
# Email (Gmail SMTP)
EMAIL_HOST="smtp.gmail.com"
EMAIL_PORT="587"
EMAIL_USER="your-actual-gmail@gmail.com"
EMAIL_PASSWORD="your-16-character-app-password"
EMAIL_FROM="your-actual-gmail@gmail.com"
```

### Step 4: Restart Development Server
After updating the `.env.local` file, restart your development server:

```bash
npm run dev
```

## Alternative: Use Email Testing Service (Development Only)

If you don't want to use Gmail for development, you can use a service like [Mailtrap](https://mailtrap.io/) or [Ethereal Email](https://ethereal.email/):

### Mailtrap Configuration
```env
EMAIL_HOST="smtp.mailtrap.io"
EMAIL_PORT="2525"
EMAIL_USER="your-mailtrap-username"
EMAIL_PASSWORD="your-mailtrap-password"
EMAIL_FROM="test@your-domain.com"
```

### Ethereal Email Configuration
```env
EMAIL_HOST="smtp.ethereal.email"
EMAIL_PORT="587"
EMAIL_USER="your-ethereal-username"
EMAIL_PASSWORD="your-ethereal-password"
EMAIL_FROM="test@your-domain.com"
```

## Testing the Email Functionality

1. Go to the forgot password page: `http://localhost:3000/auth/forgot-password`
2. Enter your email address
3. Check the console logs for email sending status
4. Check your email inbox (including spam folder)

## Debugging

If emails still don't work:

1. Check the browser console and terminal for error messages
2. Verify your email credentials are correct
3. Make sure your Gmail account has 2FA enabled
4. Ensure you're using an App Password (not your regular password)
5. Check if your firewall is blocking SMTP connections

## Current Status

The email system is properly implemented and will:
- Log email content to console when no credentials are configured (development mode)
- Send actual emails when properly configured
- Handle errors gracefully
- Always return success message for security (don't reveal if email exists)
