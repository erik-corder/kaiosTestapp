class example extends Phaser.Scene{
    constructor() {
        super({key:"example", active:true});
    }

    preload(){
        this.load.image('GFS','assets/ICON_IMAGE_3D_Motor_race.png');

        this.input.keyboard.on('keyup_UP',function(event){
            this.image.y -= 10;
        },this);

        this.key_LEFT =  this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.LEFT);
    }

    create(){
        this.image = this.add.image(120,180,'GFS');
    }

    update(delta){
        if(this.key_LEFT.isDown)
            this.image.x--;
    }
}