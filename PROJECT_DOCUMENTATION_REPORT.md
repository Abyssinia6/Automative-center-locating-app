# AutoService Management System - Comprehensive Project Documentation

## 📋 Project Overview

**AutoService Management System** is a comprehensive automotive service management platform designed to connect customers with trusted auto service centers in Ethiopia. The system streamlines the entire service booking workflow, from initial request to payment and feedback.

### 🎯 Target Users

#### **Customers**
- Vehicle owners seeking reliable auto services
- Can browse garages, request services, track progress, and make payments
- Access location-based garage discovery and rating system

#### **Mechanics** 
- Service professionals working at garages
- Manage service requests, update vehicle status, and track performance
- Receive notifications and manage customer interactions

#### **Garage Administrators**
- Garage owners/managers overseeing operations
- Manage mechanics, services, pricing, and business performance
- Approve mechanic applications and handle administrative tasks

#### **System Administrators**
- Platform administrators managing the entire system
- Oversee all garages, users, and system-wide operations
- Handle system configuration and user management

---

## 🛠 Tech Stack & Languages

### **Core Technologies**
- **Framework**: Next.js 15.5.0 with App Router
- **Language**: TypeScript 5.x
- **Database**: PostgreSQL with Prisma ORM 6.14.0
- **Authentication**: NextAuth.js 4.24.11
- **Styling**: Tailwind CSS 4.x
- **Runtime**: Node.js with Turbopack

### **Frontend Stack**
- **React**: 19.1.0 (latest)
- **UI Components**: Custom components with Tailwind CSS
- **Icons**: Lucide React (implied from usage)
- **Forms**: Custom form handling with validation
- **State Management**: React hooks and context

### **Backend & API**
- **API Routes**: Next.js App Router API routes
- **Database**: PostgreSQL with Prisma Client
- **Authentication**: JWT-based with NextAuth.js
- **Email**: Nodemailer with development fallback
- **Password Hashing**: bcryptjs 3.0.2

---

## 🚀 Key Features

### **Authentication System**
- Multi-role authentication (Customer, Mechanic, Garage Admin, System Admin)
- Secure password handling with bcrypt
- Forgot password functionality with email verification
- Session management with NextAuth.js

### **Service Booking Workflow**
- Vehicle registration and management
- Service request creation with location data
- Real-time status tracking (Pending → Accepted → In Progress → Completed)
- Mechanic assignment and coordination

### **Garage Management**
- Garage registration and approval system
- Service catalog management
- Mechanic workforce management
- Performance analytics and reporting

### **Payment System**
- Multi-method payment processing (Cash, Card, Mobile Money, Bank Transfer, Insurance)
- Invoice generation and management
- Payment history and tracking
- Ethiopian Birr (ETB) currency support

### **Rating & Feedback System**
- Customer rating system (1-10 scale)
- Service quality feedback
- Garage and mechanic performance metrics
- Review management and display

### **Notification System**
- Real-time notifications for users
- Email notifications for important events
- Status updates and alerts
- Communication between stakeholders

### **Location Services**
- Addis Ababa location integration
- Geographic coordinate tracking
- Nearby garage discovery
- Location-based service requests

---

## 📦 Core Dependencies

### **Database & ORM**
- **@prisma/client (6.14.0)**: Type-safe database access
- **prisma (6.14.0)**: Database toolkit and CLI
- **@auth/prisma-adapter (2.10.0)**: NextAuth integration with Prisma

### **Authentication & Security**
- **next-auth (4.24.11)**: Complete authentication solution
- **bcryptjs (3.0.2)**: Password hashing and verification
- **jsonwebtoken (9.0.2)**: JWT token handling

### **Email & Communication**
- **nodemailer (6.10.1)**: Email sending functionality
- **Development fallback**: Console-based email simulation for demos

### **Development Tools**
- **typescript (5.x)**: Type-safe JavaScript
- **eslint (9.x)**: Code linting and quality
- **tailwindcss (4.x)**: Utility-first CSS framework
- **tsx (4.20.5)**: TypeScript execution for scripts

