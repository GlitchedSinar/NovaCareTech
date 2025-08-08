// Simple Node.js server for NovaCare Tech website
const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 5000;

// In-memory storage for contact form submissions
let consultationRequests = [];
let idCounter = 1;

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Serve static files from the dist directory (after build)
app.use(express.static(path.join(__dirname, 'dist')));

// API endpoint to submit consultation requests
app.post('/api/consultation-requests', (req, res) => {
  try {
    const { firstName, lastName, phone, email, serviceType, description, contactMethod } = req.body;
    
    // Basic validation
    if (!firstName || !lastName || !phone || !email || !serviceType) {
      return res.status(400).json({ error: 'All required fields must be filled' });
    }
    
    // Create new request
    const newRequest = {
      id: idCounter++,
      firstName,
      lastName,
      phone,
      email,
      serviceType,
      description: description || '',
      contactMethod: contactMethod || 'phone',
      status: 'pending',
      createdAt: new Date().toISOString()
    };
    
    consultationRequests.push(newRequest);
    
    console.log('New consultation request:', newRequest);
    
    res.status(201).json({ 
      message: 'Consultation request submitted successfully',
      id: newRequest.id 
    });
    
  } catch (error) {
    console.error('Error submitting consultation request:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// API endpoint to get all consultation requests (for admin purposes)
app.get('/api/consultation-requests', (req, res) => {
  res.json(consultationRequests);
});

// Serve the React app for all other routes
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

// Start server
app.listen(PORT, '0.0.0.0', () => {
  console.log(`NovaCare Tech server running on port ${PORT}`);
  console.log(`Visit: http://localhost:${PORT}`);
});