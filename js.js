// const moveableImage=document.getElementById('moveable-image');
// moveableImage.addEventListener('mouseenter',()=>{
// moveableImage.style.transform='translate(20px,20px)';
// });
// moveableImage.addEventListener('mouseleave',()=>
// {
// moveableImage.style.transform='translate(0px,0px)'
// });
document.addEventListener('DOMContentLoaded',function()
{
    const image=document.querySelector('.moving-image');
    const container=document.querySelector('.image-container');
    container.addEventListener('mouseleave',function(event)
    {
        const rect=container.getBoundingClientRect();
        const x=event.clientX-rect.left;
        const y=event.clientY-rect.top;

        const centerX=rect.width/2;//gives the position of the mouse pointer relative to the container
        const centerY=rect.height/2;

        const moveX=(x-centerX)/centerX*8;
        const moveY=(y-centerY)/centerY*8;
        
        image.style.transform=`translate(${moveX}px,${moveY}px)`;
    });
    container.addEventListener('mousemove',function()
    {
    image.style.transform=`none`;
    });
});
// clientX and clientY provides the x and y coordinates of the mouse pointer relative to the browser area(viewport)
//moveX and moveY are used to calculate howmuch image should be moved
function getRandomColer()
{
    var avoidedcolors=['#008000','#FFFFFF','#FFFF00'];
    var randomcolor;
    do{
     randomcolor='#'+Math.floor(Math.random()*16777215).toString(16);
    }while(avoidedcolors.includes(randomcolor));
    return randomcolor;
}
function changeColor()
{
    
    var color=getRandomColer();
    document.documentElement.style.setProperty('--bg-color',color);
}
