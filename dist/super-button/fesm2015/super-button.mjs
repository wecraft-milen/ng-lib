import * as i0 from '@angular/core';
import { Injectable, Component, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

class SuperButtonService {
    constructor() { }
}
SuperButtonService.ɵfac = function SuperButtonService_Factory(t) { return new (t || SuperButtonService)(); };
SuperButtonService.ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: SuperButtonService, factory: SuperButtonService.ɵfac, providedIn: 'root' });
(function () {
    (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(SuperButtonService, [{
            type: Injectable,
            args: [{ providedIn: 'root' }]
        }], function () { return []; }, null);
})();

class SuperButtonComponent {
    constructor() { }
    ngOnInit() { }
}
SuperButtonComponent.ɵfac = function SuperButtonComponent_Factory(t) { return new (t || SuperButtonComponent)(); };
SuperButtonComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: SuperButtonComponent, selectors: [["lib-super-button"]], decls: 2, vars: 0, template: function SuperButtonComponent_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementStart(0, "button");
            i0.ɵɵtext(1, "super-button");
            i0.ɵɵelementEnd();
        }
    }, encapsulation: 2 });
(function () {
    (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(SuperButtonComponent, [{
            type: Component,
            args: [{ selector: 'lib-super-button', template: `<button>super-button</button>` }]
        }], function () { return []; }, null);
})();

class SuperButtonModule {
}
SuperButtonModule.ɵfac = function SuperButtonModule_Factory(t) { return new (t || SuperButtonModule)(); };
SuperButtonModule.ɵmod = /*@__PURE__*/ i0.ɵɵdefineNgModule({ type: SuperButtonModule });
SuperButtonModule.ɵinj = /*@__PURE__*/ i0.ɵɵdefineInjector({ imports: [CommonModule] });
(function () {
    (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(SuperButtonModule, [{
            type: NgModule,
            args: [{
                    declarations: [SuperButtonComponent],
                    imports: [CommonModule],
                    exports: [SuperButtonComponent],
                }]
        }], null, null);
})();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(SuperButtonModule, { declarations: [SuperButtonComponent], imports: [CommonModule], exports: [SuperButtonComponent] }); })();

/*
 * Public API Surface of super-button
 */

/**
 * Generated bundle index. Do not edit.
 */

export { SuperButtonComponent, SuperButtonModule, SuperButtonService };
//# sourceMappingURL=super-button.mjs.map
