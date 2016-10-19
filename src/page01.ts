class page01 extends page{
    private picture01:egret.Bitmap;
    private picture02:egret.Bitmap;
    constructor(){
        super();
    }
    public draw():void{
        var bj01=this.createBitmapByName("page01bj_jpg");
        bj01.x=0;
        bj01.y=0;
        this.addChild(bj01);

        var Weichi01:egret.Bitmap=this.createBitmapByName("Weichi01_png");
        Weichi01.x=0;
        Weichi01.y=0;
        this.addChild(Weichi01);
        this.picture01=Weichi01;

        var Weichi02:egret.Bitmap=this.createBitmapByName("Weichi02_png");
        Weichi02.x=0;
        Weichi02.y=0;
        Weichi02.alpha=1;
        this.addChild(Weichi02);
        this.picture02=Weichi02;
    }
    public change():void{
            var tw = egret.Tween.get(this.picture01);
            var tw2=egret.Tween.get(this.picture02);
            tw.to({"alpha": 1}, 3000);
            tw2.to({"alpha": 0}, 3000);
            tw.wait(3000);
            tw2.wait(3000);
            tw.to({"alpha": 0}, 3000);
            tw2.to({"alpha": 1}, 3000);
            tw.wait(3000);
            tw2.wait(3000);
            tw.call(this.change,this);
    }
}