class Bush extends DrawingObject {
    constructor(position, scale) {
        super(position, scale);
    }
    // ���ý��� �÷��� ���ÿ� �Է�
	static GetVertexColor(VertexColor)
	{
		VertexColor.push(vec2(0, 470), vec4(181, 230, 29, 255));
        VertexColor.push(vec2(150, 470), vec4(151, 193, 21, 255));
        VertexColor.push(vec2(75, 400), vec4(151, 193, 21, 255));

        VertexColor.push(vec2(500, 100), vec4(181, 230, 29, 255));
        VertexColor.push(vec2(200, 400), vec4(99, 191, 23, 255));
        VertexColor.push(vec2(800, 400), vec4(99, 191, 23, 255));

        VertexColor.push(vec2(500, 300), vec4(99, 191, 23, 255));
        VertexColor.push(vec2(100, 600), vec4(52, 168, 23, 255));
        VertexColor.push(vec2(900, 600), vec4(52, 168, 23, 255));
	}
    static GetDraw(drawlist) {
        drawlist.push([gl.TRIANGLES, 0, 3]);
        drawlist.push([gl.TRIANGLES, 3, 3]);
        drawlist.push([gl.TRIANGLES, 6, 3]);
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