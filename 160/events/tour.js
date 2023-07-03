AFRAME.registerComponent("tour", {
    schema: {
      state: { type: "string", default: "places-list" },
      selectedCard: { type: "string", default: "#card1" },
      zoomAspectRatio: { type: "number", default: 1 }
    },
    createPlace: function() {
        const details = {
            garden: {
                position: { x: 20, y: -4.5, z: -5.5},
                rotation: { x: 0, y: -90, z: 0},
                src: "./assets/thumbnails/garden.jpg",
                title: "Garden",
                id: "garden"
            },
            main_gate: {
                position: { x: 4.6, y: -5.5, z: 25},
                rotation: { x: 180, y: 0, z: 0 },
                src: "./assets/thumbnails/main_gate.jpg",
                title: "Main_Gate",
                id: "main_gate"
            },
            home: {
                position: { x: -9, y: 34, z: -100},
                rotation: { x: 0, y: 0, z: 0},
                src: "./assets/thumbnails/home.png",
                title: "My Home",
                id: "home"
            }
        };

        for (var key in details) {
            const item = details[key];
            //Thumbnail Element 
            const thumbnail = this.createThumbNail(item);
            // Title
            const title = this.createTitleEl(item);
            thumbnail.appendChild(title);
            this.placeContainer.appendChild(thumbnail);
        }
    },
    createThumbNail: function(item) {
        const entityEl = document.createElement("a-entity");
        const id = `place-${item.id}`;
        entityEl.setAttribute("visible", true);
        entityEl.setAttribute("id", id);
        entityEl.setAttribute("geometry", {
            primitive: "circle",
            radius: 3
        });
        entityEl.setAttribute("position", item.position);
        entityEl.setAttribute("rotation", item.rotation);
        entityEl.setAttribute("material", { src: item.src, opacity: 0.6 });
        entityEl.setAttribute("cursor-listener", {});
        return entityEl;
    },
    }, 
    
  );
  