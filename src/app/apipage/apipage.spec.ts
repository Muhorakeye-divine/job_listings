import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Apipage } from './apipage';

describe('Apipage', () => {
  let component: Apipage;
  let fixture: ComponentFixture<Apipage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Apipage]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Apipage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
