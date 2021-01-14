// Given an array of menus, where each menu is an array, return a master menu of all items without dupes
// Use sets

function getMasterMenu(menus) {
    let masterMenu = new Set();
    menus.flat().forEach(menuItem => {
        masterMenu.add(menuItem);
    }); 
    return masterMenu;
}