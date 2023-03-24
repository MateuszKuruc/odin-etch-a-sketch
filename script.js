const container = document.querySelector('#container');


for (let i = 0; i < 256; i++) {
    const div = document.createElement('div');
div.style.border = '1px solid black'
div.style.margin = '0px';
div.style.gap = '0px';
div.style.minWidth = '50px';
div.style.minHeight = '50px';
container.appendChild(div)

} 
container.style.display = 'flex';
container.style.flexWrap = 'wrap';
container.style.width = '832px';
container.style.height = '832px';
container.style.margin = '0px';
container.style.gap = '0px';
container.style.border = '5px solid black';
