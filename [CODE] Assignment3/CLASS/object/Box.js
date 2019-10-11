class Box extends DrawingObject {
    constructor(position, scale) {
        super(position, scale);
    }
    // ���ý��� �÷��� ���ÿ� �Է�
   static GetVertexColor(VertexColor)
   {
      
      VertexColor.push(vec2(620, 900), vec4(237, 200, 137, 255));
        VertexColor.push(vec2(620, 730), vec4(214, 168, 134, 255));
        VertexColor.push(vec2(820, 920), vec4(237, 200, 137, 255));
        VertexColor.push(vec2(820, 750), vec4(214, 168, 134, 255));

      VertexColor.push(vec2(820, 920), vec4(214, 168, 134, 255));
        VertexColor.push(vec2(820, 750), vec4(214, 168, 134, 255));
        VertexColor.push(vec2(840, 835), vec4(214, 168, 134, 255));
        VertexColor.push(vec2(840, 680), vec4(214, 168, 134, 255));

      VertexColor.push(vec2(620, 730), vec4(198, 156, 131, 255));
        VertexColor.push(vec2(820, 750), vec4(198, 156, 131, 255));
        VertexColor.push(vec2(670, 670), vec4(198, 156, 131, 255));
        VertexColor.push(vec2(840, 680), vec4(198, 156, 131, 255));
      //�ڽ� ��
      VertexColor.push(vec2(700, 770), vec4(247, 221, 189, 230));
        VertexColor.push(vec2(730, 775), vec4(247, 221, 189, 255));
        VertexColor.push(vec2(700, 740), vec4(247, 221, 189, 230));
        VertexColor.push(vec2(730, 743),  vec4(247, 221, 189, 255));

        VertexColor.push(vec2(700, 740), vec4(247, 221, 189, 255));
        VertexColor.push(vec2(730, 743),  vec4(247, 221, 189, 200));
      VertexColor.push(vec2(740, 675), vec4(247, 221, 189, 255));
        VertexColor.push(vec2(770, 676), vec4(247, 221, 189, 200));

      //�ڽ� 2��°
      VertexColor.push(vec2(610, 700), vec4(237, 200, 137, 255));
        VertexColor.push(vec2(610, 600), vec4(214, 168, 134, 255));
        VertexColor.push(vec2(700, 720), vec4(237, 200, 137, 255));
        VertexColor.push(vec2(700, 620), vec4(214, 168, 134, 255));

      VertexColor.push(vec2(700, 720), vec4(214, 168, 134, 255));
        VertexColor.push(vec2(700, 620), vec4(214, 168, 134, 255));
        VertexColor.push(vec2(770, 690), vec4(214, 168, 134, 255));
        VertexColor.push(vec2(770, 600), vec4(214, 168, 134, 255));
   
      VertexColor.push(vec2(610, 600), vec4(198, 156, 131, 255));
        VertexColor.push(vec2(700, 620), vec4(198, 156, 131, 255));
        VertexColor.push(vec2(680, 580), vec4(198, 156, 131, 255));
        VertexColor.push(vec2(770, 600), vec4(198, 156, 131, 255));
      
      VertexColor.push(vec2(640, 590),  vec4(247, 221, 189, 255));
        VertexColor.push(vec2(650, 585),  vec4(247, 221, 189, 255));
        VertexColor.push(vec2(728, 613),  vec4(247, 221, 189, 255));
        VertexColor.push(vec2(738, 609),  vec4(247, 221, 189, 255));

      VertexColor.push(vec2(730, 640),  vec4(247, 221, 189, 255));
        VertexColor.push(vec2(740, 630),  vec4(247, 221, 189, 255));
        VertexColor.push(vec2(728, 613),  vec4(247, 221, 189, 255));
        VertexColor.push(vec2(738, 609),  vec4(247, 221, 189, 255));
      
   
   }
    static GetDraw(drawlist) {
      for (var i = 0; i<=36; i = i+4){
         drawlist.push([gl.TRIANGLE_STRIP, i, 4]);
      }
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
        this.offsetcolor = vec4(a,a, a, 1);
   
      /*this.Move(vec2(1,0));
      if (this.position[0] >= 1000)
      {
         this.Move(vec2(-1000,0));
      }*/
    }
}