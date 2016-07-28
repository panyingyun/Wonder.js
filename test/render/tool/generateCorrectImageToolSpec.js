describe("generate correct image tool", function () {
    var sandbox;
    var tester;

    function body(wrapper){
        wrapper.load([
            ])
            .do(initSample);

        function initSample() {
            var director = wd.Director.getInstance();

            director.scene.addChild(createTriangle());
            director.scene.addChild(createRect());
            director.scene.addChild(createBox());
            director.scene.addChild(createSphere());
            director.scene.addChild(createConvexPolygon());

            director.scene.addChild(createCamera());

            director.start();
        }

        function createTriangle() {
            var material = wd.BasicMaterial.create();
            material.color = wd.Color.create("#888888");

            var geometry = wd.TriangleGeometry.create();
            geometry.material = material;
            geometry.width = 5;
            geometry.height = 5;


            var gameObject = wd.GameObject.create();
            gameObject.addComponent(geometry);

            gameObject.addComponent(wd.MeshRenderer.create());

            gameObject.transform.translate(-8, 8, 0);

            return gameObject;
        }

        function createRect() {
            var material = wd.BasicMaterial.create();
            material.color = wd.Color.create("#aaa123");

            var geometry = wd.RectGeometry.create();
            geometry.material = material;
            geometry.width = 5;
            geometry.height = 5;


            var gameObject = wd.GameObject.create();
            gameObject.addComponent(geometry);

            gameObject.addComponent(wd.MeshRenderer.create());

            gameObject.transform.translate(8, 8, 0);

            return gameObject;

        }

        function createBox() {
            var material = wd.BasicMaterial.create();
            material.color = wd.Color.create("rgb(1.0,0.0,1.0)");

            var geometry = wd.BoxGeometry.create();
            geometry.material = material;
            geometry.width = 5;
            geometry.height = 5;
            geometry.depth = 5;


            var gameObject = wd.GameObject.create();
            gameObject.addComponent(geometry);

            gameObject.addComponent(wd.MeshRenderer.create());

            gameObject.transform.translate(-8, -8, 0);

            return gameObject;

        }

        function createSphere() {
            var material = wd.BasicMaterial.create();
            material.color = wd.Color.create("rgb(0, 255, 255)");

            var geometry = wd.SphereGeometry.create();
            geometry.material = material;
            geometry.radius = 5;
            geometry.segments = 20;


            var gameObject = wd.GameObject.create();
            gameObject.addComponent(geometry);

            gameObject.addComponent(wd.MeshRenderer.create());

            gameObject.transform.translate(8, -8, 0);

            return gameObject;
        }

        function createConvexPolygon(){
            var material = wd.BasicMaterial.create();
            material.color = wd.Color.create("rgb(0, 255, 255)");

            var geometry = wd.ConvexPolygonGeometry.create();
            geometry.vertices.push(-5, 0, 0);
            geometry.vertices.push(0, 5, 0);
            geometry.vertices.push(5, 0, 0);
            geometry.vertices.push(0, -5, 0);
            geometry.material = material;


            var gameObject = wd.GameObject.create();
            gameObject.addComponent(geometry);

            gameObject.addComponent(wd.MeshRenderer.create());

            gameObject.transform.translate(18, 0, 0);

            return gameObject;
        }

        function createCamera() {
            var camera = wd.GameObject.create(),
                view = wd.Director.getInstance().view,
                cameraComponent = wd.PerspectiveCamera.create();

            cameraComponent.fovy = 60;
            cameraComponent.aspect = view.width / view.height;
            cameraComponent.near = 0.1;
            cameraComponent.far = 1000;

            var controller = wd.ArcballCameraController.create(cameraComponent);
            controller.distance = 20;

            camera.addComponent(controller);

            return camera;
        }


    }


    beforeEach(function (done) {
        sandbox = sinon.sandbox.create();

        tester = SceneTester.create(sandbox);

        renderTestTool.prepareContext();


        tester.execBody(body, done);
    });
    afterEach(function () {
        sandbox.restore();
    });

    it("generate correct image", function () {
        tester.generateBatchAt(
            [
                {
                    frameIndex:1,
                    imageName:"geometry_basic.png"
                },
            ]
        );
    });
});

