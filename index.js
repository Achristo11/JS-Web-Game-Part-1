function newImage(source, leftpx, bottompx){
    let newCharacter = document.createElement('img')
    newCharacter.src = source
    newCharacter.style.position = 'fixed'
    newCharacter.style.left = leftpx
    newCharacter.style.bottom = bottompx
    document.body.append(newCharacter)
}

function newItem(source, left, bottom){
    let item = document.createElement('img')
    item.src = source
    item.style.position = 'fixed'
    item.style.left = left
    item.style.bottom = bottom
    document.body.append(item)

    item.addEventListener('dblclick', function(){
        item.remove()
        let inventoryItem = document.createElement('img')
        inventoryItem.src = source
        inventory.append(inventoryItem)
    })
}

function newInventory(){
    inventory.style.position = 'fixed'
    inventory.style.bottom = '0px';
    inventory.style.left = '0px'
    inventory.style.width = '100%'
    inventory.style.height = '100px'
    inventory.style.display = 'flex'
    inventory.style.flexDirection = 'row'
    inventory.style.alignItems = 'center'
    inventory.style.justifyContent = 'space-evenly'
    inventory.style.border = '2px solid black'
    inventory.style.backgroundColor = 'brown'
    document.body.append(inventory)
}
let inventory = document.createElement('div')

newImage('assets/pine-tree.png', '450px', '200px')
newImage('assets/green-character.gif', '100px', '100px')
newImage('assets/tree.png', '200px', '300px')
newImage('assets/pillar.png', '350px', '100px')
newImage('assets/well.png', '500px', '425px')
newImage('assets/crate.png', '150px', '200px')


newItem('assets/sword.png', '500px', '405px')
newItem('assets/shield.png', '165px', '185px')
newItem('assets/staff.png', '600px', '100px')

newInventory()

