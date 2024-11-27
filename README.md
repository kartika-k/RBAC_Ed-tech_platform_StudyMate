# 🌟 StudyMate - Ed-tech Platform
StudyMate is a cloud-based e-learning platform designed to empower instructors and learners by providing seamless course creation, management, and access to educational resources. The platform is equipped with modern features like video hosting, secure payment integration, and Role-Based Access Control (RBAC) to deliver a personalized and efficient learning experience.

# 📝 Description
StudyMate is built to bridge the gap between instructors and learners by offering a secure and scalable platform for online education. Instructors can upload video lectures to the cloud, manage courses, and track enrollments, while learners can easily browse, purchase, and access courses. The integration of Role-Based Access Control (RBAC) ensures that only authorized users can access specific resources, enhancing platform security and usability.

# ✨ Features

🎥 Cloud Video Hosting : Instructors can upload video lectures, which are stored securely on Cloudinary.

💳 Razorpay Payment Integration : Secure payment gateway allowing learners to purchase courses.

🔒 Role-Based Access Control (RBAC) : Admins, instructors, and learners have distinct permissions. Ensures that users only access resources relevant to their role.

🎨 Modern User Interface : Built using React.js and Tailwind CSS for a responsive and visually appealing design.

📊 Efficient Data Management : Robust backend powered by Node.js and Express for managing users, courses, and payments.

# 💻 Tech Stack

Frontend: React.js, Tailwind CSS

Backend: Node.js, Express.js

Database: MongoDB

Cloud Services: Cloudinary for video hosting

Payment Gateway: Razorpay

# ⚙️ Installation

1. Clone the repository:
   
git clone https://github.com/username/StudyMate.git  

3. Navigate to the project directory:
   
cd StudyMate  

4. Install dependencies for both frontend and backend:
   
cd client  
npm install  
cd ../server  
npm install

6. Configure environment variables:
   
-Create .env files for the client and server directories.
-Add API keys for Razorpay, Cloudinary, and MongoDB connection strings.

8. Start the development server:
   
npm run dev

# 🚀 Usage

Access the app at http://localhost:3000 (default port).

Create an account as an admin, instructor, or learner.

Explore the RBAC features by logging in with different roles.
