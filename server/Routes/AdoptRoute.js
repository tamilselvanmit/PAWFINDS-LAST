const express = require('express');
const router = express.Router();
const AdoptForm = require('../Model/AdoptFormModel');

// Save adoption form
router.post('/save', async (req, res) => {
  try {
    const { 
      email, 
      phoneNo, 
      livingSituation, 
      previousExperience, 
      familyComposition,
      petId 
    } = req.body;

    // Create new adoption form
    const newAdoptForm = new AdoptForm({
      email,
      phoneNo,
      livingSituation,
      previousExperience,
      familyComposition,
      petId,
      submissionDate: new Date()
    });

    // Save to database
    await newAdoptForm.save();

    res.status(201).json({ 
      message: 'Adoption form submitted successfully', 
      adoptForm: newAdoptForm 
    });
  } catch (error) {
    console.error('Error saving adoption form:', error);
    res.status(500).json({ 
      message: 'Failed to submit adoption form', 
      error: error.message 
    });
  }
});

module.exports = router;
