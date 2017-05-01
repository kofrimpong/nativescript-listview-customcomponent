import { Component, Input, OnInit } from '@angular/core';

@Component({
    selector: 'ItemDetailComponent',
    template: '<Label [text]="data" class="detail"></Label>'
})

export class ItemDetailComponent implements OnInit {

    @Input() name = '';
    @Input() role = 0;
    data;

    ngOnInit() {
        this.data = this.name + ' - ' + this.role;
    }
}