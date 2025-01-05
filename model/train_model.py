#!/usr/bin/env python
# coding: utf-8

# In[5]:


# train_model.py

import pandas as pd
from sklearn.feature_extraction.text import TfidfVectorizer
from sklearn.ensemble import RandomForestClassifier
import joblib

# Load your dataset (replace with your actual dataset)
data = pd.read_csv('recipes.csv')

# Preprocess the ingredients
data['Ingredients'] = data['Ingredients'].apply(lambda x: ' '.join(x.split(',')))

# Define feature (X) and target (y)
X = data['Ingredients']
y = data['Recipe Name']

# Vectorize the ingredients (TF-IDF Vectorizer)
vectorizer = TfidfVectorizer(stop_words='english')
X_tfidf = vectorizer.fit_transform(X)

# Train a Random Forest Classifier
model = RandomForestClassifier(n_estimators=100, random_state=42)
model.fit(X_tfidf, y)

# Save the model and vectorizer
joblib.dump(model, 'recipe_model.pkl')
joblib.dump(vectorizer, 'vectorizer.pkl')

print("Model training complete and saved.")


# In[ ]:




