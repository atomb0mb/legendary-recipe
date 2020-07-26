import {Directive, OnInit, HostListener, HostBinding, ElementRef } from '@angular/core';

@Directive({
    selector: '[appDropDown]'
})

export class DropdownDirective implements OnInit{
    @HostBinding('class.open') isOpen = false;

    // @HostListener('click') toggleOpen() {
    //     this.isOpen = !this.isOpen;
    // }

    // Closing the Dropdown From Anywhere
    
    @HostListener('document:click', ['$event']) toggleOpen(event: Event) {
        this.isOpen = this.elRef.nativeElement.contains(event.target) ? !this.isOpen : false;
    }

    constructor(private elRef: ElementRef){

    }


    ngOnInit(){

    }
}