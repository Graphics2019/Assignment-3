class Sky extends DrawingObject {
    static instance;
    GlobalTime = 0;
    Speed = 5;
    HtmlBox;
    HtmlSpeed;
    constructor(position, scale) {
        super(position, scale); 
        Sky.instance = this;
        this.HtmlBox = document.getElementById("clock");
        this.HtmlSpeed = document.getElementById("clock_speed");
    }
	static GetVertexColor(VertexColor)
	{

    }

    static GetDraw(drawlist) {
        
    }
    Frame = 0;

    CreateObject(start, end, delay, func)
    {
        delay /= this.Speed;
        if (this.Frame % delay == 0)
        {
            if (start > end)
            {
                if (this.GlobalTime > start || this.GlobalTime < end)
                    func();
            }
            else {
                if (this.GlobalTime > start && this.GlobalTime < end)
                    func();
            }
        }
    }
    Update() {
        this.Speed = this.HtmlSpeed.value;
        this.Frame++;
        this.HtmlBox.value = this.GlobalTime.toFixed(2) + " H";
        this.GlobalTime += 0.01 * this.Speed;
        if (this.GlobalTime >= 24) this.GlobalTime -= 24;

        this.CreateObject(18,3,15,function(){
            DrawingObject.Instance(Star, vec2(1000, Math.random() * 500), vec2(0.03, 0.03))
        });
        this.CreateObject(6,16,100,function(){
            DrawingObject.Instance(Cloud, vec2(1100, Math.random() * 200 + 130), vec2(0.1 + Math.random() * 0.12, 0.1)).MoveY = false;
        });
    }
}
