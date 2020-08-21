# Find An Expert

Links:
TRELLO: https://trello.com/b/xhQFEHdQ/find-an-expert
FIGMA: https://www.figma.com/file/wtUnsPEoNDX2i8uOKask9t/Find-An-Expert?node-id=0%3A1
GITHUB: https://github.com/mattcosta617/Final_project

My project will be called Find An Expert. This is a resource where jobs can search for
employees viewing their profiles instead of employees hunting for companies to get on
board with. Similar to linked in, however this also adds personal info a bit more.
With linked in it's all business all of the time and you look through a persons info,
see what they've done and maybe it matches up with what 1,000,000 other people have done. Find an Expert will differentiate by allowing users to speak on their life experiences and what they've done and what they would like to achieve. Hobbies, interests, schooling, knowledge, desires to learn, everything that the interview process is used for to figure out. Nobody likes interviewing and this may help to make that process a little easier on both ends. 

- <h2>Models will include:</h2>

<h3>Expert:</h3>
first_name<br>
last_name <br>
age<br>
bio<br>
profile_name<br>
user<br>
upload_picture<br>


<h3>Languages:</h3>
language<br>
expert<br>


<h3>Cities:</h3>
country<br>
state<br>
city<br>
expert<br>
***********companies************BONUS**<br>

**********BONUS*************
<h3>Companies</h3>
company_name<br>
description<br>


<h2>MVP</h2>
In the upcoming week I know that I can create the MVP of a website that creates users, logs their info, gives them a profile, and displays them in the three languages they're most comfortable with. This will be the simplest form of the website

Stretch goals: 
1) adding linked in to their profiles which I have already found the authorization walk through so I believe I can do it but I also have never done it before myself.
2) Get the Github API? Maybe to upload all projects which might actually make it easier when dividing by language because Github already has tech that does exactly that. Look into it, if not figured out in a timely manner off the table till further notice. 
<br> 

2) Scaling based off projects completed per language<br>

3) Adding UX design section for designers looking to get their names out<br>

4) Allowing companies to sign up and be reached out to <br>

5) Confirmation emails upon sign up <br>

6) Email button if company is interested <br>

7) Possibly a chat ability?? or just add email to reach out to about opportunities<br>



<h2>Sprints:</h2>


<h3>Sprint 1</h3>
1) Setup the foundation, create the app.<br>
    - npx create-react-app my-app<br>
    - cd my-app<br>
    - npm i react-router-dom<br>
2) Setup the App.js and make sure it is working properly.<br>
3) Create your first component (Home) in a (Home) directory.<br>
4) Set that component to link with the App.js.<br>
5) Setup the Navigation bar with individual components for each:<br>
    - "Find an Expert" top right to navigate to home<br>
    - "About Us" - "Login" - "Signup"<br>
    - IF logged in display "Experts" - "Languages"<br>

// SPRINT 1 DONE BY FRIDAY AUGUST 21, 2020 **12pm**<br>

<h3>Sprint 2</h3>
1) Create About Us component:<br>
    - Explanation of why this exists/who it exists for<br>
    - What is our goal<br>
    - How do we benefit Engineers?<br>
    - How do we benefit employers?<br>
    - Make sure Nav directs to About Us section<br>
// DONE BY FRIDAY AUGUST 21, 2020 **4PM**

2) Page Organization/Main components:<br>
    -- create Language form for file upload: <br>
        - language scroll down to link to file upload and redirect<br>
        the file to the user page and the language show page. Add the new upload to count under username in language component show page<br>
        - Use language index on language show for each language<br>
        - post users in order of how many files they have of each language<br>
    -- Organize the profile page:<br>
        - Profile photo of users choice with upload ability<br>
        - Default photo?<br>
        - Display all user info<br>
        - User may add personal interests such as hobbies-achievements-goals<br>
        - What language do they like the most and why?<br>
        - Do they prefer front end or back end web development?<br>
        - How long have they done programming?<br>
        - How did they get into programming?<br>
        - Allow users the option to upload their linkedin profiles<br>


// DONE BY SATURDAY AUGUST 22, 2020 **8PM**

3) Create Sign up section on home page via component:<br>
    -- create the sign up form <br>
        - username + email + password + password2 <br>
        - add user authorization <br>
        - redirect to profile page <br>
        - Get signup component to print on home page<br>
    -- create the login form<br>
        - username + password<br>

// DONE BY MONDAY AUGUST 24, 2020 **8PM**<br>

<h3>Sprint 3</h3>
1) Add styling to the page, mostly for seperation purposes<br>
    - App.css<br>
    - Add different ID's for different backgrounds of pages <br>
2) Send email confirmation after signup.<br>
2) If importing anything from other sites now is the time to consider doing so.<br>
    -Linked in or possibly just display their linked in profile<br>
    -Not sure which ones yet but maybe add info from other sites<br>
3) Users should be able to delete/edit profiles and fileuploads<br>

DONE BY TUESDAY AUGUST 25, 2020 **8PM**<br>

<h3>Sprint 4 (Extras in order of importance)</h3>
1) Allow for the sign up of **companies**<br>
    - Allow them to comment on projects<br>
    - Edit/Delete company comments<br>
    - Link the API from Linkedin if worth while or just add the link from linkedin<br>
    - Maybe get the github API? <br>

DONE BY WEDNESDAY AUGUST 26, 2020 **8PM**<br>

