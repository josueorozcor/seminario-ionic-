import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-intro',
  templateUrl: './intro.page.html',
  styleUrls: ['./intro.page.scss'],
})
export class IntroPage implements OnInit {

  slideOpt = {
    initialSlide: 0,
    slidesPerView: 1,
    centeredSlides: true,
    speed: 400
  }

  slides = [
    {
      id: 0,
      title: "Spotify Red",
      subtitle: "Somos tu mejor opción",
      description: "No querrás parar de escuchar",
      icon: "musical-notes-outline",
      image: "assets/images/logorojo.jpg",
      alt: "imagen de logo"
    },
    {
      id: 1,
      title: "Bienvenido a spotify Red",
      subtitle: "La mejor app de música y mucho más",
      description: "Aquí encontrarás la mejor diversión",
      icon: "play-outline",
      image: "assets/images/musicar.jpg",
      alt: "imagen de musica"
    },
    {
      id: 2,
      title: "Adelante",
      subtitle: "Contamos con el mejor buscador ",
      description: "De todo internet",
      icon: "pause-outline",
      image: "assets/images/musicared.png",
      alt: "imagen de musica 2"
    }
  ]
  constructor(private router: Router, private storage: Storage) { 
    this.storage.create();
  }

  finish() {
    this.storage.set("intro", true);
    this.router.navigateByUrl("/login");
  }

  ngOnInit() {
  }

}