### **Type Definitions**
- **@types/*** packages: Complete TypeScript support for all dependencies

---

## 📁 File-by-File Architecture

### **src/app/api/ - API Endpoints**

#### **Authentication Routes**
- `/api/auth/login` - User authentication
- `/api/auth/logout` - Session termination  
- `/api/auth/forgot-password` - Password reset requests
- `/api/auth/reset-password` - Password reset completion
- `/api/auth/change-password` - Password changes

#### **User Management**
- `/api/users/register` - New user registration
- `/api/users/profile` - User profile management
- `/api/admin/users` - System admin user management

#### **Garage Operations**
- `/api/garages` - Garage listing and creation
- `/api/garages/[id]` - Individual garage operations
- `/api/garages/[id]/services` - Garage service management
- `/api/garages/profile` - Garage profile updates

#### **Service Management**
- `/api/services` - Service catalog operations
- `/api/services/[id]` - Individual service management
- `/api/requests` - Service request operations
- `/api/requests/[id]` - Individual request management

#### **Vehicle & Status**
- `/api/vehicles` - Vehicle registration and management
- `/api/vehicle-status` - Vehicle status tracking
- `/api/vehicle-status/[id]` - Individual status updates

#### **Payment & Invoicing**
- `/api/payments` - Payment processing
- `/api/payments/[id]` - Individual payment operations
- `/api/invoices` - Invoice generation and management

#### **Rating & Feedback**
- `/api/ratings` - Customer rating system
- `/api/admin/ratings` - Rating management for admins

#### **Notifications**
- `/api/notifications` - Notification system
- `/api/notifications/[id]` - Individual notification operations

#### **Applications & Approvals**
- `/api/applications` - Garage/mechanic applications
- `/api/applications/[id]` - Application processing

#### **System Administration**
- `/api/admin/analytics` - System analytics and reporting
- `/api/admin/garages` - Garage management for system admins
- `/api/admin/mechanic-performance` - Performance tracking

#### **Data Seeding**
- `/api/seed-complete` - Complete demo data setup
- `/api/seed-demo` - Quick demo data
- `/api/setup` - Initial system setup

### **src/app/ - Frontend Views**

#### **Authentication Views** (`src/app/auth/`)
- `/auth/signin` - Multi-role login page
- `/auth/register` - User registration with role selection
- `/auth/forgot-password` - Password reset request
- `/auth/reset-password` - Password reset completion

#### **Customer Dashboard** (`src/app/customer/`)
- `/customer` - Main customer dashboard
- `/customer/garages` - Garage browsing and discovery
- `/customer/request-service` - Service request creation
- `/customer/profile` - Customer profile management
- `/customer/feedback` - Rating and feedback system

#### **Mechanic Workspace** (`src/app/mechanic/`)
- `/mechanic` - Mechanic dashboard and service management
- Service request handling and status updates
- Performance tracking and notifications

#### **Garage Administration** (`src/app/garage-admin/`)
- `/garage-admin` - Garage management dashboard
- Mechanic management and approval
- Service catalog and pricing management
- Business analytics and reporting

#### **System Administration** (`src/app/system-admin/`)
- `/system-admin` - System-wide administration
- User management and garage oversight
- System analytics and configuration

### **src/lib/ - Core Libraries**

#### **Authentication** (`src/lib/auth.ts`)
- NextAuth.js configuration
- Credential provider setup
- JWT token management
- Session handling callbacks

#### **Database** (`src/lib/prisma.ts`)
- Prisma client configuration
- Database connection management
- Query logging for development

#### **Email Service** (`src/lib/email.ts`)
- Email sending functionality
- Development fallback with console output
- Password reset email templates
- Application approval notifications

### **src/utils/ - Utility Functions**

#### **Password Management** (`src/utils/password.ts`)
- Password hashing with bcrypt
- Password verification
- Password validation rules

#### **Validation** (`src/utils/validation.ts`)
- Form validation utilities
- Data sanitization
- Input validation rules

#### **Common Utilities** (`src/utils/common.ts`)
- Helper functions for common operations
- Data formatting utilities
- Shared business logic

#### **Notifications** (`src/utils/notifications.ts`)
- Notification creation and management
- Real-time notification handling
- Email notification integration

### **src/components/ - Reusable Components**

#### **Forms & Input**
- `EnhancedForm.tsx` - Advanced form component
- `FormExample.tsx` - Form demonstration

#### **Payment System**
- `PaymentForm.tsx` - Payment processing interface
- `PaymentHistory.tsx` - Payment transaction history
- `InvoiceDisplay.tsx` - Invoice presentation

#### **Rating System**
- `RatingForm.tsx` - Customer rating interface
- `RatingDisplay.tsx` - Rating presentation
- `RatingStars.tsx` - Star rating component

#### **UI Components**
- `LoadingSpinner.tsx` - Loading state indicator
- `ErrorBoundary.tsx` - Error handling component

---

## 🗄 Database Schema & Relationships

### **Core Entities**

#### **User Table** (Central authentication entity)
- **Fields**: id, username, email, password, firstName, lastName, phoneNumber, userType, resetToken, resetTokenExpires
- **User Types**: CUSTOMER, MECHANIC, GARAGE_ADMIN, SYSTEM_ADMIN
- **Relationships**: Links to all other entities through foreign keys

#### **Garage Table** (Service center management)
- **Fields**: id, garageName, adminId, latitude, longitude, rating, available, removed, approved
- **Relationships**: 
  - One-to-many with User (garage admin)
  - One-to-many with Mechanic, ServiceRequest, Rating, Payment, Invoice

#### **Service Table** (Service catalog)
- **Fields**: id, serviceName, estimatedPrice, removed, createdBy
- **Relationships**: 
  - Many-to-many with Garage through GarageService
  - One-to-many with OngoingService, AdditionalService, InvoiceItem

#### **ServiceRequest Table** (Booking workflow)
- **Fields**: id, customerId, garageId, mechanicId, vehicleId, latitude, longitude, status, createdAt
- **Status Flow**: PENDING → ACCEPTED → IN_PROGRESS → COMPLETED → CANCELLED
- **Relationships**: Central entity linking Customer, Garage, Mechanic, Vehicle

#### **Vehicle Table** (Customer vehicles)
- **Fields**: id, customerId, vehicleType, plateNumber, plateCode, countryCode, color
- **Relationships**: Links to Customer and ServiceRequest

#### **Payment Table** (Financial transactions)
- **Fields**: id, customerId, garageId, serviceRequestId, amount, paymentMethod, status, transactionId, paymentDate, notes
- **Payment Methods**: CASH, CARD, MOBILE_MONEY, BANK_TRANSFER, INSURANCE
- **Payment Status**: PENDING, COMPLETED, FAILED, REFUNDED, CANCELLED

### **Supporting Tables**

#### **Mechanic Table** (Garage workforce)
- Links User to Garage with approval status

#### **VehicleStatus Table** (Service progress tracking)
- Tracks detailed status updates for service requests

#### **OngoingService & AdditionalService** (Service details)
- Manages specific services being performed and additional services

#### **Rating Table** (Quality feedback)
- Customer ratings for garages and mechanics

#### **Notification Table** (Communication)
- System notifications between users

#### **Application Table** (Approval workflows)
- Garage and mechanic application processing

#### **Invoice & InvoiceItem Tables** (Billing)
- Professional invoice generation and line items

---

## 🌍 Ethiopian Context & Localization

### **Geographic Focus**
- **Primary Location**: Addis Ababa, Ethiopia
- **Service Area**: Addis Ababa and surrounding regions
- **Coordinate System**: Uses latitude/longitude for precise location tracking

### **Cultural Localization**

#### **Ethiopian Names & Identity**
- **First Names**: Alemayehu, Meseret, Dawit, Hanan, Yohannes, Mulugeta, Tigist, Solomon, Meron, Abel, Kalkidan, Biruk, Senait, Haile
- **Last Names**: Tesfaye, Kebede, Haile, Bekele, Solomon, Abraham, Yohannes, Michael, Samuel, Daniel, Isaac, Joseph, Gabriel, Matthew, Thomas
- **Phone Format**: Ethiopian country code (+251) with local numbers

#### **Local Business Context**
- **Garage Names**: Addis Auto Service, Ethio Car Care, Shewa Auto Repair, Abyssinia Motors, Lion Auto Workshop, Addis Ababa Auto, Ethiopian Car Service, Blue Nile Auto
- **Regional References**: Shewa, Abyssinia, Blue Nile, Rift Valley, Simien, Entoto, Awash, Omo, Tekeze, Danakil

### **Currency & Pricing**
- **Currency**: Ethiopian Birr (ETB)
- **Price Range**: 500-5500 ETB for services
- **Service Pricing**: Localized pricing structure
- **Payment Methods**: Includes mobile money and local banking options

### **Demo Data Characteristics**
- **8 Garage Admins** with Ethiopian names
- **15 Mechanics** with local identities
- **25 Customers** representing local user base
- **15 Garages** with Ethiopian-themed names
- **Realistic Service Requests** with local context

### **Language & Communication**
- **Primary Language**: English (for educational/demonstration purposes)
- **Email Templates**: Professional English with local business context
- **System Messages**: Clear, professional communication suitable for Ethiopian business environment

---

## 🎓 Educational Features & Demonstration Value

### **School Project Highlights**
- **Complete Full-Stack Implementation**: End-to-end web application
- **Modern Technology Stack**: Industry-standard tools and practices
- **Professional Code Quality**: Clean, documented, maintainable code
- **Real-World Business Logic**: Practical automotive service management
- **Multi-Role Architecture**: Complex user interaction patterns

### **Development Features**
- **Hot Reloading**: Fast development with Turbopack
- **Type Safety**: Complete TypeScript implementation
- **Database Migrations**: Professional database management
- **API Documentation**: Clear endpoint structure and usage
- **Error Handling**: Comprehensive error management
- **Security Best Practices**: Authentication, authorization, data validation

### **Demonstration Capabilities**
- **Complete User Flows**: From registration to payment completion
- **Interactive Dashboard**: Role-based interfaces for all user types
- **Real-Time Features**: Status updates and notifications
- **Mobile Responsive**: Modern, accessible design
- **Production Ready**: Scalable architecture for real deployment

---

## 📊 System Architecture Summary

### **Frontend Architecture**
- **Component-Based**: Reusable React components
- **Role-Based Routing**: Dynamic navigation based on user type
- **State Management**: Efficient data flow and caching
- **Responsive Design**: Mobile-first approach with Tailwind CSS

### **Backend Architecture**
- **RESTful API**: Clean, documented endpoints
- **Database Layer**: Type-safe operations with Prisma
- **Authentication**: Secure session management
- **Business Logic**: Separated concerns and modular design

### **Data Flow**
1. **User Authentication** → Role-based dashboard access
2. **Service Request** → Garage matching and mechanic assignment
3. **Status Updates** → Real-time notifications
4. **Payment Processing** → Invoice generation and completion
5. **Feedback Loop** → Rating system and quality improvement

### **Security Features**
- **Password Hashing**: bcrypt for secure password storage
- **Session Management**: JWT-based authentication
- **Input Validation**: Comprehensive data validation
- **Role Authorization**: Access control based on user types
- **SQL Injection Prevention**: Prisma ORM protection

---

## 🚀 Deployment & Production Considerations

### **Environment Configuration**
- **Database**: PostgreSQL connection string
- **Authentication**: NextAuth secret and configuration
- **Email Service**: SMTP credentials (Gmail/Resend)
- **Application URLs**: Proper domain configuration

### **Scaling Considerations**
- **Database Indexing**: Optimized for performance
- **API Caching**: Response optimization
- **File Storage**: Ready for cloud storage integration
- **Load Balancing**: Prepared for horizontal scaling

### **Monitoring & Maintenance**
- **Error Logging**: Comprehensive error tracking
- **Performance Monitoring**: Database query logging
- **User Analytics**: System usage tracking
- **Backup Strategy**: Database backup procedures

---

## 📝 Conclusion

The **AutoService Management System** represents a comprehensive, production-ready web application that demonstrates advanced full-stack development capabilities. Built with modern technologies and best practices, it provides a complete solution for automotive service management in the Ethiopian context.

**Key Strengths:**
- Complete functional implementation with all major features
- Professional code quality and architecture
- Real-world business logic and user flows
- Educational value with clear documentation
- Production-ready with deployment considerations

**Technical Excellence:**
- Modern TypeScript implementation
- Secure authentication and authorization
- Efficient database design with Prisma
- Responsive UI with Tailwind CSS
- Comprehensive error handling and validation

This project showcases advanced web development skills and provides an excellent foundation for understanding modern application architecture, database design, and full-stack development practices.
