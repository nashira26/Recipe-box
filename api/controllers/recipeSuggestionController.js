const express = require("express");
const { exec } = require("child_process");
const path = require("path");

export const filterRecipeSuggestions = async (req, res, next) => {
	try {
		const ingredients = req.body.ingredients.join(",");
		exec(
			`python3 model/recipe_suggestion.py "${ingredients}"`,
			(error, stdout, stderr) => {
				if (error) {
					console.error(`exec error: ${error}`);
					return res.status(500).send("Error in generating recipe suggestion.");
				}
				res.status(500).json({ recipe: stdout.trim() });
			}
		);
	} catch (error) {
		next(error);
	}
};
