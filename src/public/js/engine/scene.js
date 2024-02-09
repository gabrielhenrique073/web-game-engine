class Scene {
    constructor(
        game,
        {
            objects = []
        } = {}
    ) {
        this.game = game;
        this.objects = objects;
    }

    update() {
        for (var i = 0; i < this.objects.length; i++) {
            this.objects[i].update(this.game);
        }
    }
}