import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BranchesComponent } from './branches.component';

describe('BranchsComponent', () => {
  let component: BranchesComponent;
  let fixture: ComponentFixture<BranchesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BranchesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BranchesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
