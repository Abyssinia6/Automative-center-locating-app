
# 🚗 AutoService - Complete Setup Guide

This comprehensive guide will walk you through setting up and running the AutoService project from scratch.

## 📋 Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js** (v18 or higher) - [Download here](https://nodejs.org/)
- **npm** or **yarn** package manager
- **Git** - [Download here](https://git-scm.com/)
- **PostgreSQL** database (v12 or higher) - [Download here](https://www.postgresql.org/download/)

### Optional (for deployment):
- **Vercel CLI** (for deployment) - `npm i -g vercel`
- **Docker** (for containerized deployment)

---

## 🚀 Quick Start (5 minutes)

If you're in a hurry, here's the fastest way to get the project running:

```bash
# 1. Clone and install
git clone <your-repo-url>
cd autoservice
npm install

# 2. Set up environment
cp .env.example .env.local
# Edit .env.local with your database URL

# 3. Set up database
npx prisma generate
npx prisma db push

# 4. Seed with demo data
npm run dev
# Then visit: http://localhost:3000/api/setup
# Then visit: http://localhost:3000/api/seed-complete?reset=true

# 5. Start development
npm run dev
```

---

## 📖 Detailed Setup Instructions

### Step 1: Clone the Repository

```bash
# Clone the repository
git clone <your-repo-url>
cd autoservice

# Verify you're in the correct directory
ls -la
```

### Step 2: Install Dependencies

```bash
# Install all required packages
npm install

# Verify installation
npm list --depth=0
```

### Step 3: Set Up Environment Variables

```bash
# Copy the example environment file
cp .env.example .env.local

# Edit the environment file with your database credentials
nano .env.local
```

#### Required Environment Variables:

```env
# Database
DATABASE_URL="postgresql://username:password@localhost:5432/autoservice"

# NextAuth.js
NEXTAUTH_URL="http://localhost:3000"
NEXTAUTH_SECRET="your-secret-key-here"

# Optional: For production
NODE_ENV="development"
```

#### Database URL Examples:

**Local PostgreSQL:**
```env
DATABASE_URL="postgresql://myuser:mypassword@localhost:5432/autoservice"
```

**Supabase:**
```env
DATABASE_URL="postgresql://postgres:password@db.xxx.supabase.co:5432/postgres"
```

**Vercel Postgres:**
```env
DATABASE_URL="postgresql://default:password@ep-xxx.us-east-1.postgres.vercel-storage.com:5432/verceldb"
```

### Step 4: Set Up the Database

```bash
# Generate Prisma client
npx prisma generate

# Create database tables
npx prisma db push

# Verify database connection
npx prisma studio
```

### Step 5: Initialize the Application

```bash
# Start the development server
npm run dev
```

Visit `http://localhost:3000` in your browser.

#### Option A: Basic Setup (Minimal Data)

```bash
# Initialize with system admin only
curl http://localhost:3000/api/setup
# or visit: http://localhost:3000/api/setup
```

#### Option B: Complete Demo Setup (Recommended)

```bash
# Seed with comprehensive Ethiopian demo data
curl http://localhost:3000/api/seed-complete?reset=true
# or visit: http://localhost:3000/api/seed-complete?reset=true
```

---

## 🎯 What Gets Created

### Basic Setup (`/api/setup`)
- ✅ System Administrator user
- ✅ Basic service catalog (6 services)
- ✅ Database tables and relationships

### Complete Demo Setup (`/api/seed-complete`)
- ✅ **25 Ethiopian Customers** with authentic names
- ✅ **8 Garage Administrators** with Ethiopian names
- ✅ **15 Mechanics** with Ethiopian names
- ✅ **15 Garages** across Addis Ababa locations
- ✅ **20 Automotive Services** with pricing
- ✅ **50 Service Requests** with various statuses
- ✅ **Payments & Invoices** for completed services
- ✅ **Ratings & Feedback** from customers
- ✅ **Notifications** between users

---

## 🔐 Default Login Credentials

After running the complete seed, use these credentials:

### System Administrator
- **Username:** `admin`
- **Password:** `admin`
- **URL:** `http://localhost:3000/system-admin`

### Demo Users
All demo users use password: `password123`

#### Garage Administrators
- `garageadmin1` - Addis Auto Service (Piassa)
- `garageadmin2` - Ethio Car Care (Kazanchis)
- `garageadmin3` - Shewa Auto Repair (Bole)
- ...and 5 more

#### Mechanics
- `mechanic1` through `mechanic15`
- Each assigned to different garages

#### Customers
- `customer1` through `customer25`
- Ethiopian names and phone numbers

*See `DEMO_CREDENTIALS.md` for complete list*

---

## 🏗️ Project Structure

```
autoservice/
├── src/
│   ├── app/                 # Next.js app router
│   │   ├── api/            # API routes
│   │   ├── auth/           # Authentication pages
│   │   ├── customer/       # Customer dashboard
│   │   ├── garage-admin/   # Garage admin dashboard
│   │   ├── mechanic/       # Mechanic dashboard
│   │   └── system-admin/   # System admin dashboard
│   ├── components/         # Reusable components
│   ├── lib/               # Database and utilities
│   └── utils/             # Helper functions
├── prisma/                # Database schema and migrations
├── public/                # Static assets
└── DEMO_CREDENTIALS.md    # Demo user credentials
```

---

## 🚀 Development Commands

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Run linting
npm run lint

# Run tests (if available)
npm test

# Database management
npx prisma studio          # Open database GUI
npx prisma migrate dev     # Create migration
npx prisma generate        # Regenerate client
npx prisma db push         # Push schema changes
```

---

## 🌐 Deployment Options

### Option 1: Vercel (Recommended)

```bash
# Install Vercel CLI
npm i -g vercel

# Login to Vercel
vercel login

# Deploy
vercel

# Set environment variables in Vercel dashboard
# DATABASE_URL, NEXTAUTH_SECRET, NEXTAUTH_URL
```

### Option 2: Docker

```bash
# Build Docker image
docker build -t autoservice .

# Run with PostgreSQL
docker-compose up -d
```

### Option 3: Manual Server

```bash
# Build the application
npm run build

# Start production server
npm start
```

---

## 🔧 Troubleshooting

### Database Connection Issues

```bash
# Test database connection
npx prisma db push

# If connection fails, check:
# 1. PostgreSQL is running
# 2. DATABASE_URL is correct
# 3. Database exists and user has permissions
```

### Port Already in Use

```bash
# Kill process using port 3000
lsof -ti:3000 | xargs kill -9

# Or use different port
npm run dev -- -p 3001
```

### Environment Variables Not Loading

```bash
# Ensure .env.local exists
ls -la .env.local

# Restart development server
# Ctrl+C then npm run dev
```

### Prisma Issues

```bash
# Reset database completely
npx prisma migrate reset --force

# Regenerate Prisma client
npx prisma generate
```

---

## 📊 Database Schema

The application uses PostgreSQL with the following main tables:

- **Users** - All user types (customers, mechanics, admins)
- **Garages** - Service centers with locations
- **Vehicles** - Customer vehicles
- **Services** - Available automotive services
- **ServiceRequests** - Customer service bookings
- **Payments** - Transaction records
- **Ratings** - Customer feedback
- **Notifications** - System notifications

---

## 🔄 Updating the Project

```bash
# Pull latest changes
git pull origin main

# Install new dependencies
npm install

# Update database schema
npx prisma db push

# Restart development server
npm run dev
```

---

## 📞 Support

If you encounter issues:

1. Check this guide for common solutions
2. Review the `PROGRESS_REPORT.md` for known issues
3. Check the browser console for error messages
4. Verify all environment variables are set correctly

---

## 🎉 You're All Set!

Once you've completed the setup:

1. **Visit** `http://localhost:3000`
2. **Login** with any demo credentials
3. **Explore** the different user dashboards
4. **Test** the complete workflow from booking to payment

Happy coding! 🚗✨
=======
# Automative-center-locating-app
