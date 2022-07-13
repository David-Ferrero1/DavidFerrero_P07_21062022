const searchInput = document.querySelector('#search-engine')
const results = document.querySelector('.articles')
const ingredients = document.querySelector('.ingredients .dropdown-menu')
const appareils = document.querySelector('.appareil .dropdown-menu')
const ustensils = document.querySelector('.ustensils .dropdown-menu')
const selectedItems = document.querySelector('.selected-items')
const searchButton = document.querySelector('.btn.search')

const ingredientButton = document.getElementById('search-ingredient')
const appareilButton = document.querySelector('.appareil .form-button')
const ustensilsButton = document.querySelector('.ustensils .form-button')

const imgDropI = document.querySelector('.img-drop.ingredient')
const imgDropA = document.querySelector('.img-drop.appareil')
const imgDropU = document.querySelector('.img-drop.ustensils')

let recettes = ''
let recipes = ''
let searchTerm = ''
let ingredientRequest = ''
let ingredientTerm = []
let appareilsTerm = []
let ustensilsTerm = []

let listeMotCles = []
let removeIngredients = []
let removeAppliances = []
let removeUstensils = []

let ingredientsList = []
let applianceList = []
let ustensilList = []
