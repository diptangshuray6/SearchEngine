import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeallComponent } from './homeall.component';

describe('HomeallComponent', () => {
  let component: HomeallComponent;
  let fixture: ComponentFixture<HomeallComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomeallComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeallComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
