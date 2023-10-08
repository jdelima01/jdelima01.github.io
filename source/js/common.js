window.addEventListener('load', function() {
    setFooter();
    loadMEnu();
})


let setFooter =() =>{
    footerTexts.forEach(element => {
        let footerItem = document.createElement('span');
        footerItem.setAttribute('class', element[1]);
        footerItem.innerHTML = element[0] + '<br>';
        document.getElementById('footer').appendChild(footerItem);
    });

}

let footerTexts = [
    [
        'Black-Label',
        'bold',
    ], [
        'Web Development & Web Design : Juliano De Lima',
        'footerText',
    ], [
        '2023',
        'footerText',
    ],
];

let loadMEnu = () => {
    topMenuItems.forEach(element => {

        let topMenuItemContent = document.createElement('div');
        topMenuItemContent.setAttribute('class', 'topMenuItemContent');

        let topMenuItem = document.createElement('div');
        topMenuItem.setAttribute('class', 'topMenuItemText');
        topMenuItem.setAttribute('id', 'topMenuItem-' + element[0]);
        topMenuItem.setAttribute('datalink', element[1]);
        topMenuItem.setAttribute('onclick', 'menuClickTrigger(this)');

        let topmenuitemsvg = document.createElement('div');
        topmenuitemsvg.setAttribute('class', 'topMenuItemIcon');
        topmenuitemsvg.innerHTML = element[2];

        topMenuItem.innerHTML = element[0];
    
        topMenuItemContent.append(topmenuitemsvg);
        topMenuItemContent.append(topMenuItem);

        document.getElementById('topMenu').appendChild(topMenuItemContent);
    });

}