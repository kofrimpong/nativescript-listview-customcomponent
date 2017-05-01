"use strict";
var core_1 = require("@angular/core");
var ItemDetailComponent = (function () {
    function ItemDetailComponent() {
        this.name = '';
        this.role = 0;
    }
    ItemDetailComponent.prototype.ngOnInit = function () {
        this.data = this.name + ' - ' + this.role;
    };
    return ItemDetailComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], ItemDetailComponent.prototype, "name", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], ItemDetailComponent.prototype, "role", void 0);
ItemDetailComponent = __decorate([
    core_1.Component({
        selector: 'ItemDetailComponent',
        template: '<Label [text]="data" class="detail"></Label>'
    })
], ItemDetailComponent);
exports.ItemDetailComponent = ItemDetailComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaXRlbS1kZXRhaWwuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiaXRlbS1kZXRhaWwuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxzQ0FBeUQ7QUFPekQsSUFBYSxtQkFBbUI7SUFMaEM7UUFPYSxTQUFJLEdBQUcsRUFBRSxDQUFDO1FBQ1YsU0FBSSxHQUFHLENBQUMsQ0FBQztJQU10QixDQUFDO0lBSEcsc0NBQVEsR0FBUjtRQUNJLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLElBQUksR0FBRyxLQUFLLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQztJQUM5QyxDQUFDO0lBQ0wsMEJBQUM7QUFBRCxDQUFDLEFBVEQsSUFTQztBQVBZO0lBQVIsWUFBSyxFQUFFOztpREFBVztBQUNWO0lBQVIsWUFBSyxFQUFFOztpREFBVTtBQUhULG1CQUFtQjtJQUwvQixnQkFBUyxDQUFDO1FBQ1AsUUFBUSxFQUFFLHFCQUFxQjtRQUMvQixRQUFRLEVBQUUsOENBQThDO0tBQzNELENBQUM7R0FFVyxtQkFBbUIsQ0FTL0I7QUFUWSxrREFBbUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6ICdJdGVtRGV0YWlsQ29tcG9uZW50JyxcclxuICAgIHRlbXBsYXRlOiAnPExhYmVsIFt0ZXh0XT1cImRhdGFcIiBjbGFzcz1cImRldGFpbFwiPjwvTGFiZWw+J1xyXG59KVxyXG5cclxuZXhwb3J0IGNsYXNzIEl0ZW1EZXRhaWxDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG5cclxuICAgIEBJbnB1dCgpIG5hbWUgPSAnJztcclxuICAgIEBJbnB1dCgpIHJvbGUgPSAwO1xyXG4gICAgZGF0YTtcclxuXHJcbiAgICBuZ09uSW5pdCgpIHtcclxuICAgICAgICB0aGlzLmRhdGEgPSB0aGlzLm5hbWUgKyAnIC0gJyArIHRoaXMucm9sZTtcclxuICAgIH1cclxufSJdfQ==