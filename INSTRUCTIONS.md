Testimonial Slider Project - Developer Instructions
Project Overview
Project: Testimonial Slider
Reference Demo: https://demo.100jsprojects.com/testimonial-slider
Deadline: 1 week from start date
Tech Stack: HTML, CSS, JavaScript only (no frameworks or libraries)

What You Need to Build
Core Features to Implement:
Automatic Slider: Timer-based automatic slide transitions (every 3-5 seconds)
Manual Navigation:
Previous/Next arrow buttons
Clickable dots for direct slide navigation
Smooth Animations: CSS transitions for slide changes
Responsive Design: Works on desktop, tablet, and mobile
Testimonial Content: At least 3 testimonials with:
Customer quote
Customer name
Customer title/company
Customer photo (placeholder images are fine)
Technical Requirements:
Use only HTML, CSS, and JavaScript (no frameworks)
Clean, semantic HTML structure
Modern CSS with flexbox/grid
Vanilla JavaScript (no jQuery or libraries)
Cross-browser compatibility (Chrome, Firefox, Safari, Edge)
File Structure to Create
You need to create these files in your testimonial-slider folder:

testimonial-slider/
├── index.html          # Main HTML file
├── styles.css          # All CSS styles
├── script.js           # All JavaScript functionality
├── INSTRUCTIONS.md     # This file (already created)
└── README.md           # Project documentation (you create this)
Development Setup
Tools You'll Need:
Code Editor: VS Code (recommended) or any text editor
Browser: Chrome or Firefox with Developer Tools
Git: For version control
GitHub Account: For code repository
Getting Started:
Clone the repository
Create the required files listed above
Start with basic HTML structure
Add CSS styling
Implement JavaScript functionality
Git Workflow & Branch Management
Branch Strategy:
main: Production-ready code
dev: Integration branch for features
feature/testimonial-slider: Your working branch
Step-by-Step Git Process:
1. Initial Setup:
# You're already in the project folder, so run:
git init
git add .
git commit -m "Initial commit: project setup"
git branch dev
git checkout dev
git push -u origin dev
2. Create Feature Branch:
git checkout dev
git pull origin dev
git checkout -b feature/testimonial-slider
3. Daily Devment:
# Make your changes to files
git add .
git commit -m "Add: [describe what you added]"
git push origin feature/testimonial-slider
4. Create Pull Request:
Go to your GitHub repository
Click "Compare & pull request"
Set base branch to dev
Set compare branch to feature/testimonial-slider
Add description of changes
Request review from your mentor (Josh)
Commit Message Format:
Add: for new features
Fix: for bug fixes
Update: for improvements
Style: for CSS/styling changes
Docs: for documentation
Examples:

Add: HTML structure for testimonial slider
Add: CSS styling for slide animations
Add: JavaScript auto-slide functionality
Fix: Navigation dots not working on mobile
Update: Improved responsive design for tablets
Development Timeline (7 Days)
Day 1-2: HTML Structure
Tasks:

 Create basic HTML structure with DOCTYPE, head, body
 Add testimonial content (3+ testimonials)
 Implement semantic HTML5 elements (header, main, section)
 Add proper meta tags for responsive design
 Test basic structure in browser
HTML Structure Example:

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Testimonial Slider</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <div class="container">
        <h1>Customer Testimonials</h1>
        <div class="testimonial-slider">
            <!-- Your slider content here -->
        </div>
    </div>
    <script src="script.js"></script>
</body>
</html>
Day 3-4: CSS Styling
Tasks:

 Style the slider container and slides
 Add responsive design (mobile-first approach)
 Implement slide animations and transitions
 Style navigation elements (dots, arrows)
 Add hover effects and visual polish
CSS Tips:

Use CSS Grid or Flexbox for layout
Use CSS variables for colors and sizes
Implement smooth transitions with transition property
Use transform for slide animations
Day 5-6: JavaScript Functionality
Tasks:

 Implement manual navigation (arrows, dots)
 Add automatic slide timer using setInterval
 Handle edge cases (first/last slide)
 Add smooth transitions between slides
 Ensure accessibility (keyboard navigation)
JavaScript Tips:

Use querySelector and querySelectorAll to select elements
Use classList.add/remove to manage active states
Use setInterval for auto-slide functionality
Handle click events for manual navigation
Day 7: Testing & Polish
Tasks:

 Test on different browsers (Chrome, Firefox, Safari)
 Test responsive design on mobile devices
 Fix any bugs or issues
 Remove console.log statements
 Create comprehensive README.md
 Submit pull request
Code Quality Standards
HTML:
Use semantic HTML5 elements (<header>, <main>, <section>, <article>)
Include proper meta tags
Add alt attributes to images
Validate HTML structure
Use meaningful class names
CSS:
Use meaningful class names (BEM methodology if possible)
Use CSS variables for colors and sizes
Mobile-first responsive design
No inline styles
Organize CSS with comments
JavaScript:
Use meaningful variable names
Add comments for complex logic
Handle errors gracefully
Use modern ES6+ features (const, let, arrow functions)
No console.log in final version
Use strict mode: 'use strict';
Testing Checklist
Before submitting your pull request, ensure:

 Slider works automatically (changes slides every 3-5 seconds)
 Manual navigation works (arrows and dots)
 Responsive on mobile devices (test on phone/tablet)
 No JavaScript errors in browser console
 Smooth animations between slides
 All testimonials display correctly
 Code is clean and well-commented
 Works in Chrome, Firefox, and Safari
Submission Process
1. Complete Development:
Finish all features and requirements
Test thoroughly on different devices and browsers
Clean up code and remove debugging statements
Update README.md with project description and setup instructions
2. Create Pull Request:
Push final changes to your feature branch
Create PR to dev branch
Add detailed description using the template below
Tag your mentor (Josh) for review
3. PR Description Template:
## Testimonial Slider Implementation

### Features Implemented:
- [ ] Automatic slide transitions (every 3-5 seconds)
- [ ] Manual navigation (arrows & dots)
- [ ] Responsive design (mobile, tablet, desktop)
- [ ] Smooth CSS animations
- [ ] 3+ testimonials with photos and details
- [ ] Cross-browser compatibility

### Testing Completed:
- [ ] Tested on Chrome
- [ ] Tested on Firefox
- [ ] Tested on Safari
- [ ] Tested on mobile devices
- [ ] No console errors
- [ ] All navigation methods work

### Files Created/Modified:
- `index.html` - Main HTML structure
- `styles.css` - All styling and animations
- `script.js` - JavaScript functionality
- `README.md` - Project documentation

### Key Features:
- Auto-slide with 4-second intervals
- Manual navigation with arrows and dots
- Responsive design using CSS Grid
- Smooth transitions with CSS transforms
- Accessible keyboard navigation

### Demo:
[Add link to live demo if you deploy it, or describe how to run locally]
Getting Help
If you get stuck:

First, try to solve it yourself:

Check the reference demo: https://demo.100jsprojects.com/testimonial-slider
Use browser developer tools to inspect elements
Search for similar implementations online
Check MDN documentation for HTML/CSS/JS
Then ask for help:

Ask your mentor (Josh) for guidance
Be specific about what you've tried
Share your code and describe the issue
