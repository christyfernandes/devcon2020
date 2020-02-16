import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-staff-list',
  templateUrl: './staff-list.component.html',
  styleUrls: ['./staff-list.component.scss']
})
export class StaffListComponent implements OnInit {
  public defaultProfileImg = './assets/images/default-profile.png';
  public  teacherList = [
    {
      name: 'Jo Ann Fernandes',
      subjects: ['class 10', 'class 6'],
      image: 'https://pngdrive.com/wp-content/uploads/edd/2019/08/pngdrive-1000x1000-Teacher-27.jpg',
      selected: false
    },
    {
      name: 'Kate Winslet',
      subjects: ['class 10', 'class 6'],
      image: 'https://images.iphonephotographyschool.com/24755/portrait-photography.jpg',
      selected: false
    },
    {
      name: 'Celine Dion',
      subjects: ['class 10', 'class 6'],
      image: 'https://i.pinimg.com/originals/9e/c4/a7/9ec4a7d81442d0183cf332ce959dc310.jpg',
      selected: false
    },
    {
      name: 'Taylor Swift',
      subjects: ['class 10', 'class 6'],
      image: 'https://g2.ravendev.lt/wp-content/uploads/2019/05/100-Beautiful-girls-wallpapers-55-2.jpg',
      selected: true
    },
    {
      name: 'Angelina Julie',
      subjects: ['class 10', 'class 6'],
      image: 'https://kelicommheadshots.com/wp-content/uploads/2019/02/Jen-for-Social-Media-2.jpg',
      selected: false
    },
    {
      name: 'Asha Kiran ',
      subjects: ['class 10', 'class 6'],
      image: 'https://odishatv.in/wp-content/uploads/2017/08/teachers.png',
      selected: false
    },
    {
      name: 'Emma Watson',
      subjects: ['class 10', 'class 6', 'class 8'],
      image: '',
      selected: false
    },
    {
      name: 'Jo Ann Fernandes',
      subjects: ['class 10', 'class 6', 'class 8', 'class 9'],
      image: 'https://g2.ravendev.lt/wp-content/uploads/2019/05/100-Beautiful-girls-wallpapers-55-2.jpg',
      selected: false
    },
    {
      name: 'Emma Watson',
      subjects: ['class 10', 'class 6', 'class 8'],
      image: 'https://images.iphonephotographyschool.com/24755/portrait-photography.jpg',
      selected: false
    },
    {
      name: 'Emma Watson',
      subjects: ['class 10', 'class 6', 'class 8'],
      image: 'https://i.pinimg.com/originals/9e/c4/a7/9ec4a7d81442d0183cf332ce959dc310.jpg',
      selected: false
    }

    
  ];

  constructor() { }

  ngOnInit() {
  }

  public toogleSelected(teacher) {
    this.teacherList.map( t => {
      t.selected = false;
    });
    teacher.selected = !teacher.selected;
  }

}
