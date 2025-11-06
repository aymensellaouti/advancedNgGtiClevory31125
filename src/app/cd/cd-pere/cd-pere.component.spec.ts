import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CdPereComponent } from './cd-pere.component';

describe('CdPereComponent', () => {
  let component: CdPereComponent;
  let fixture: ComponentFixture<CdPereComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CdPereComponent]
    });
    fixture = TestBed.createComponent(CdPereComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
