import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DescripcionProblemaComponent } from './descripcion-problema.component';

describe('DescripcionProblemaComponent', () => {
  let component: DescripcionProblemaComponent;
  let fixture: ComponentFixture<DescripcionProblemaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DescripcionProblemaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DescripcionProblemaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
