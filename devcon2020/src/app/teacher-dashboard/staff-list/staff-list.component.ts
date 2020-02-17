import { Component, OnInit } from '@angular/core';
import {SLIDE_UP_DOWN, FLYIN, APPEAR_DOWN, CARD_ANIMATION} from '../../app-animations';
import { ThemeService } from 'src/app/theme/theme.service';

@Component({
  selector: 'app-staff-list',
  templateUrl: './staff-list.component.html',
  styleUrls: ['./staff-list.component.scss'],
  animations: [
    SLIDE_UP_DOWN, FLYIN, APPEAR_DOWN, CARD_ANIMATION
  ]
})
export class StaffListComponent implements OnInit {
  public defaultProfileImg = './assets/images/default-profile.png';
  public  teacherList = [
    {
      name: 'Jo Ann Fernandes',
      subjects: ['class 3', 'EVS', 'class 4', 'Social Studies'],
      image: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?h=350&auto=compress&cs=tinysrgb',
      selected: false
    },
    {
      name: 'Kate Winslet',
      subjects: ['class 10', 'class 6'],
      image: 'https://images.pexels.com/photos/308249/pexels-photo-308249.jpeg?h=350&auto=compress&cs=tinysrgb',
      selected: false
    },
    {
      name: 'Celine Dion',
      subjects: ['class 10', 'Socail', 'class 8', 'English'],
      image: 'https://images.pexels.com/photos/247917/pexels-photo-247917.jpeg?h=350&auto=compress&cs=tinysrgb',
      selected: false
    },
    {
      name: 'Taylor Swift',
      subjects: ['class 10', 'class 6'],
      image: 'https://g2.ravendev.lt/wp-content/uploads/2019/05/100-Beautiful-girls-wallpapers-55-2.jpg',
      selected: false
    },
    {
      name: 'Angelina Julie',
      subjects: ['Maths', 'class 6', 'Science'],
      image: 'https://images.pexels.com/photos/449734/pexels-photo-449734.jpeg?h=350&auto=compress&cs=tinysrgb',
      selected: false
    },
    {
      name: 'Asha Kiran ',
      subjects: ['class 10', 'class 6'],
      image: 'https://images.pexels.com/photos/458718/pexels-photo-458718.jpeg?h=350&auto=compress&cs=tinysrgb',
      selected: false
    },
    {
      name: 'Emma Watson',
      subjects: ['Maths', 'class 6', 'Science'],
      image: 'https://images.pexels.com/photos/428328/pexels-photo-428328.jpeg?h=350&auto=compress&cs=tinysrgb',
      selected: false
    },
    {
      name: 'Arden Dean',
      subjects: ['class 10', 'Socail', 'class 8', 'English'],
      image: 'https://images.pexels.com/photos/604146/pexels-photo-604146.jpeg?h=350&auto=compress&cs=tinysrgb',
      selected: false
    },
    {
      name: 'Angelina Winn',
      subjects: ['class 10', 'class 6', 'class 8'],
      image: 'https://images.pexels.com/photos/672445/pexels-photo-672445.jpeg?h=350&auto=compress&cs=tinysrgb',
      selected: false
    },
    {
      name: 'Oscar Thomsen',
      subjects: ['Maths', 'class 6', 'Science'],
      image: 'https://images.pexels.com/photos/274595/pexels-photo-274595.jpeg?h=350&auto=compress&cs=tinysrgb',
      selected: false
    },
    {
      name: 'Oscar Thomsen',
      subjects: ['Maths', 'class 6', 'Science'],
      image: '',
      selected: false
    }
  ];

  constructor(public themeService: ThemeService) { }

  ngOnInit() {
  }

  public toogleSelected(teacher) {
    this.teacherList.map( t => {
      t.selected = false;
    });
    teacher.selected = !teacher.selected;
  }

  toggleTheme() {
    if (this.themeService.isDarkTheme()) {
      this.themeService.setLightTheme();
    } else {
      this.themeService.setDarkTheme();
    }

    // this.setLightbulb();
  }

}
