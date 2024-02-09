class Game {
    constructor(
        {
            params = {
                gravity: 37000
            },
            objects = []
        } = {}
    ) {
        this.params = params;
        this.monitoring = {
            lastTime: 0,
            deltaTime: 0
        };

        this.scene = new Scene(this,
            {
                objects: objects
            }
        );
        this.graph = new Graph();

        requestAnimationFrame(
            this.run.bind(this)
        );
    }

    run(currentTime) {

        this.monitoring.deltaTime = (currentTime - this.monitoring.lastTime) / 1000
        this.monitoring.lastTime = currentTime;

        this.scene.update();
        this.graph.render(this.scene);

        requestAnimationFrame(
            this.run.bind(this)
        );
    }
}