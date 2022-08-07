const allCategories = document.querySelectorAll('.item')
console.log(`Number of categories: ${allCategories.length}`)


allCategories.forEach(
    categories => {
        console.log(`Category: ${categories.children[0].textContent}`)
        console.log(`Elements: ${categories.children[1].children.length}`)
    })

