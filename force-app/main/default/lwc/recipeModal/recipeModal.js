import { LightningElement, api } from 'lwc';

export default class RecipeModal extends LightningElement {
    @api selectedMeal;

    // Break the instructions into steps with unique keys
    get recipeSteps() {
        if (this.selectedMeal?.strInstructions?.trim()) {
            return this.selectedMeal.strInstructions
                .trim()
                .split(/\r?\n|\./) // split by newlines or periods
                .map((step, index) => ({
                    id: index, // unique key
                    text: step.replace(/\s+/g, ' ').trim() // normalize spaces
                }))
                .filter(step => step.text.length > 0); // remove empties
        }
        return [];
    }

    clickHandler() {
        this.dispatchEvent(new CustomEvent('closemodal'));
        console.log('close modal');
    }
}
