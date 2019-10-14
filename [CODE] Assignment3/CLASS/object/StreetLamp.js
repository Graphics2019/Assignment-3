class StreetLamp extends DrawingObject {
    constructor(position, scale) {
        super(position, scale);
    }
    static GetVertexColor(VertexColor)
   {
      VertexColor.push(vec2(50, 0), vec4(100, 100, 100, 255));
        VertexColor.push(vec2(130, 0), vec4(255, 255, 255, 255));
        VertexColor.push(vec2(50, 900), vec4(100, 100, 100, 255));
        VertexColor.push(vec2(130, 900),vec4(255, 255, 255, 255));

      VertexColor.push(vec2(50, 0),vec4(100, 100, 100, 255));
      VertexColor.push(vec2(65, 0), vec4(127, 127, 127, 255));
        VertexColor.push(vec2(50, 900), vec4(10, 10, 10, 210));
        VertexColor.push(vec2(65, 900), vec4(127, 127, 127, 255));

      VertexColor.push(vec2(130,200), vec4(255, 255, 255, 255));
        VertexColor.push(vec2(260, 200), vec4(127,127, 127, 255));
        VertexColor.push(vec2(130, 270),vec4(255, 255, 255, 255));
        VertexColor.push(vec2(260, 270),  vec4(127,127, 127, 255));

      
      VertexColor.push(vec2(130,265), vec4(255, 255, 0, 200));
        VertexColor.push(vec2(190, 265), vec4(255, 255, 0, 200));
        VertexColor.push(vec2(130, 275),vec4(255, 255, 0, 200));
        VertexColor.push(vec2(190, 275), vec4(255, 255, 0, 255));
 
   }
    static GetDraw(drawlist) {
        drawlist.push([gl.TRIANGLE_STRIP, 0, 4]);
       drawlist.push([gl.TRIANGLE_STRIP, 4, 4]);
      drawlist.push([gl.TRIANGLE_STRIP, 8, 4]);
       drawlist.push([gl.TRIANGLE_STRIP, 12, 4]);}

    // 오브젝트가 처음 나타날 경우 Update() 전에 호출되는 함수
    Start() {
        this.z = 1000;
    }

    // 해당 오브젝트를 클릭할 경우 실행되는 함수
    onMouseClick() {
    }

    // 해당 오브젝트를 마우스로 누르고 있을 때 실행되는 함수(여러번 실행될 수 있음)
    onMousePress() {
    }
   ColorUpdate(colors) {
      colors.push(vec4(100, 100, 100, 255));
        colors.push(vec4(255, 255, 255, 255));
        colors.push(vec4(100, 100, 100, 255));
        colors.push(vec4(255, 255, 255, 255));

      colors.push(vec4(100, 100, 100, 255));
      colors.push(vec4(127, 127, 127, 255));
        colors.push(vec4(10, 10, 10, 210));
        colors.push(vec4(127, 127, 127, 255));

      colors.push(vec4(255, 255, 255, 255));
        colors.push(vec4(127,127, 127, 255));
        colors.push(vec4(255, 255, 255, 255));
        colors.push(vec4(127,127, 127, 255));
      
      if (Sky.instance.GlobalTime >= 9 && Sky.instance.GlobalTime < 19){
         colors.push(vec4(100, 100, 100, 200));
         colors.push(vec4(100, 100, 100, 200));
         colors.push(vec4(100, 100, 100, 200));
         colors.push(vec4(100, 100, 100, 255));
      }
      else {
         colors.push(vec4(255, 255, 0, 200));
         colors.push(vec4(255, 255, 0, 200));
         colors.push(vec4(255, 255, 0, 200));
         colors.push(vec4(255, 255, 0, 255));
      }
   }
    // 1/60초마다 불리는 함수
    Update() {
        var a = (1000 - this.position[0]) / 950 * 1.2;
        this.offsetcolor = vec4(a, a, a, 1);

      /*this.Move(vec2(1,0));
      if (this.position[0] >= 1000)
      {
         this.Move(vec2(-1000,0));
      }*/
    }
}