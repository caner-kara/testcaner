import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  // tslint:disable-next-line:variable-name
  images: any[] = [
    {
      id : 1,
      yol : 'https://i4.hurimg.com/i/hurriyet/75/750x422/5c3a3cbdc03c0e0fa46e89da.jpg'
    },
    {
      id : 2,
      yol : 'https://www.emlakdanismanlari.com/wp-content/uploads/2019/01/insaat.jpg'
    },
    {
      id : 3,
      yol : 'https://imgfinans.milliyet.com.tr/i/haber/f_5_419311245521.jpg'
    },
    {
      id : 4,
      yol : 'https://www.veligrup.com.tr/img/veli/insaat-slider-5.jpg'
    },
    {
      id : 5,
      yol : 'https://www.ataseven.com.tr/themes/base/assets/imgs/insaat-giris-foto.png'
    },
    {
      id : 6,
      yol : 'https://www.emlakdanismanlari.com/wp-content/uploads/2019/01/insaat.jpg'
    },
    {
      id : 7,
      yol : 'https://imgfinans.milliyet.com.tr/i/haber/f_5_419311245521.jpg'
    },
    {
      id : 8,
      yol : 'https://www.veligrup.com.tr/img/veli/insaat-slider-5.jpg'
    },
    {
      id : 9,
      yol : 'https://www.ataseven.com.tr/themes/base/assets/imgs/insaat-giris-foto.png'
    }
  ];
  responsiveOptions: any[] = [
    {
      breakpoint: '1024px',
      numVisible: 5
    },
    {
      breakpoint: '768px',
      numVisible: 3
    },
    {
      breakpoint: '560px',
      numVisible: 1
    }
  ];
  constructor() { }

  ngOnInit() {
  }

}
