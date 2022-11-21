import { React, useState } from 'react';
// import '../NutritionPages/NutritionsBasicPage.css'
import '../NutritionPages/Calculator.css'

export default function Calculator(props) {
    
    
    return (
        <div class="circle">
            <p class="circle-title">סך הקלוריות <br /> היומי:</p>
            <p class='calories'>{props.calories}</p>
        </div>
    )
}