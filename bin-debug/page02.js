var page02 = (function (_super) {
    __extends(page02, _super);
    function page02() {
        _super.call(this);
    }
    var d = __define,c=page02,p=c.prototype;
    p.draw = function () {
        var sky = this.createBitmapByName("page02bj_jpg");
        this.addChild(sky);
        sky.x = 0;
        sky.y = 0;
        var black = this.createBitmapByName("Black_png");
        this.addChild(black);
        black.anchorOffsetX = black.width / 2;
        black.anchorOffsetY = black.height / 2;
        black.x = 350 + black.width / 2;
        black.y = -50 + black.height / 2;
        this.picture_black = black;
        var white = this.createBitmapByName("White_png");
        this.addChild(white);
        white.anchorOffsetX = white.width / 2;
        white.anchorOffsetY = white.height / 2;
        white.x = 5 + white.width / 2;
        white.y = 100 + white.height / 2;
        this.picture_white = white;
        var white02 = this.createBitmapByName("White02_png");
        this.addChild(white02);
        white02.anchorOffsetX = white02.width / 2;
        white02.anchorOffsetY = white02.height / 2;
        white02.x = 350 + white02.width / 2;
        white02.y = 820 + white02.height / 2;
        this.picture_white02 = white02;
    };
    p.change = function () {
        var tw_black = egret.Tween.get(this.picture_black);
        var tw_white = egret.Tween.get(this.picture_white);
        var tw_white02 = egret.Tween.get(this.picture_white02);
        tw_black.to({ rotation: 360 }, 100000);
        tw_white.to({ rotation: 360 }, 100000);
        tw_white02.to({ rotation: 360 }, 100000);
        tw_white.call(this.change, this);
    };
    return page02;
}(page));
egret.registerClass(page02,'page02');
//# sourceMappingURL=page02.js.map