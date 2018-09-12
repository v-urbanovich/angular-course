import { Component, Input, OnInit } from '@angular/core';

@Component({
    selector: 'uu-app-social',
    templateUrl: './social.component.html',
    styleUrls: ['./social.component.scss']
})
export class SocialComponent {

    @Input()
    public info: ISocial;

}
