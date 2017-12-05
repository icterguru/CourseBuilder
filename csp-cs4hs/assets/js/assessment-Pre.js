// Copyright 2012 Google Inc. All Rights Reserved.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//      http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS-IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.


// When the assessment page loads, activity-generic.js will render the contents
// of the 'assessment' variable into the enclosing HTML webpage.

// For information on modifying this page, see
// https://code.google.com/p/course-builder/wiki/CreateAssessments.


var assessment = {
  // HTML to display at the start of the page
  preamble: ' <br> <br> <b style="font-size: 16px;">CSP4HS Pre-Course Survey<br></b><br>This is a pre-course survey that helps us learn more about your background as a participant in the course.&nbsp;This survey is approved by the Institutional Review Board (IRB) of the University of Alabama. For more about it, please visit the <span class="yui-non"><a href="https://drive.google.com/file/d/0B8BmrAjhdrA4WVFxcFl1ZUVMRG8/edit?usp=sharing"><b>IRB Documentation</b></a>.&nbsp;</span>',


  // An ordered list of questions, with each question's type implicitly determined by the fields it possesses:
  //   choices              - multiple choice question (with exactly one correct answer)
  //   correctAnswerString  - case-insensitive string match
  //   correctAnswerRegex   - freetext regular expression match
  //   correctAnswerNumeric - freetext numeric match
  questionsList: [
  
  {questionHTML: '<b>What is your first and last name?</b>',
     correctAnswerRegex: /[A-Za-z0-9-_:,;]+/
    },

  {questionHTML: '<b>How do you plan to participate in the course?</b>',
     choices: [" I’m just curious – I plan to browse and look occasionally at material, but will probably not finish the course.", "I plan to try out some of the activities and assessments after watching the lessons, but I am not sure yet that I will complete the course for the certificate.", "I plan to participate fully in the course (complete all units and participate online) with the goal of receiving a certificate."]
    },

    {questionHTML: '<b>Are you over 19 years old?</b>',
     choices: ["Yes", "No"]
    },
{questionHTML: '<b>Where do you live (City,State)?</b>',
     correctAnswerRegex: /[A-Za-z0-9-_:,;]+/
    },

{questionHTML: '<b>What is the name of your school?</b>',
     correctAnswerRegex: /[A-Za-z0-9-_:,;]+/
    },

{questionHTML: '<b>Which grade level do you mainly teach?</b>',
     choices: ["Elementary (grades K-5)", "Middle (grades 5-8)", "High School (9-12, 10-12)", "Postsecondary (college/university)", "Currently, I am not teaching"]
    },


{questionHTML: '<b>What subject(s) do you teach?</b>',
     correctAnswerRegex: /[A-Za-z0-9-_:,;]+/
    },

    {questionHTML: '<b>What is your school\'s classification?</b>',
     choices: ["Public", "Private", "Charter", "After school program"]
    },

{questionHTML: '<b>What is your past experience in computer science?</b>',
     choices: ["I have little to no background. This is the first time that I have considered topics in computer science.", "I have previous background experience in computer science, but not deeply experienced.", "I have taught a computer science course before (not computer applications, but a computer science course).", "I have previously taught either the AP CS A course or a version of CS Principles."]
    },



    {questionHTML: '<b>Do you plan to teach CS Principles within the next 12 months?</b>',
     choices: ["Yes", "No", "Not sure"]
    },

    {questionHTML: '<b>Please read the informed consent letter - available <a href="https://drive.google.com/file/d/0B8BmrAjhdrA4WVFxcFl1ZUVMRG8/edit?usp=sharing" target="_blank"><b>here.</b></a> </b><br>By checking the box, you agree to allow us to gather data in order to improve this type of course offering in the future. You may elect not to participate in the study, which will not affect your position in any way with the CSP4HS course. Your help as a participant, however, would be appreciated so that we can understand and learn from this experience to improve online learning best practices.</b>',
     choices: ["I agree."]
    }
  ],

  // The assessmentName key is deprecated in v1.3 of Course Builder, and no
  // longer used. The assessment name should be set in the unit.csv file or via
  // the course editor interface.
  assessmentName: 'Pre', // unique name submitted along with all of the answers

  checkAnswers: false    // render a "Check your Answers" button to allow students to check answers prior to submitting?
}
