window.onload = function()
{
    var canvas = document.getElementById("canvas"),
        context = canvas.getContext("2d"),
        width = canvas.width = window.innerWidth,
        height = canvas.height = window.innerHeight;

    context.translate(0, height / 2);
    context.scale(1, -1);
    var radius = 500.0;     
    for(var angle =0; angle < Math.PI * 2; angle += 0.05)
    {
        // Sin Wave.
        var x = angle * 200,
            y = Math.sin(angle) * 200;
                
        context.fillRect(x, y, 5, 5);

        var x = angle * 200,
        y = Math.cos(angle) * 200;

        context.fillRect(x, y, 5, 5);
        //context.beginPath();
        //context.moveTo(width * 0.5, height * 0.5);
        //context.lineTo(width * 0.5 + (Math.sin(angle) * radius), height * 0.5 + (Math.cos(angle) * radius));
        //context.stroke();
    }
};