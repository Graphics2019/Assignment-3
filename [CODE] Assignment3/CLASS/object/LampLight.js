class LampLight extends DrawingObject {
  constructor(position, scale) {
    super(position, scale);
  }
  static GetVertexColor(VertexColor) {
    VertexColor.push(vec2(130, 900), vec4(255, 230, 153, 120));
    VertexColor.push(vec2(130, 200), vec4(255, 225, 0, 180));
    VertexColor.push(vec2(700, 900), vec4(255, 230, 153, 180));
    
    VertexColor.push(vec2(130, 200), vec4(255, 225, 0, 33));
    VertexColor.push(vec2(700, 900), vec4(255, 230, 0, 33));
    
    VertexColor.push(vec2(150, 200), vec4(255, 225, 0, 0));
    VertexColor.push(vec2(720, 900), vec4(255, 230, 0, 0));
  }
  static GetDraw(drawlist) {
    drawlist.push([gl.TRIANGLES, 0, 3]);
    drawlist.push([gl.TRIANGLE_STRIP, 3, 4]);
  }

  // ������Ʈ�� ó�� ��Ÿ�� ��� Update() ���� ȣ��Ǵ� �Լ�
  Start() {
  }

  // �ش� ������Ʈ�� Ŭ���� ��� ����Ǵ� �Լ�
  onMouseClick() {
  }

  // �ش� ������Ʈ�� ���콺�� ������ ���� �� ����Ǵ� �Լ�(������ ����� �� ����)
  onMousePress() {
  }

  // 1/60�ʸ��� �Ҹ��� �Լ�
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