# NovaCare Tech - Technology Solutions for Seniors

## Overview

NovaCare Tech is a minimal, template-style web application for technology consultation services designed for seniors. The platform features a clean, uncluttered design with essential sections: hero, services, about, pricing, and contact. The minimalist approach reduces visual complexity while maintaining professional credibility and easy navigation for older adults.

## User Preferences

Preferred communication style: Simple, everyday language.
Design preference: Minimal template design, not crowded, simple and clean layout.

## System Architecture

### Frontend Architecture
- **Framework**: React with TypeScript using Vite for development and build tooling
- **Styling**: Tailwind CSS with shadcn/ui component library for consistent, accessible UI components
- **Routing**: Wouter for lightweight client-side routing
- **State Management**: React Query (TanStack Query) for server state management and API interactions
- **Forms**: React Hook Form with Zod validation for type-safe form handling
- **UI Components**: Comprehensive shadcn/ui component system including forms, dialogs, accordions, and responsive layouts

### Backend Architecture
- **Runtime**: Node.js with Express.js framework
- **API Design**: RESTful API endpoints for consultation request management
- **Development Setup**: Hot-reload development server with Vite integration
- **Request Handling**: Express middleware for JSON parsing, URL encoding, and request logging
- **Error Handling**: Centralized error handling middleware with proper HTTP status codes

### Data Storage Solutions
- **Database**: PostgreSQL configured via Drizzle ORM
- **Schema Management**: Drizzle Kit for database migrations and schema management
- **Development Storage**: In-memory storage implementation for development/testing
- **Production Database**: Neon Database serverless PostgreSQL for production deployment
- **Data Models**: Consultation requests with fields for customer information, service types, and request status

### Database Schema
- **consultation_requests** table with fields:
  - id (primary key)
  - firstName, lastName (customer details)
  - phone, email (contact information)
  - serviceType, description (service requirements)
  - contactMethod (preferred communication)
  - status (request processing state)
  - createdAt (timestamp)

### API Endpoints
- `GET /api/consultation-requests` - Retrieve all consultation requests
- `POST /api/consultation-requests` - Create new consultation request
- `PATCH /api/consultation-requests/:id/status` - Update request status

## External Dependencies

### Database Services
- **Neon Database**: Serverless PostgreSQL database hosting
- **Drizzle ORM**: Type-safe database toolkit for schema definition and migrations

### UI and Styling
- **Tailwind CSS**: Utility-first CSS framework
- **Radix UI**: Headless UI primitives for accessibility
- **shadcn/ui**: Pre-built component library built on Radix UI
- **Lucide React**: Icon library for consistent iconography

### Development Tools
- **Vite**: Fast build tool and development server
- **TypeScript**: Type safety across the entire application
- **ESBuild**: Fast JavaScript bundler for production builds
- **PostCSS**: CSS processing with Tailwind CSS integration

### Form and Validation
- **React Hook Form**: Performant form library with minimal re-renders
- **Zod**: Runtime type validation and schema definition
- **@hookform/resolvers**: Integration between React Hook Form and Zod

### Asset and Image Handling
- **Unsplash**: External image service for stock photography
- **Font Awesome**: Icon library for UI elements

### Production Deployment
- **Replit**: Development and hosting platform
- **Static File Serving**: Express.js static file middleware for production assets