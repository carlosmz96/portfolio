import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EstudiosCertComponent } from './estudios-cert.component';

describe('EstudiosCertComponent', () => {
  let component: EstudiosCertComponent;
  let fixture: ComponentFixture<EstudiosCertComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EstudiosCertComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EstudiosCertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
