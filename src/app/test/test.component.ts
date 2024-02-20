import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { lastValueFrom, map, of } from 'rxjs';

@Component({
    selector: 'app-test',
    standalone: true,
    imports: [FormsModule, CommonModule],
    templateUrl: './test.component.html',
    styleUrl: './test.component.css'
})
export class TestComponent {

    currentArtistPlaycount$ = of(0)

    constructor (
        private http: HttpClient
    ) {}

    callApi(trackId: string) {
        this.currentArtistPlaycount$ = this.http
            .get<{success: string, data: PlaycountDto}>(`http://localhost:3000/playcount/track/latest?trackId=${trackId}`)
            .pipe(
                map( x => x.data.playcount )
            )
            // .subscribe(playcountsData => {
            //     console.log(playcountsData.data.playcount)
            // })
    }
}


export interface PlaycountDto {
    uri: string;
    playcount: number;
    date: number;
}