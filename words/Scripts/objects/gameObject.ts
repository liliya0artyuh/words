module objects {
    export class gameObject{
        //PUBLIC PROPERTIES++++++++++++++++++++++++++++++++++++++++++++++++
        public width: number;
        public height: number;
        public isColliding: boolean = false;
        public soundString: string = "";

        //PROTECTED PROPERTIES +++++++++++++++++++++++++++++++++++++++++
        protected dx: number;
        protected dy: number;

        //CONSTRUCTOR++++++++++++++++++++++++++++++++++++++++++++++++++++++++
        constructor() {
        }
    }
}