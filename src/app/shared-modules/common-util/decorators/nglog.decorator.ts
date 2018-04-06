export function NgLog(environment): ClassDecorator {
    return function (constructor: any) {
        if (!environment.production) {
            // You can add/remove events for your needs
            const LIFECYCLE_HOOKS = [
                'ngOnInit',
                'ngOnChanges',
                'ngAfterViewInit',
                'ngOnDestroy'
            ];
            const component = constructor.name;

            LIFECYCLE_HOOKS.forEach(hook => {
                const original = constructor.prototype[hook];

                constructor.prototype[hook] = function (...args) {
                    console.log(`%c ${component} - ${hook}`, `color: #4CAF50; font-weight: bold`, ...args);
                    const result = original && original.apply(this, args);
                };
            });
        }
    };
}

