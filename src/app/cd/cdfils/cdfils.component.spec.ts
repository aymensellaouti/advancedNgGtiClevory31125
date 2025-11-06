import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CdfilsComponent } from './cdfils.component';

describe('CdfilsComponent', () => {
  let component: CdfilsComponent;
  let fixture: ComponentFixture<CdfilsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CdfilsComponent]
    });
    fixture = TestBed.createComponent(CdfilsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
