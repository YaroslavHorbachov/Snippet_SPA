import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {HttpClientModule} from '@angular/common/http';
import {AppComponent} from './app.component';
import {ResumeComponent} from './resume/resume.component';
import {PostListComponent} from './post-list/post-list.component';
import {PostComponent} from './post-list/post/post.component';
import {AboutComponent} from './about/about.component';
import {DataServiceService} from './data-service.service';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {BlacklistService} from './blacklist.service';
import {BlockListInterface} from './blocklist.interface';
import {BlackListNodeService} from './black-list-node.service';
import {API_KEY, API_URL, YoutubeService} from './youtube.service';
import { YoutubeMonitorComponent } from './youtube-monitor/youtube-monitor.component';
import { YoutubeInputBoxComponent } from './youtube-input-box/youtube-input-box.component';
import {Router, RouterModule, Routes} from '@angular/router';
import {HashLocationStrategy, LocationStrategy} from '@angular/common';
import { SpotifyMusicComponent } from './spotify-music/spotify-music.component';
import { TrackComponent } from './spotify-music/track/track.component';
import { AlbumComponent } from './spotify-music/album/album.component';
import { ArtistComponent } from './spotify-music/artist/artist.component';
import {API_KEY_SPOTIFY, API_URL_SPOTIFY} from './spotify-music/spotify.service';

export const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'resume', redirectTo: 'home'},
  {path: 'contact', redirectTo: 'about'},
  {path: 'home', component: ResumeComponent},
  {path: 'posts/:id', component: PostListComponent},
  {path: 'about', component: AboutComponent},
  {path: '*', redirectTo: 'home'}];

@NgModule({
  declarations: [
    AppComponent,
    ResumeComponent,
    PostListComponent,
    PostComponent,
    AboutComponent,
    YoutubeMonitorComponent,
    YoutubeInputBoxComponent,
    SpotifyMusicComponent,
    TrackComponent,
    AlbumComponent,
    ArtistComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [
    DataServiceService,
    BlackListNodeService,
    YoutubeService,
    {provide: 'API_KEY', useValue: API_KEY},
    {provide: 'API_URL', useValue: API_URL},
    {provide: 'API_KEY_SPOTIFY', useValue: API_KEY_SPOTIFY},
    {provide: 'API_URL_SPOTIFY', useValue: API_URL_SPOTIFY},
    {provide: 'BlockList', useValue: ['Cat', 'Dog', 'Mouse']},
    {
      provide: BlacklistService, useFactory() {

        const blockImplementation: BlockListInterface = {
          blockListLogger: (obj => {
            const keys = Object.keys(obj);
            const values = Object.values(obj);
            keys
              .forEach(key => values
                .forEach(value => console.log(`This is key ${key} have value ${value}`)));
          })
        };
        return new BlacklistService(blockImplementation);
      }
    }
  ],
  bootstrap: [AppComponent]
})

export class AppModule {
}
