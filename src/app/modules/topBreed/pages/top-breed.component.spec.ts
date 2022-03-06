import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopBreedComponent } from './top-breed.component';

describe('TopBreedComponent', () => {
  let component: TopBreedComponent;
  let fixture: ComponentFixture<TopBreedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TopBreedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TopBreedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
