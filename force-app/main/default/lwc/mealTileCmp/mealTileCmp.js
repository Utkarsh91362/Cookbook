import { LightningElement,api } from 'lwc';

export default class MealTileCmp extends LightningElement {
    @api meal;
    recipeHandler(){
        let myCustomEvent=new CustomEvent('recipe',{detail:this.meal.idMeal});
        this.dispatchEvent(myCustomEvent);
    }
}