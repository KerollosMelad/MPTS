import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-services-section',
  templateUrl: './services-section.component.html',
  styleUrls: ['./services-section.component.scss']
})
export class ServicesSectionComponent implements OnInit {
  images: string[] = [
    '../../../assets/maintaince services.jpg',
    '../../../assets/sliding gates.jpg',
    '../../../assets/security bollards.jpg',
    '../../../assets/rolling shutters.png',
    '../../../assets/security turnstiles.jpg',
    '../../../assets/Automatic garage doors.png',
    '../../../assets/gate barriers.jpg',
    '../../../assets/Automatic revolving doors.jpg',
    '../../../assets/Automatic sliding doors.jpg',
    '../../../assets/acess control system.jpg'
  ];
  captions: string[] = ['Maintenance Services', 'Sliding Gates', 'Security Bollards', 'Rolling Shutters', 'Security Turnstiles', 'Automatic Garage Doors', 'Gate Barriers', 'Automatic Revolving Doors', 'Automatic Sliding Doors', 'Access Control'];
  selectedImageIndex: number = 0;
  selectedCaption: string;
  texts: string[] = [
    'MPTS repairs and fixes all types of gate, garage and doors. We fix motors and provide maintenance services in the entrance automation feild.',
    'With an automated sliding gate, everything is more comfortable: no effort, all it takes is a click to open and close the gate, without getting out of the car. Simplify your life and add more value to your home.',
    'Bollards can be installed in a variety of different applications, are robust and a high security method of preventing vehicular access. Our range includes Automatic, retractable & fixed Bollards.',
    'Shutter Systems offer many benefits over traditional window closure options. Shutters can be made to fit almost any opening',
    'MPTS supply and maintain automatic turnstiles, access control and entry systems for clients who require high quality entrance control and security systems.',
    'Smart designs of the garage doors save lots of space for the users. We have doors with vertical openings as well for a closed space. For wide sprawling space, we have giant size doors to cover the whole length of the entrance. The operation and designs are also motivated towards the longer preservation of the door and the motors.',
    'designed to professionally control every type of access: gate barriers, car park lock, parking guidance and management systems which are used in all types of small or large public facilities.',
    'Convenient and secure revolving doors  Automatic rotating doors are an ideal solution for energy efficiency, convenience and security. With everything from high capacity to security revolving doors, our designs offer smooth traffic flow',
    'Automatic sliding doors are mostly used in busy areas and effective two-way traffic through a single entry. Sliding doors usually These doors should be equipped with an emergency swing feature to ensure code compliance. Automatic electric door is individual solutions for today’s living requirements.offering an outstanding level of safety.',
    'The automatic doors can be integrated with access control systems, in hospitals and banks, the ID cards are usually used as access cards. The automatic doors can be paired with access control systems like coded keypads, UHF readers and biometric scanners. This secures the area from unauthorised access.'

  ];
  constructor() { }


  ngOnInit(): void {
  }

  get selectedImage(): string {
    return this.captions[this.selectedImageIndex];
  }

  get selectedImageSrc(): string {
    return this.images[this.selectedImageIndex];
  }

  get selectedImageText(): string {
    return this.texts[this.selectedImageIndex];
  }

  showPreviousImage(): void {
    this.selectedImageIndex = (this.selectedImageIndex - 1 + this.images.length) % this.images.length;
  }

  showNextImage(): void {
    this.selectedImageIndex = (this.selectedImageIndex + 1) % this.images.length;
  }

  onImageClick(imageSrc: string): void {
    this.selectedImageIndex = this.images.indexOf(imageSrc);
  }

}
