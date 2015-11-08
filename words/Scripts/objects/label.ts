module objects {
    // LABEL CLASS ++++++++++++++++++++++++++++++++++++++++
    export class Label extends createjs.Text {
        // CONSTRUCTOR METHOD ++++++++++++++++++++++++++++++++
        constructor(labelString: string, labelFont: string, labelColor: string, x: number, y: number, centered: boolean) {
            super(labelString, labelFont, labelColor);

            this.x = x;
            this.y = y;

            if (centered) {
                this.regX = this.getBounds().width * 0.5;
                this.regY = this.getBounds().height * 0.5;
            }
        }
    }
}