class Character {
    constructor(
        {
            transform = {
                x: 0,
                y: 0
            },
            scale = {
                x: 0,
                y: 0
            },
            physics = {
                weight: 60,
                acceleration: 0,
                velocity: 0,
                maximumVelocity: 400,
                force: 400,
            }
        } = {}
    ) {
        this.transform = new Vector(transform.x, transform.y);
        this.scale = new Vector(scale.x, scale.y);
        this.physics = {
            weight: physics.weight,
            acceleration: physics.acceleration,
            velocity: physics.velocity,
            maximumVelocity: physics.maximumVelocity,
            force: physics.force,
        };

        addEventListener('keydown', this.onKeyDown.bind(this));
    }
    update(game) {

        // Calculate acceleration due to gravity
        this.physics.acceleration = game.params.gravity / this.physics.weight;

        // Update velocity based on acceleration
        if(this.physics.velocity < this.physics.maximumVelocity)
            this.physics.velocity += this.physics.acceleration * game.monitoring.deltaTime;
        

        // Update position based on velocity
        this.transform.y += this.physics.velocity * game.monitoring.deltaTime;
    }
    draw(graph) {
        graph.context.fillStyle = '#f1c40f';
        graph.context.fillRect(this.transform.x, this.transform.y, this.scale.x, this.scale.y);
    }

    onKeyDown(e) {
        if (e.key == 'w') {
            this.physics.velocity -= this.physics.velocity + this.physics.force;
        }
    }
}