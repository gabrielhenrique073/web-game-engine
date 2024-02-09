class Graph {
    constructor(
        {
            width = window.innerWidth,
            height = window.innerHeight
        } = {}
    ) {
        // Create canvas
        this.canvas = document.createElement('canvas');
        this.canvas.width = width;
        this.canvas.height = height;
        document.body.append(this.canvas);

        // Retrive its context
        this.context = this.canvas.getContext('2d');
    }

    render(scene) {
        this.clear();
        this.draw(scene);
    }

    clear() {
        this.context.clearRect(
            0,
            0,
            this.canvas.width,
            this.canvas.height
        );
    }
    draw(scene) {

        this.context.fillStyle = '#3498db';
        this.context.fillRect(
            0,
            0,
            this.canvas.width,
            this.canvas.height
        );

        for (var i = 0; i < scene.objects.length; i++) {
            scene.objects[i].draw(this);
        }
    }
}