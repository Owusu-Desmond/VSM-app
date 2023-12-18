# VSM-app
VSM app is a virtual stand-up meeting app that helps you to keep track of your team's progress. It allow team members to add projects they have worked on and project they are working on. It also allow team members to add blockers they are facing and how they are going to resolve them


// Import the required modules
const express = require('express');
const mongoose = require('mongoose');

// Connect to the MongoDB database
mongoose.connect('mongodb://localhost:27017/ugmc', {useNewUrlParser: true, useUnifiedTopology: true});

// Define the patient schema
const patientSchema = new mongoose.Schema({
  patientId: {type: String, required: true, unique: true},
  surname: {type: String, required: true},
  othernames: {type: String, required: true},
  gender: {type: String, required: true},
  phoneNumber: {type: String, required: true},
  residentialAddress: {type: String, required: true},
  emergencyName: {type: String, required: true},
  emergencyContact: {type: String, required: true},
  emergencyRelationship: {type: String, required: true}
});

// Define the encounter schema
const encounterSchema = new mongoose.Schema({
  patientId: {type: String, required: true, ref: 'Patient'},
  date: {type: Date, required: true},
  time: {type: String, required: true},
  type: {type: String, required: true, enum: ['Emergency', 'OPD', 'Specialist Care']}
});

// Define the vital schema
const vitalSchema = new mongoose.Schema({
  encounterId: {type: String, required: true, ref: 'Encounter'},
  bloodPressure: {type: String, required: true},
  temperature: {type: String, required: true},
  pulse: {type: String, required: true},
  sp02: {type: String, required: true}
});

// Create the model classes
const Patient = mongoose.model('Patient', patientSchema);
const Encounter = mongoose.model('Encounter', encounterSchema);
const Vital = mongoose.model('Vital', vitalSchema);

// Create the express app
const app = express();

// Use JSON middleware
app.use(express.json());

// Define the routes and controllers

// Register a new patient
app.post('/patients', async (req, res) => {
  try {
    // Create a new patient document
    const patient = new Patient(req.body);
    // Save it to the database
    await patient.save();
    // Send a success response
    res.status(201).json({message: 'Patient registered successfully', patient});
  } catch (error) {
    // Handle any errors
    res.status(500).json({message: 'An error occurred', error});
  }
});

// Start an encounter for a patient
app.post('/encounters', async (req, res) => {
  try {
    // Create a new encounter document
    const encounter = new Encounter(req.body);
    // Save it to the database
    await encounter.save();
    // Send a success response
    res.status(201).json({message: 'Encounter started successfully', encounter});
  } catch (error) {
    // Handle any errors
    res.status(500).json({message: 'An error occurred', error});
  }
});

// Submit information on patient vitals
app.post('/vitals', async (req, res) => {
  try {
    // Create a new vital document
    const vital = new Vital(req.body);
    // Save it to the database
    await vital.save();
    // Send a success response
    res.status(201).json({message: 'Vital information submitted successfully', vital});
  } catch (error) {
    // Handle any errors
    res.status(500).json({message: 'An error occurred', error});
  }
});

// View a list of patients
app.get('/patients', async (req, res) => {
  try {
    // Find all the patient documents
    const patients = await Patient.find();
    // Send a success response
    res.status(200).json({message: 'Patients retrieved successfully', patients});
  } catch (error) {
    // Handle any errors
    res.status(500).json({message: 'An error occurred', error});
  }
});

// View the details of a specific patient
app.get('/patients/:patientId', async (req, res) => {
  try {
    // Find the patient document by the patient ID
    const patient = await Patient.findById(req.params.patientId);
    // Check if the patient exists
    if (patient) {
      // Send a success response
      res.status(200).json({message: 'Patient retrieved successfully', patient});
    } else {
      // Send a not found response
      res.status(404).json({message: 'Patient not found'});
    }
  } catch (error) {
    // Handle any errors
    res.status(500).json({message: 'An error occurred', error});
  }
});

// Start the server
app.listen(3000, () => {
  console.log('Server running on port 3000');
});
