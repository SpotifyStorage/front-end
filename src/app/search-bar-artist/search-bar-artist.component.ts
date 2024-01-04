import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import { Observable, map, of } from 'rxjs';
import { CommonModule } from '@angular/common';
import { ArtistSimplifiedDto } from '../models/artist-simplified.dto';
import { FormsModule } from '@angular/forms';

@Component({
    selector: 'app-search-bar-artist',
    standalone: true,
    imports: [MatSlideToggleModule, MatAutocompleteModule, CommonModule, FormsModule],
    templateUrl: './search-bar-artist.component.html',
    styleUrl: './search-bar-artist.component.css'
})
export class SearchBarArtistComponent {
    artistsList$: Observable<ArtistSimplifiedDto[]> = of([])
    artistName = ''

    constructor(
        private http: HttpClient
    ) { }

    get() {
        this.artistsList$ = this.http
            .get<ArtistSimplifiedDto[]>(`http://localhost:3000/artist/search?artistName=${this.artistName}`)
            .pipe(
                map(x => x)
            )
        // .subscribe(playcountsData => {
        //     console.log(playcountsData.data.playcount)
        // })
    }


}
