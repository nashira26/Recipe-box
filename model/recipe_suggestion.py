#!/usr/bin/env python
# coding: utf-8

# In[3]:


# recipe_suggestion.py

import sys
import joblib

# Load the trained model and vectorizer
model = joblib.load('recipe_model.pkl')
vectorizer = joblib.load('vectorizer.pkl')

# Get the ingredients from the command line argument
ingredients = sys.argv[1]

# Vectorize the input ingredients
ingredients_tfidf = vectorizer.transform([ingredients])

# Predict the recipe
predicted_recipe = model.predict(ingredients_tfidf)

# Print the result (this will be captured by Node.js)
print(predicted_recipe[0])


# In[4]:


jupyter nbconvert --to script recipe_suggestion.ipynb


# In[ ]:




