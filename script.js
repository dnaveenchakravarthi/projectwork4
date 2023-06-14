var form = document.querySelector('form');
var jobTitleInput = document.getElementById('job-title');
var companyNameInput = document.getElementById('company-name');
var jobLocationInput = document.getElementById('job-location');
var jobDescriptionInput = document.getElementById('job-description');

jobTitleInput.addEventListener('invalid', function() {
  jobTitleInput.setCustomValidity('Please enter a job title.');
});

jobTitleInput.addEventListener('input', function() {
  jobTitleInput.setCustomValidity('');
});

companyNameInput.addEventListener('invalid', function() {
  companyNameInput.setCustomValidity('Please enter a company name.');
});

companyNameInput.addEventListener('input', function() {
  companyNameInput.setCustomValidity('');
});

jobLocationInput.addEventListener('invalid', function() {
  jobLocationInput.setCustomValidity('Please enter a job location.');
});

jobLocationInput.addEventListener('input', function() {
  jobLocationInput.setCustomValidity('');
});

jobDescriptionInput.addEventListener('invalid', function() {
    jobDescriptionInput.setCustomValidity('Please enter a job description.');
  });
  
  jobDescriptionInput.addEventListener('input', function() {
    jobDescriptionInput.setCustomValidity('');
  });
