import mongoose from "mongoose";

const recipeSuggestionSchema = new mongoose.Schema(
	{
		name: {
			type: String,
			required: true,
		},
		ingredients: [
			{
				type: String,
				required: true,
			},
		],
		instructions: [
			{
				type: String,
				required: true,
			},
		],
		cookingTime: {
			type: Number,
			required: true,
		},
		rating: {
			type: Number,
		},
	},
	{
		timestamps: true,
	}
);

const RecipeSuggestion = mongoose.model(
	"RecipeSuggestion",
	recipeSuggestionSchema
);

export default RecipeSuggestion;
