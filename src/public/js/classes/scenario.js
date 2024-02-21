class Scenario {
    constructor(
        {
            transform = {
                x: 0,
                y: 0
            },
            scale = {
                x: 0,
                y: 0
            }
        } = {}
    ) {
        this.transform = new Vector(transform.x, transform.y);
        this.scale = new Vector(scale.x, scale.y);


        this.sprite = new Image();
        this.sprite.src = '/src/public/img/sprite.png';
    }
    update(game) {
        
    }
    draw(graph) {
        graph.context.drawImage(
            this.sprite, 
            617, 374,
            127, 81, 
            0, graph.canvas.height - 81, 
            127, 81
        );
        graph.context.drawImage(
            this.sprite, 
            617, 374,
            127, 81, 
            127 + 10, graph.canvas.height - 81, 
            127, 81
        );
        graph.context.drawImage(
            this.sprite, 
            617, 374,
            127, 81, 
            (127 + 10) * 2, graph.canvas.height - 81, 
            127, 81
        );
    }
}