# Acme-Exercise-Ioet

Exercise in JavaScript that counts the pairs of employees and how often they have coincided in the office depending of day and hours that it worked.

## Problem Description
  
The company ACME offers their employees the flexibility to work the hours they want. But due to some external circumstances they need to know what employees have been at the office within the same time frame.
  
The goal of this exercise is to output a table containing pairs of employees and how often they have coincided in the office. The following abbreviations will be used for entering data:
  
 - MO: Monday  
 -  TU: Tuesday  
 -  WE: Wednesday  
 -  TH: Thursday   
 - FR: Friday 
 - SA: Saturday   
 - SU: Sunday
  

Input: the name of an employee and the schedule they worked, indicating the time and hours. This should be a .txt file with at least five sets of data. You can include the data from our examples below:

Example:

**INPUT:**  
RENE=MO10:00-12:00,TU10:00-12:00,TH01:00-03:00,SA14:00-18:00,SU20:00- 21:00  
ASTRID=MO10:00-12:00,TH12:00-14:00,SU20:00-21:00  
ANDRES=MO10:00-12:00,TH12:00-14:00,SU20:00-21:00

  
**OUTPUT:**  
ASTRID-RENE: 2  
ASTRID-ANDRES: 3  
RENE-ANDRES: 2
  
 
## Architecture
.  
`├──` **`specs`**   _folder with all project specs_
`├──` **`utils`**  _folder with all reusable functions_  
`└──` **`.gitignore`**
`└──` **`README.md`**  _The main readme_
`└──` **`countEmployeesCoincided.js`**   _javaScript _
`└──` **`data.txt`**  _input text file_ 
`└──` **` package.json`**

## Approach and Methodology

The project was design with TDD methodology (Test Driven Domain), creating the specs first and later making progressive refactors.

## Quick start

### Install dependencies

 1. Run command: `npm init`
 2. Run: `npm install`
 3. For install jest run: `npm  install --save-dev jest`

### Run tests

 - Use the command: `npm test`
