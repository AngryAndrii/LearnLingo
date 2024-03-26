"LearnLingo" represents the flagship application of a company specializing in online language learning services. Its primary objective is to assist users in identifying and selecting an appropriate instructor tailored to their educational requirements. The application boasts a responsive layout, seamlessly adapting to screen sizes ranging from 320px to 1440px, ensuring optimal user experience across various devices.

The application comprises three core pages:

Homepage: Here, users can acquaint themselves with the company's advantages and seamlessly navigate to the main application page.

"Teachers" Page: This section allows users to explore a comprehensive list of available instructors for language training. Users can filter instructors based on language proficiency, teaching expertise, and hourly rates. Initially, only four instructor cards are displayed, with an option to load more by clicking the "Load more" button. Additionally, users can add teachers to their "Favorites" by clicking the heart icon. Unauthorized users will receive a prompt indicating that this feature is exclusive to authorized users.

"Favorites" Private Page: Exclusive to authorized users, this page enables them to review all instructors added to their "Favorites" list. The page layout mirrors that of the "Instructors" page.

Technical Specifications:

Authentication: Firebase will handle user registration, login, retrieval of current user data, and logout functionalities.

Forms: Mandatory registration, login, and trial class booking forms are integrated.

Database: Firebase Realtime Database stores comprehensive information about instructors, including their names, languages, proficiency levels, ratings, reviews, hourly rates, teaching experience, and class details.

Modal Windows: Modal windows for registration, login, booking, and unauthorized access warnings are implemented, featuring closure options via the "cross" button, clicking on the background, or pressing the Esc key.

Selection Functionality: Authorized users can add or remove instructors from their "Favorites" list, with the heart icon changing color accordingly. Selected instructor information persists even after page refresh.

"Read More" Functionality: Users can access additional instructor details and student feedback by clicking the "Read More" button.

Routing: React Router facilitates seamless navigation between pages.

Upon completion, the project will be deployed on third-party hosting, with the code repository hosted on GitHub, including a README.md outlining project details, core technologies, layout, and specifications.

[link to the figma layout](https://www.figma.com/file/dewf5jVviSTuWMMyU3d8Mc/Learn-Lingo?type=design&node-id=0-1&mode=design&t=9keLZYccV2myX78Z-0)

[Link to technical specifications](https://docs.google.com/document/d/1ZB_MFgnnJj7t7OXtv5hESSwY6xRgVoACZKzgZczWc3Y/edit)
