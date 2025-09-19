import { api, LightningElement } from 'lwc';

export default class LoadMealResults extends LightningElement {
    @api mealResult = [];
    selectedMeal;
    showModal= false;
    get checkMeals() {
        return typeof (this.mealResult) != 'undefined' && this.mealResult.length > 0;
    }
    recipeHandler(event) {
        let selectedMealId = event.detail;
        console.log('selectedMealId', selectedMealId);

        //find method
        this.selectedMeal= this.mealResult.find(currItem=> currItem.idMeal ===selectedMealId);
        console.log('selectedMeal', this.selectedMeal);
        this.showModal = true;
    }
    closeHandler() {
        this.showModal = false;
    }


}