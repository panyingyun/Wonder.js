/// <reference path="../../definitions.d.ts"/>
module Engine3D {
    export class EventDispatcher {
        public static create() {
            var obj = new this();

            return obj;
        }

        //private _eventBinder: EventBinder = null;
        //private _eventRegister:EventRegister = null;

        constructor() {
            //this._eventBinder = binder;
            //EventRegister.getInstance() = register;
        }

        //dispatch in eventBinder->eventList


        //public setBubbleParent(target:GameObject, parent:any) {
        //    EventRegister.getInstance().setBubbleParent(target, parent);
        //}

        public trigger(event:Event):void;
        public trigger(target:GameObject, event:Event):void;

        public trigger(args) {
            if(arguments.length === 1){
                let event = arguments[0],
                    eventCategory = event.type;

                FactoryEventHandler.createEventHandler(eventCategory)
                    .trigger(event);
            }
            else if(arguments.length === 2){
                let target = arguments[0],
                    event = arguments[1],
                    eventCategory = event.type;

                FactoryEventHandler.createEventHandler(eventCategory)
                    .trigger(target, event);
            }
        }

        /**
         * transfer event up
         * @param target
         * @param eventObject
         */
        public emit(target:GameObject, eventObject:Event) {
            var parent:GameObject = null;

            eventObject.phase = EventPhase.EMIT;

            this.trigger(target, eventObject);

            parent = this._getParent(target);
            while (parent) {
                //this.trigger(target, eventObject);
                this.trigger(parent, eventObject);

                parent = this._getParent(parent);
            }
        }

        /**
         * transfer event down
         * @param target
         * @param eventObject
         */
        public broadcast(target:GameObject, eventObject:Event) {
        }

       private _getParent(target:GameObject):GameObject {
            var parent = target.bubbleParent;

            return parent ? parent : target.parent;
        }
    }
}
