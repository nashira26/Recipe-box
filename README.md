# Recipe Box

The **Recipe Box** is a web application built using the **MERN stack** (MongoDB, Express, React, Node.js). This app allows users to manage and explore recipes, providing an intuitive platform to save, view, and filter recipes based on their ingredients.

## Features

- **Add, View, Edit, and Delete Recipes**
- **Filter Recipes by Ingredients**
- **AI-Powered Recipe Suggestions Based on Pantry Ingredients**
- **Responsive UI**
- **User Authentication** (if implemented)
- **MongoDB Backend**

## Technologies Used

- **Frontend:** React.js
- **Backend:** Node.js with Express
- **Database:** MongoDB
- **Authentication:** JWT (JSON Web Tokens) (if applicable)
- **Machine Learning:** Scikit-learn (for recipe suggestions)

## Installation

To run the Recipe Box project locally, follow these instructions:

### 1. Clone the Repository

```bash
git clone https://github.com/yourusername/Recipe-box.git
cd Recipe-box
```

### 2.Install Backend Dependencies

Navigate to the root directory and install the backend dependencies:

```bash
npm install
```

### 3.Install Frontend Dependencies

Navigate to the frontend folder and install the frontend dependencies:

```bash
cd frontend
npm install
```

### 4.Create and Configure the .env File

In the root directory of the project, create a .env file and add the following variables:

```bash
MONGO_URI=your_mongo_connection_string
JWT_SECRET=your_jwt_secret_key  (if applicable)
```

### 5.Run the Development Server

In the root directory, run the following command to start the backend server:

```bash
npm run server
```

Running the Frontend
In the frontend directory, run:

```bash
npm start
```

This will start the React development server, and the application will be available at http://localhost:3000 (or the port specified).

## Usage

- Once the app is up and running, open it in your browser (http://localhost:3000).
- Create a new recipe by providing a name, ingredients, and instructions.
- Filter recipes by ingredients to find what you can make based on your available items.
- Edit or delete recipes as needed.

## Machine Learning Model for Recipe Suggestions

An AI-powered Recipe Suggestion System has been integrated into the Recipe Box app, which helps users find recipes based on the ingredients they have in their pantry.

### How It Works:

1. Ingredient Matching:

- Users input the ingredients they have available in their pantry.
- The system uses a Machine Learning model trained on a dataset of recipes and their corresponding ingredients.

2. Recipe Prediction:

- The model predicts the most suitable recipes that can be made with the ingredients provided by the user.- - - The trained model is based on a text classification approach, where the system learns patterns between ingredients and recipes.

3. Model Deployment:

- The model is deployed on the backend, where it processes user input and returns the most relevant recipe suggestions.
- The model is trained using TF-IDF vectorization to convert ingredients and recipe descriptions into numerical features that the machine learning model can process.

### Integration with Recipe Box App:

- The backend exposes an API endpoint that accepts a list of ingredients from the user.
- The Machine Learning model processes these ingredients, predicts possible recipes, and sends them back to the frontend for display.
